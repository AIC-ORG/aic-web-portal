import { BiEnvelopeOpen, BiGlobe } from 'react-icons/bi';
import { FaLinkedin, FaGithubSquare, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#390101]  text-white relative z-10 overflow-hidden py-2">
      <div className="ltab:flex w-full grid five:grid-cols-2 justify-between xtab:px-20 phone:px-4 px-2 py-10 gap-5">
        <div className="flex text-sm ltab:text-base flex-col five:items-start items-center justify-center">
          <img className="ltab:w-[150px] w-[100px]" src="/wayzone.png" alt="" />
          <p className="ltab:mt-4 mt-1 text-center phone:text-start">
            Need to know more about us? contact us.
          </p>
          <div className="flex items-center tablet:ml-4 mt-4 justify-center">
            <a
              className="flex items-center px-2"
              href="https://www.linkedin.com/in/ishimwe-ndungutse-charles-079418227/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              className="flex items-center px-2"
              href="https://github.com/NdungutseCharles103"
              target="_blank"
              rel="no-referrer noreferrer"
            >
              <FaGithubSquare className="text-xl" />
            </a>
            <a
              className="flex items-center px-2"
              href="https://www.facebook.com/ishimwendungutsecharles"
              target="_blank"
              rel="no-referrer noreferrer"
            >
              <FaFacebookSquare className="text-xl" />
            </a>
            <a
              className="flex items-center px-2"
              href="https://www.instagram.com/ndungutse_charles/"
              target="_blank"
              rel="no-referrer noreferrer"
            >
              <FaInstagramSquare className="text-xl" />
            </a>
            <a
              className="flex items-center px-2"
              href="mailto:ndungutsecharles103@gmail.com"
              target="_blank"
              rel="no-referrer noreferrer"
            >
              <BiEnvelopeOpen className="text-xl" />
            </a>
            <a
              className="flex items-center px-2"
              href="https://www.ndungutsecharles.me"
              target="_blank"
              rel="no-referrer noreferrer"
            >
              <BiGlobe className="text-xl" />
            </a>
          </div>
        </div>
        <div className="flex text-sm ltab:text-base flex-col five:items-start items-center">
          <h1 className="ltab:text-xl font-semibold">Company</h1>
          <a className="ltab:mt-4 mt-1" href="#">
            About
          </a>
          <a className="ltab:mt-4 mt-1" href="#">
            Contact
          </a>
          <a className="ltab:mt-4 mt-1" href="#">
            Blog
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
            Blog
          </a>
          <a className="ltab:mt-4 mt-1" href="#">
            Blog
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
            <button className={`rounded-3xl bg-[#390101] text-white ml-3 font-semibold px-4 py-2`}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
