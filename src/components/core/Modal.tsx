import React, { FC } from 'react';

interface Props {
  onOverlayClick?: () => void;
  children: React.ReactNode;
}

const Modal: FC<Props> = ({ onOverlayClick, children }) => {
  return (
    <div
      className="fixed z-50 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
      onClick={onOverlayClick}
    >
      <div className="absolute top-1/2 left-1/2 overflow-y-auto flex items-center flex-col h-screen -translate-x-1/2 -translate-y-1/2 w-full p-6">
        {children}
      </div>
    </div>
  );
};

export default Modal;
