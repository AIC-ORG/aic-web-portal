'use client';
import { useAuth } from '@/contexts/AuthProvider';
import { IMessage, IStream } from '@/types/stream.type';
import { AuthApi } from '@/utils/fetch';
import { socket } from '@/utils/fetch';
import React, { FC, useEffect, useRef, useState } from 'react';
import Peer from 'peerjs';
import Image from 'next/image';
import StreamPlayer from '@/components/portal/live/StreamPlayer';

interface Props {
  stream: IStream;
}

const LiveRoomIndex: FC<Props> = ({ stream }) => {
  console.log('stream on client', stream);
  const webcamRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const { user } = useAuth();
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<IMessage[]>([]);

  const fetchMessages = async (streamId: string | undefined) => {
    try {
      const response = await AuthApi.get(`/message/room/${streamId}`);
      console.log(response.data);
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
      return [];
    }
  };

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('sending message');
    console.log(user);
    socket.emit('message', { room: stream.roomId, message, sender: user });
    setMessage('');
  };

  socket.on('new_message', (data: IMessage) => {
    console.log('receiving message');
    setMessages([...messages, data]);
  });

  useEffect(() => {
    fetchMessages(stream.roomId);

    //
    const initializeWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        if (webcamRef.current) {
          webcamRef.current.srcObject = stream;
        }

        const myPeer = new Peer();
        myPeer.on('open', (peerId) => {
          socket.emit('join_room', { roomId: stream.id, userId: user?.id, peerId });
        });

        type ViewerPeerIds = {
          userId: string;
          peerId: string;
        }[];

        // Assuming you have a list of viewer peer IDs in the 'viewerPeerIds' array
        const viewerPeerIds: ViewerPeerIds = [];
        socket.on('sending-peer', (data) => {
          console.log(`Viewer ${data.userId} joined`);
          viewerPeerIds.push(data);

          viewerPeerIds.forEach((viewerPeerId) => {
            const call = myPeer.call(viewerPeerId.peerId, stream);
            console.log(`Calling viewer ${viewerPeerId.peerId}`);

            call.on('stream', (remoteStream) => {
              console.log(`Viewer ${viewerPeerId} answered`);
              console.log(remoteStream);
              // You can handle the remote stream here if needed, but it's not necessary
            });
          });
        });

        // Create calls to each viewer and send the stream
        viewerPeerIds.forEach((viewerPeerId) => {
          const call = myPeer.call(viewerPeerId.peerId, stream);
          console.log(`Calling viewer ${viewerPeerId.peerId}`);

          call.on('stream', (remoteStream) => {
            console.log(`Viewer ${viewerPeerId} answered`);
            console.log(remoteStream);
            // You can handle the remote stream here if needed, but it's not necessary
          });
        });
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    const initializeViewer = async () => {
      try {
        console.log('Initializing viewer');
        const myPeer = new Peer();
        myPeer.on('open', (peerId) => {
          socket.emit('join_room', { roomId: stream.id, userId: user?.id, peerId });
        });

        // Listen for incoming calls from the streamer
        myPeer.on('call', async (call) => {
          console.log('Incoming call from streamer');

          // Don't create a new MediaStream here; just answer the call
          call.answer();

          call.on('stream', (remoteStream) => {
            console.log('Received remote stream from streamer');
            if (remoteVideoRef.current) {
              remoteVideoRef.current.srcObject = remoteStream;
              console.log('This is the remote media :', remoteVideoRef.current.srcObject);
            } else {
              console.log('remoteVideoRef is null');
            }
          });
        });
      } catch (error) {
        console.error('Error connecting to streamer:', error);
      }
    };

    if (user?.role === 'ARTIST') {
      initializeWebcam();
    } else {
      initializeViewer();
    }

    socket.on('user_joined_chat', (data) => {
      console.log(`${data} has joined the chat`);
    });

    // Fetch chat messages and setMessages
    socket.emit('join_chat_room', { roomId: stream.id, userId: user?.id });

    return () => {
      socket.off('user_joined_chat');
      // Clean up resources as needed
    };
  }, [stream.id, user?.id, user?.role]);

  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full lg:flex-row flex-col gap-3">
        <StreamPlayer webcamRef={webcamRef} stream={stream} remoteVideoRef={remoteVideoRef} />
        {/* Viewer-specific or Artist-specific UI */}
        <div className="chat-box rounded-xl flex min-h-[20vh] flex-col justify-between overflow-hidden border border-black lg:w-1/3 min-w-[300px]">
          <div className="flex w-full bg-black text-white px-6 py-3">
            <span>Live Chat</span>
          </div>
          <div className="flex px-6 py-3 flex-col justify-center items-center">
            {messages.map((msg, index) => (
              <div className="bg-blue-400 my-2 w-[80%]" key={index}>
                <p>{msg.createdAt}</p>
                <p>{msg.content}</p>
                <p>{msg.senderId}</p>
              </div>
            ))}
          </div>
          <div className="flex p-2">
            <form
              className="w-[100%] flex flex-row border rounded-3xl overflow-hidden justify-center items-center"
              onSubmit={handleSendMessage}
            >
              <Image
                width={50}
                height={50}
                src={'/images/wayz.jpeg'}
                alt=""
                className=" rounded-full h-11 w-11 object-cover"
              />
              <input
                className=" h-full outline-none focus-within:border-black duration-300 w-full py-2 my-2 ml-2"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="bg-black h-full text-white py-2 px-4" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveRoomIndex;
