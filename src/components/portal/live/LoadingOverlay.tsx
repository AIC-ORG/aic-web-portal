import Modal from '@/components/core/Modal';
import { FC } from 'react';
import { BiHourglass } from 'react-icons/bi';
// import { AiOutlineLoading3Quarters } from 'react-icons/ai';

interface Props {
  title?: string;
}

const LoadingOverlay: FC<Props> = ({ title }) => {
  return (
    <Modal>
      <div className=" text-white w-full flex flex-col h-screen items-center justify-center">
        {/* <div className=" text-white w-full top-0 left-0 right-0 bottom-0 absolute flex flex-col h-screen items-center justify-center">
          <AiOutlineLoading3Quarters
            //   size={100}
            className=" text-[20em] animate-spin"
          />
        </div> */}
        <BiHourglass size={30} className=" animate-spin" />
        <h1 className=" font-semibold text-3xl">{title}</h1>
        Please Wait ...
      </div>
    </Modal>
  );
};

export default LoadingOverlay;
