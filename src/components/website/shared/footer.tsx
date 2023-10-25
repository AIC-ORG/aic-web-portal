import Image from 'next/image';
import { BiEnvelopeOpen, BiGlobe, BiLogoTiktok } from 'react-icons/bi';
import { BsArrow90DegUp, BsArrowUpRight } from 'react-icons/bs';
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-black  text-white relative z-10 overflow-hidden py-2">
      <div className="ltab:flex w-full grid five:grid-cols-2 justify-between xtab:px-20 phone:px-4 px-2 py-10 gap-5">
        <div className="flex text-sm ltab:text-base flex-col five:items-start items-center justify-center">
          <p className=" font-luckGuy md:text-4xl text-2xl text-center mx-auto ">ARIEL WAYZ</p>
          <p className="ltab:mt-4 mt-1 text-center mx-auto 2sm:text-lg  italic 2sm:text-start">
            Indulge in the sweetness of your favourite music by your favourite artist
          </p>
          <div className="flex items-center tablet:ml-4 mt-4 justify-center">
            <a
              className="flex items-center px-2"
              href="https://www.youtube.com/@ArielWayz"
              target="_blank"
              rel="no-referrer noreferrer"
            >
              <FaYoutube className="text-xl" />
            </a>
            <a
              className="flex items-center px-2"
              href="#"
              target="_blank"
              rel="no-referrer noreferrer"
            >
              <FaFacebookSquare className="text-xl" />
            </a>
            <a
              className="flex items-center px-2"
              href="#"
              target="_blank"
              rel="no-referrer noreferrer"
            >
              <FaInstagramSquare className="text-xl" />
            </a>
            <a
              className="flex items-center px-2"
              href="mailto:arielWayz@gmail.com"
              target="_blank"
              rel="no-referrer noreferrer"
            >
              <BiEnvelopeOpen className="text-xl" />
            </a>
            <a className="flex items-center px-2" href="#" target="_blank" rel="noreferrer">
              <BiLogoTiktok className="text-xl" />
            </a>
          </div>
        </div>
        <div className="flex text-sm ltab:text-base flex-col five:items-start items-center">
          <h1 className="ltab:text-xl font-semibold">Company</h1>
          <a className="ltab:mt-4 font-semibold mt-1 truncate" href="/portal" target="_blank">
            Go To Portal <BsArrowUpRight className="inline-block" />
          </a>
          <a className="ltab:mt-4 mt-1" href="#">
            Contact
          </a>
          <a className="ltab:mt-4 mt-1" href="#">
            FAQS
          </a>
          <a className="ltab:mt-4 mt-1" href="#">
            Blog
          </a>
        </div>
        <div className="flex text-sm ltab:text-base flex-col five:items-start items-center">
          <h1 className="ltab:text-xl font-semibold">Information</h1>
          <a className="ltab:mt-4 mt-1" href="#">
            About
          </a>
          <a className="ltab:mt-4 mt-1" href="#">
            Contact
          </a>
          <a className="ltab:mt-4 mt-1" href="#">
            Privacy Policy
          </a>
          <a className="ltab:mt-4 mt-1" href="#">
            Terms & Conditions
          </a>
        </div>
        <div className="flex text-sm ltab:text-base flex-col five:items-start items-center">
          <h1 className="ltab:text-xl font-semibold">Join our Mailing list</h1>
          <p className="ltab:mt-4 mt-1">Get the latest news and updates</p>
          <div className="flex mt-4 rounded-[3.5em] bg-white pl-3 py-1 pr-1 text-sm">
            <input
              className="w-full border-none outline-none text-black"
              type="email"
              placeholder="Enter your email"
            />
            <button className={`rounded-3xl bg-black text-white ml-3 font-semibold px-4 py-2`}>
              Subscribe
            </button>
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
