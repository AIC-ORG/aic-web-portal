import Wayz from '@/assets/pic7.jpg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '@/api';
import { FaShare } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { BsArrowRightSquare } from 'react-icons/bs';
import { format, parseISO } from 'date-fns';

const UpcomingTable = () => {
  const [streams, setStreams] = useState([]);

  const getStreams = async () => {
    try {
      const request = await api().get('/stream/get-streams?page=0&limit=5', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      const { data } = request.data;

      setStreams(data.streams);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getStreams();
  }, []);

  return (
    <div className="flex flex-col mt-3">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg overflow-hidden ">
            <table className="min-w-full divide-y divide-gray-300 ">
              <thead className="bg-gray-100 text-xl">
                {/* bg-[#C7C7C7] */}
                <tr>
                  <th
                    scope="col"
                    className="px-12 py-3 text-left text-md font-medium text-[#565656]"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-medium text-[#565656]"
                  >
                    Created
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-md font-medium text-[#565656]"
                  >
                    Scheduled
                  </th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {streams?.map((stream) => (
                  <tr key={stream.id}>
                    <td className="px-12 py-4 whitespace-nowrap text-md font-medium text-gray-800 flex flex-row gap-5">
                      <img src={Wayz} alt="Ariel upcoming events" className="rounded-full w-12" />
                      <div>
                        <h1 className="font-bold">{stream.title}</h1>
                        <p className="text-md text-blue-500 lowercase">{stream.status}...</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800">
                      {format(parseISO(stream.createdAt), 'EEE, MMM d, h:mm a')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-md text-gray-800">5:30 PM</td>
                    <td className="px-6 whitespace-nowrap text-md font-medium ">
                      <span className="flex items-center gap-2">
                        <FaShare className="" />
                        Share
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-md font-medium">
                      <Link
                        to={`/live/${stream.roomId}`}
                        className="bg-black mt-4 text-center w-40 h-10  rounded text-white text-md font-bold flex flex-row gap-4 justify-center items-center hover:bg-gray-900"
                      >
                        Enter stream <BsArrowRightSquare className="rounded" />
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-md font-medium">
                      <BiDotsVerticalRounded className="text-xl" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTable;
