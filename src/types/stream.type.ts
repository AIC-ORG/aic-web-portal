import { IUser } from './user.type';

export interface IStream {
  thumbnail?: string | undefined;
  id: string;
  roomId: string;
  title: string;
  description: string;
  scheduledAt?: string | Date;
  createdById: string;
  status: EStreamStatus;
  createdAt: string | Date;
  updatedAt: string | Date;
  createdBy: IUser;
  attendees: IUser[];
}

export enum EStreamStatus {
  LIVE = 'LIVE',
  ENDED = 'ENDED',
  CANCELLED = 'CANCELLED',
  PENDING = 'PENDING',
}

export interface IMessage {
  content: string;
  id: string;
  roomId: string;
  senderId: string;
  streamId: string;
  createdAt: string;
  sender: IUser;
}
