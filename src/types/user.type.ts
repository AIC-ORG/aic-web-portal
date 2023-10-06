export interface IUser {
  id: string;
  names: string;
  email: string;
  telephone: string;
  password: string;
  profile: string;
  role: UserRole;
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

export enum UserRole {
  ARTIST = 'ARTIST',
  USER = 'USER',
}
