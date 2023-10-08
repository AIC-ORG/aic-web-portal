'use client';
import { useAuthContext } from '@/contexts/AuthContext';
import { useStreamContext } from '@/contexts/StreamContext';
import MainLayout from '@/layouts/MainLayout';
import { api, socket } from '@/utils/fetch';
import { useParams } from 'next/navigation';
import Peer from 'peerjs';
import { useEffect, useRef, useState } from 'react';

const Live = () => {
  const { streamId } = useParams();
  const { user, authenticated, setViewLogin } = useAuthContext();
  const { activeStream, setActiveStream } = useStreamContext();

  const webcamRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const peer = new Peer();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

  const getUserMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      if (webcamRef.current) {
        webcamRef.current.srcObject = stream;
      }

      // Connect to the PeerJS server (your NestJS backend)
      const myPeer = new Peer();
      myPeer.on('open', (peerId) => {
        // Emit the peerId to your signaling server (WebSocket server)
        // so that others can connect to this peer
        socket.emit('join-room', { roomId: streamId, peerId });
      });

      // Handle incoming calls from other peers
      myPeer.on('call', (call) => {
        call.answer(stream);
        call.on('stream', (remoteStream) => {
          // Display the remote stream from other peers
          if (webcamRef.current) {
            webcamRef.current.srcObject = remoteStream;
          }
        });
      });
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const getRemoteStream = async () => {
    try {
      // Connect to the PeerJS server (your NestJS backend)
      const myPeer = new Peer();
      myPeer.on('open', (peerId) => {
        // Emit the peerId to your signaling server (WebSocket server)
        // so that the streamer can connect to this peer
        socket.emit('join-room', { roomId: streamId, peerId });
      });

      // Handle incoming calls from the streamer
      myPeer.on('call', (call) => {
        call.answer(); // Answer the call
        call.on('stream', (remoteStream) => {
          // Display the stream from the streamer
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = remoteStream;
          }
        });
      });
    } catch (error) {
      console.error('Error connecting to streamer:', error);
    }
  };

  const sendMessage = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('sending message');
    socket.emit('message', { room: streamId, message, sender: user.names });
    setMessage('');
  };

  const getActiveStream = async () => {
    const request = await api.get(`/stream/${streamId}`);
    const { stream } = request.data.data;
    setActiveStream(stream);
  };

  const handleKeyDown = (e: { key: string; shiftKey: any; preventDefault: () => void }) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent a new line in the textarea
      console.log('sending message');
      socket.emit('message', { room: streamId, message, sender: user.names });
      setMessage('');
    }
  };

  useEffect(() => {
    console.log('active user', user);
    if (user?.role === 'ARTIST') getUserMedia();
    else getRemoteStream();

    socket.on('user_joined_chat', (data: any) => {
      console.log(`${data} has joined the chat`);
    });

    socket.on('new_message', (data: any) => {
      console.log('receiving message');
      console.log(data);
      setMessages((messages) => [...messages, data]);
    });
  }, []);

  useEffect(() => {
    getActiveStream();
  }, [streamId]);

  useEffect(() => {
    if (!authenticated) return;
    socket.emit('join_chat_room', { roomId: streamId, userId: user.id });
  }, [user.id]);

  return (
    <MainLayout>
      <div className="w-full  ltab:h-[calc(100vh_-_15vh)] flex ltab:flex-row flex-col">
        <div className="w-full ltab:w-8/12 ">
          <video
            className={`${
              activeStream.createdBy?.id === user.id ? 'flex' : 'hidden'
            } w-full object-cover`}
            playsInline
            autoPlay
            controls
            ref={webcamRef}
          />
          <video
            className={`${
              activeStream.createdBy?.id === user.id ? 'hidden' : 'flex'
            } w-full object-cover`}
            playsInline
            autoPlay
            controls
            ref={remoteVideoRef}
          />
        </div>
        <div className="w-full ltab:w-4/12 px-4 flex flex-col  justify-between">
          <div className="w-full flex flex-col text-white">
            <span className="font-bold text-lg text-center w-full">Live Chat</span>
            <div className="w-full h-[calc(100vh_-_15vh_-_10rem)] items-start flex flex-col overflow-y-auto">
              {messages.map((message, index) => (
                <div className="flex flex-col my-2 w-full items-start" key={index}>
                  <span className="font-bold">{message.sender}</span>
                  <span className="text-white">{message.content}</span>
                </div>
              ))}
            </div>
          </div>
          {authenticated ? (
            <div className="flex w-full">
              <form id="messageForm" onSubmit={sendMessage} className="w-full">
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="resize-none outline-none p-3 rounded-lg w-full bg-white class-full"
                  placeholder="Enter your message here"
                  onKeyDown={handleKeyDown}
                />
              </form>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <span>For you to chat you'll have to login</span>
              <button
                className="bg-white px-6 py-1 rounded-lg text-lg font-semibold text-black"
                onClick={() => setViewLogin(true)}
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Live;
