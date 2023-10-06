import { FaShoppingBag, FaUserCircle } from 'react-icons/fa';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdMusicNote, MdMovie } from 'react-icons/md';
import { RiSignalTowerFill } from 'react-icons/ri';
import { BiGlobe } from 'react-icons/bi';

export const sideBarLinks = [
  {
    name: 'Dashboard',
    icon: <LuLayoutDashboard className=" mr-3" />,
    link: '/portal' as any,
  },
  {
    name: 'Music',
    icon: <MdMusicNote className=" mr-3" />,
    link: '/portal/music' as any,
  },
  {
    name: 'Web Content',
    icon: <BiGlobe className=" mr-3" />,
    link: '/portal/web-content' as any,
  },
  {
    name: 'Videos',
    icon: <MdMovie className=" mr-3" />,
    link: '/portal/videos' as any,
  },
  {
    name: 'Store',
    icon: <FaShoppingBag className=" mr-3" />,
    link: '/portal/store' as any,
  },
  {
    name: 'Live',
    icon: <RiSignalTowerFill className=" mr-3" />,
    link: '/portal/live' as any,
  },
  {
    name: 'Account',
    icon: <FaUserCircle className=" mr-3" />,
    link: '/portal/account' as any,
  },
];
