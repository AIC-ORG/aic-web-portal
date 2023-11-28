import { FC } from 'react';
import { FaSpinner } from 'react-icons/fa';

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col gap-3 items-center justify-center">
      <FaSpinner className=" animate-spin" />
      <h1 className="text-xl font-bold">Loading ....</h1>
    </div>
  );
};

export default loading;
