import { ReactNode, createContext, useContext, useState } from 'react';

const StreamContext = createContext({});

export const useStreamContext = () => {
  return useContext(StreamContext);
};

const StreamProvider = ({ children }) => {
  const [activeStream, setActiveStream] = useState({});

  return (
    <StreamContext.Provider
      value={{
        activeStream,
        setActiveStream,
      }}
    >
      {children}
    </StreamContext.Provider>
  );
};

export default StreamProvider;
