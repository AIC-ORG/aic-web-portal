import Image from 'next/image';
import { BiEnvelopeOpen, BiGlobe, BiLogoTiktok } from 'react-icons/bi';
import { BsArrow90DegUp, BsArrowUpRight } from 'react-icons/bs';
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutube,
  FaFacebookF,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-black  text-white relative z-10 overflow-hidden py-2">
      <div className="ltab:flex w-full grid five:grid-cols-2 justify-between xtab:px-20 phone:px-4 px-2 py-10 gap-5">
        <div className="flex text-sm ltab:text-base flex-col five:items-start items-center justify-center">
          <p className=" font-luckGuy md:text-4xl text-2xl text-center mx-auto ">ARIEL WAYZ</p>
          <p className="ltab:mt-4 mt-1 font-Roman max-w-xl text-center mx-auto 2sm:text-lg  italic 2sm:te">
            Indulge in the sweetness of your favourite music by your favourite artist
          </p>
        </div>
        <div className="flex text-sm ltab:text-base flex-col items-center">
          <h1 className="ltab:text-lg font-semibold">
            Join the Ariel Nation for latest news and updates
          </h1>
          <div className="flex mt-4 font-Roman rounded-[3.5em] bg-white pl-3 py-1 pr-1 text-sm">
            <input
              className="w-full border-none outline-none text-black"
              type="email"
              placeholder="Enter your email"
            />
            <button className={`rounded-3xl bg-black text-white ml-3 font-semibold px-4 py-2`}>
              Subscribe
            </button>
          </div>
          <div className="flex items-center gap-x-3 text-black tablet:ml-4 mt-4 justify-center">
            <a
              className="flex items-center w-8 rounded-full aspect-square hover:bg-bg-african duration-300 hover:text-white justify-center bg-white"
              href="https://www.youtube.com/@ArielWayz"
              target="_blank"
              rel="no-referrer noreferrer"
            >
              <FaYoutube className="text-xl" />
            </a>
            <a
              className="flex items-center w-8 rounded-full aspect-square hover:bg-bg-african duration-300 hover:text-white justify-center bg-white"
              href="#"
              target="_blank"
              rel="no-referrer noreferrer"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              className="flex items-center w-8 rounded-full aspect-square hover:bg-bg-african duration-300 hover:text-white justify-center bg-white"
              href="#"
              target="_blank"
              rel="no-referrer noreferrer"
            >
              <FaInstagramSquare className="text-xl" />
            </a>
            <a
              className="flex items-center w-8 rounded-full aspect-square hover:bg-bg-african duration-300 hover:text-white justify-center bg-white"
              href="mailto:arielWayz@gmail.com"
              target="_blank"
              rel="no-referrer noreferrer"
            >
              <BiEnvelopeOpen className="text-xl" />
            </a>
            <a
              className="flex items-center w-8 rounded-full aspect-square hover:bg-bg-african duration-300 hover:text-white justify-center bg-white"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoTiktok className="text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full justify-center">
        <span>&copy; 2023 AfricaInColors. All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
