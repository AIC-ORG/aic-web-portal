import axios from 'axios';
import { getCookie } from 'cookies-next';
import { io } from 'socket.io-client';

const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL ?? 'http://194.163.167.131:5002';

export const socket = io(socketUrl, {
  transports: ['websocket'],
});

const baseURL = process.env.NEXT_PUBLIC_API_URL ?? 'http://194.163.167.131:5800/api/v1';

export const api = axios.create({
  baseURL: baseURL,
});

export const AuthApi = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${getCookie('token')}`,
  },
});
