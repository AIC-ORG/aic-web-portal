import React, { useState } from 'react';
import Link from 'next/link';
import UpcomingTable from './upcomingTable';
import PastTable from './pastTable';
import Modal from '@/components/stream/Modal';
import { Fragment } from 'react';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { HiChevronRight } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { BiLoaderAlt } from 'react-icons/bi';
import api from '@/api';
import { PiArrowSquareOutDuotone } from 'react-icons/pi';
import { FaShare } from 'react-icons/fa';
import { BsArrowRightSquare } from 'react-icons/bs';
import { GrCircleQuestion } from 'react-icons/gr';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import DateTimePicker from 'react-datetime-picker';

const MyTable = () => {
  const [showUpcomingTable, setShowUpcomingTable] = useState(true);
  const [showPastTable, setShowPastTable] = useState(false);
  const [clicked, setClicked] = useState(true);
  const [showDateTimeField, setShowDateTimeField] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  const handleBothUpcomingClicks = () => {
    setClicked(true); // Set the state for "Upcoming" button
    handleClickUpcoming();
  };
  const handleBothPastClicks = () => {
    setClicked(false); // Set the state for "Past" button
    handleClickPast();
  };

  const handleClickUpcoming = () => {
    setShowUpcomingTable(true);
    setShowPastTable(false);
  };
  const handleClickPast = () => {
    setShowUpcomingTable(false);
    setShowPastTable(true);
  };

  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  const [submittedTitle, setSubmittedTitle] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [roomId, setRoomId] = useState('');

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await api().post('/stream/create', { ...formData });
      const { data } = response.data;

      setSubmittedTitle(formData.title);
      setCreatedAt(data.stream.createdAt);
      setRoomId(data.stream.roomId);

      setShowModal3(true);
      setShowModal2(false);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col m-20">
      <span className=" text-2xl font-bold mb-5">Streams and recording</span>

      <div className="flex flex-row w-11/12 border-b-2">
        <button
          className={`text-black w-2/12 h-11 text-xl items-center  text-opacity-40 ${
            clicked === true ? 'border-b-4 border-black text-black/80 font-semibold' : ''
          }`}
          onClick={handleBothUpcomingClicks}
        >
          Upcoming
        </button>
        <button
          className={`text-center text-black w-2/12 text-xl font-bold-70 text-opacity-40  ${
            clicked === false ? 'border-b-4 border-black text-black/80 font-semibold' : ''
          }`}
          onClick={handleBothPastClicks}
        >
          Past
        </button>
      </div>
      <button
        className="w-28 bg-black text-white font-bold py-2 px-4 rounded m-4 mt-8"
        onClick={() => setShowModal1(true)}
      >
        <span className="text-xl"> + </span> Create
      </button>
      {showUpcomingTable && <UpcomingTable />}
      {showPastTable && <PastTable />}

      {/* modals */}

      <Modal isVisible={showModal1} onClose={() => setShowModal1(false)}>
        <div className="flex flex-row">
          <h3 className="text-black text-xl font-bold mt-5 px-7">Create</h3>
          <button
            className="text-xl font-bold ml-auto px-9 transition-transform transform hover:scale-110 hover:text-gray-900"
            onClick={() => setShowModal1(false)}
          >
            <RxCross2 />
          </button>
        </div>
        <div className="py-3 px-5  flex flex-col gap-5 transition-all duration-600">
          <button
            className="border-2 border-gray-400 mb-3 rounded-lg p-5 flex flex-row gap-5 cursor-pointer focus:outline-none hover:shadow-xl"
            onClick={() => {
              setShowModal2(true);
              setShowModal1(false);
              setShowDateTimeField(false);
            }}
          >
            <div className="text-4xl pt-1">
              <HiOutlineVideoCamera />
            </div>
            <div className="flex flex-col">
              <h1 className="text-black font-bold mr-auto">Go Live</h1>
              <p className="text-gray-600 "> Use the studio to live stream</p>
            </div>
            <div className="text-4xl ml-auto">
              <HiChevronRight />
            </div>
          </button>

          <button
            className="border border-gray-400 mb-10 rounded-lg p-5 flex flex-row gap-5 focus:outline-none hover:shadow-xl"
            onClick={() => {
              setShowModal2(true);
              setShowModal1(false);
              setShowDateTimeField(true);
            }}
          >
            <div className="text-4xl pt-1">
              <FaRegCalendarAlt />
            </div>
            <div className="flex flex-col">
              <h1 className="text-black font-bold mr-auto">Schedule live stream</h1>
              <p className="text-gray-600"> Live stream on appointed date</p>
            </div>
            <div className="text-4xl ml-auto">
              <HiChevronRight />
            </div>
          </button>
        </div>
      </Modal>

      <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
        <div className="flex flex-row">
          <h3 className="text-black text-xl font-bold mt-5 px-7">Create a live stream now</h3>
          <button
            className="text-xl font-bold ml-auto px-9 transition-transform transform hover:scale-110 hover:text-gray-900"
            onClick={() => setShowModal2(false)}
          >
            <RxCross2 />
          </button>
        </div>

        <form className="p-7" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-600 flex gap-1"
            >
              Title <GrCircleQuestion className="mt-1" data-tooltip-id="title-tooltip" />
              <ReactTooltip id="title-tooltip" place="top" content="Add title for Live stream" />
            </label>
            <input
              type="text"
              id="title"
              className=" border border-gray-300 text-gray-600 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-400"
              value={formData.title}
              onChange={(e) => {
                setFormData({ ...formData, title: e.target.value });
              }}
              required
            />
          </div>

          <div class="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-600 flex gap-1"
            >
              Description{' '}
              <GrCircleQuestion className="mt-1" data-tooltip-id="description-tooltip" />
              <ReactTooltip
                id="description-tooltip"
                place="top"
                content="Add a description for live stream"
              />
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-600 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Say something about this live stream"
            ></textarea>
          </div>

          {/* {showDateTimeField && (
                  <div className="mb-6">
                    <label htmlFor="dateTime" className="block mb-2 text-sm font-medium text-gray-600 flex gap-1">
                      Date & Time <GrCircleQuestion className="mt-1" data-tooltip-id="datetime-tooltip" />
                      <ReactTooltip id="datetime-tooltip" place="top" content="Select the date and time for the live stream" />
                    </label>
                    <DateTimePicker id="datetime" onChange={(value) => setDateTime(value)} value={dateTime} minDate={new Date()}/>
                    <div>
                      <DateTimePicker/>
                    </div>
                  </div>

                )}  */}

          <div class="flex items-start mb-6">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded"
            />

            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-600 flex gap-1 "
            >
              Registration <GrCircleQuestion className="mt-1" data-tooltip-id="register-tooltip" />
              <ReactTooltip
                id="register-tooltip"
                place="top"
                content="Viewers will be asked to enter their 
                      name and email address to watch. You 
                      can view and download the list."
              />
            </label>
          </div>

          <div>
            <input
              class="block w-15 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer p-2.5"
              placeholder="Upload thumbnail"
              id="thumbnail"
              type="file"
            />
          </div>
          <button
            className="bg-black mt-4 text-center w-full h-12 mx-auto rounded text-white text-xl font-bold hover:bg-gray-900"
            type="submit"
          >
            {loading ? <BiLoaderAlt size={25} className="mx-auto animate-spin" /> : 'Continue'}
          </button>
        </form>
      </Modal>

      <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-row">
            <h3 className="text-black text-xl font-bold ">Your live stream is scheduled!</h3>
            <button
              className="text-xl font-bold ml-auto px-9 transition-transform transform hover:scale-110 hover:text-gray-900"
              onClick={() => setShowModal3(false)}
            >
              <RxCross2 />
            </button>
          </div>
          <button
            onClick={() => {
              setShowModal4(true);
              setShowModal3(false);
            }}
            className="border-2 border-gray-400 mb-3 rounded-lg p-5 flex flex-row hover:shadow-lg"
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-black font-bold mr-auto">
                {submittedTitle}
                {/* {roomId} */}
              </h1>
              <p className="text-gray-600 ">{createdAt} </p>
            </div>
            <div className="text-2xl ml-auto bg-white">
              <PiArrowSquareOutDuotone />
            </div>
          </button>
          <div className="flex flex-row gap-3 align-center ">
            <FaShare className="mt-1" /> <span className="font-semibold">Share with others</span>
          </div>

          <div class="flex h-5">
            <input
              id="showAgain"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded mt-1"
            />

            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-600 ">
              Don't show this again
            </label>
          </div>
          <button
            className="bg-black mt-4 text-center w-full h-12 mx-auto rounded text-white text-xl font-bold hover:bg-gray-900"
            onClick={() => {
              setShowModal4(true);
              setShowModal3(false);
            }}
          >
            {' '}
            Continue
          </button>
        </div>
      </Modal>

      <Modal isVisible={showModal4} onClose={() => setShowModal4(false)}>
        <div className="flex flex-col p-5 gap-3">
          <button
            className="text-xl font-bold ml-auto px-2 transition-transform transform hover:scale-110 hover:text-gray-900"
            onClick={() => setShowModal4(false)}
          >
            <RxCross2 />
          </button>
          <div className=" flex flex-col justify-center items-center gap-2">
            <h1 className="text-gray-600 font-bold ">
              Display name: <span className="text-black">{submittedTitle}</span>
            </h1>
            <Link
              to={`/live/${roomId}`}
              className="bg-black mt-4 text-center w-80 h-10  rounded text-white text-md font-bold flex flex-row gap-4 justify-center items-center hover:bg-gray-900"
            >
              Enter stream <BsArrowRightSquare className="rounded" />
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MyTable;
