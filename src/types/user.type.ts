export interface user {
  id: string;
  names: string;
  email: string;
  telephone: string;
  password: string;
  profile: string;
  role: userRole;
  verificationStatus: string;
  verificationCode: any;
  verificationExpires: any;
  passwordResetStatus: string;
  passwordResetCode: any;
  passwordResetExpires: any;
  createdAt: string;
  updatedAt: string;
  streamId: any;
}

export enum userRole {
  ARTIST = 'ARTIST',
  USER = 'USER',
}
