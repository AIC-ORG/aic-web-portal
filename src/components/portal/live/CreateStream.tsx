import Modal from '@/components/core/Modal';
import { Button, Card } from '@tremor/react';
import { FC, useState } from 'react';
import { BiCalendar, BiCameraMovie, BiSolidChevronRight, BiX } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';
import NewStreamForm from './NewStreamForm';

interface Props {
  onClose: () => void;
  onRefresh: () => Promise<void>;
}

const defaultNext = {
  state: false,
  component: <></>,
  name: '',
};

const CreateStream: FC<Props> = ({ onClose, onRefresh }) => {
  const [next, setNext] = useState(defaultNext);
  return (
    <Modal>
      <div className="flex my-auto gap-y-6 w-full flex-col max-w-[600px] bg-white rounded-md p-11 pt-7 pb-14">
        <div className="flex w-full items-center justify-between">
          {next.state && ( // if next.state is true, show the back button
            <BsArrowLeft
              size={25}
              className="cursor-pointer"
              onClick={() => setNext({ ...defaultNext })}
            />
          )}
          <span className=" font-semibold capitalize text-lg">
            {next.name !== '' ? next.name : 'Create'}
          </span>
          <button className=" p-1 rounded-md border-none hover:bg-slate-100" onClick={onClose}>
            <BiX size={30} />
          </button>
        </div>
        {next.state ? (
          next.component
        ) : (
          <>
            <button
              onClick={() =>
                setNext({
                  state: true,
                  component: <NewStreamForm isLive onClose={onClose} />,
                  name: 'Go Live',
                })
              }
              className=" p-3 border-[1.5px] border-black rounded-md flex justify-between cursor-pointer hover:bg-slate-100 duration-300"
            >
              <div className=" flex gap-x-3 items-center">
                <BiCameraMovie size={30} />
                <div className="flex items-start flex-col gap-y-2">
                  <p className=" font-bold">Go Live</p>
                  <span className=" text-xs opacity-70 font-semibold">
                    Use the studio to live stream
                  </span>
                </div>
              </div>
              <BiSolidChevronRight />
            </button>
            <button
              onClick={() =>
                setNext({
                  state: true,
                  component: (
                    <NewStreamForm
                      onClose={() => {
                        onClose();
                        onRefresh();
                      }}
                    />
                  ),
                  name: 'Schedule live stream',
                })
              }
              className=" p-3 border-[1.5px] border-black rounded-md flex justify-between cursor-pointer hover:bg-slate-100 duration-300"
            >
              <div className=" flex gap-x-3 items-center">
                <BiCalendar size={30} />
                <div className="flex items-start flex-col gap-y-2">
                  <p className=" font-bold">Schedule live stream</p>
                  <span className=" text-xs opacity-70 font-semibold">
                    Live stream on the appointed date
                  </span>
                </div>
              </div>
              <BiSolidChevronRight />
            </button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default CreateStream;
