'use client';
import { IUser } from '@/types/user.type';
import { AuthApi } from '@/utils/fetch';
import { getCookie } from 'cookies-next';
import { usePathname } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react';
import { BiLoader } from 'react-icons/bi';

interface AuthContextProps {
  user: IUser | null;
  token: string | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [init, setInit] = useState(true);
  const pathname = usePathname();
  const isAuthPage = pathname.includes('auth');

  const getProfile = async () => {
    if (isAuthPage) return;
    try {
      const tk = getCookie('token');
      if (!tk) return;
      const res = await AuthApi.get(`/user/me`);
      console.log(res.data);
      const data = res.data?.data?.user ?? res.data?.data;
      setUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      setInit(false);
    }
  };

  useEffect(() => {
    const token = getCookie('token');
    if (!token) return;
    if (token && typeof token === 'string') {
      setToken(token);
    }
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, setToken, setUser }}>
      {init && !isAuthPage ? (
        <div className=" w-full flex flex-col h-screen items-center justify-center">
          <BiLoader size={30} className=" animate-spin" />
          Loading. Please Wait ...
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
