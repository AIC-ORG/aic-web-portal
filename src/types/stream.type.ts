import { IUser } from './user.type';

export interface IStream {
  thumbnail?: string | undefined;
  id: string;
  roomId: string;
  title: string;
  description: string;
  scheduledAt?: string;
  createdById: string;
  status: EStreamStatus;
  createdAt: string;
  updatedAt: string;
  createdBy: IUser;
  attendees: IUser[];
}

export enum EStreamStatus {
  LIVE = 'LIVE',
  ENDED = 'ENDED',
  CANCELLED = 'CANCELLED',
  PENDING = 'PENDING',
}
