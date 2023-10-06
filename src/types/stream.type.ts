export interface IStream {
  id: string;
  title: string;
  createdAt: Date | string;
  scheduled: Date | string;
  status: EStreamStatus;
  thumbnail: string;
  description: string;
}

export enum EStreamStatus {
  LIVE = 'LIVE',
  ENDED = 'ENDED',
  CANCELLED = 'CANCELLED',
  UPCOMING = 'UPCOMING',
}
