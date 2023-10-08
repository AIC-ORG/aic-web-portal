'use client';
import { ReactNode, createContext, useContext, useState } from 'react';

const AuthContext = createContext({} as any);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: any) => {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem('token') ? true : false);
  const [user, setUser] = useState(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : {},
  );
  const [viewLogin, setViewLogin] = useState(false);
  const [viewSignup, setViewSignup] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authenticated,
        setAuthenticated,
        viewLogin,
        setViewLogin,
        viewSignup,
        setViewSignup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
