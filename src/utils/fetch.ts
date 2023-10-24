import axios from 'axios';
import { getCookie } from 'cookies-next';
import { io } from 'socket.io-client';

export const socket = io('http://194.163.167.131:5002', {
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
