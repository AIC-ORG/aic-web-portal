import axios from 'axios';
import { getCookie } from 'cookies-next';
import { io } from 'socket.io-client';

export const socket = io('https://aic-backend.onrender.com:5002', {
  transports: ['websocket'],
});

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const AuthApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Authorization: `Bearer ${getCookie('token')}`,
  },
});
