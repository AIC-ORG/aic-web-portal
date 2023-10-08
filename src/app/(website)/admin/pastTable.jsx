import Wayz from '@/assets/pic7.jpg';
import { Link } from 'react-router-dom';

const PastTable = () => {
  return (
    <table className=" w-4/6 border-2 mt-5">
      <thead className="border bg-gray-100">
        <tr>
          <th>Title</th>
          <th className="">Created</th>
          <th>Duration</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr className="items-center">
          <td className="flex flex-row gap-x-4 w-5/6 h-20 items-center justify-center  ">
            <img src={Wayz} alt="arielle's upcoming events" className="rounded-full w-8 " />
            <p className="flex flex-col">
              Dancing with the stars
              <span className=" w-1/2 rounded-lg bg-lightblue text-1">Ended</span>
            </p>
          </td>
          <td className=" w-1/6 text-black text-center item-center">1hour 20min 23sec</td>
          <td className="text-center">1 hour 20 min 23 sec</td>
          <td className="flex justify-center h-20 items-center">
            <Link to={''} className=" ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PastTable;
