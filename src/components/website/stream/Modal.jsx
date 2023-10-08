import React from 'react';

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };

  return (
    <div
      onClick={handleClose}
      id="wrapper"
      className="absolute inset-0 bg-black bg-opacity-30 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0"
    >
      <div className="w-[600px] flex flex-col bg-white rounded shadow-lg">
        <div className="bg-white p-2 rounded">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
