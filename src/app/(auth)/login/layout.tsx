import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Wayz - Login',
  description: 'Wayz - Login',
};

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default LoginLayout;
