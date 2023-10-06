import { IStream, EStreamStatus } from '@/types/stream.type';

export const sampleStreams: IStream[] = [
  {
    id: '1',
    title: 'First Stream',
    createdAt: new Date(),
    scheduled: new Date(),
    status: EStreamStatus.LIVE,
    thumbnail:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQe6E7eVSVODI-HLzTgY38Nxi73J35sI3J1RSV1l6JM8auHro0O',
    description: 'This is the first stream',
  },
  {
    id: '2',
    title: 'Second Stream',
    createdAt: new Date(),
    scheduled: new Date(),
    status: EStreamStatus.ENDED,
    thumbnail:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQe6E7eVSVODI-HLzTgY38Nxi73J35sI3J1RSV1l6JM8auHro0O',
    description: 'This is the second stream',
  },
  {
    id: '3',
    title:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQe6E7eVSVODI-HLzTgY38Nxi73J35sI3J1RSV1l6JM8auHro0O',
    createdAt: new Date(),
    scheduled: new Date(),
    status: EStreamStatus.CANCELLED,
    thumbnail:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQe6E7eVSVODI-HLzTgY38Nxi73J35sI3J1RSV1l6JM8auHro0O',
    description: 'This is the third stream',
  },
];
