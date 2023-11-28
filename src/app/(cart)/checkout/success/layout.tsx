import { FC, ReactNode } from 'react';

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className="w-screen flex h-[90vh] bg-[#FAFAFA] flex-col overflow-x-hidden">{children}</div>
  );
};

export default layout;
