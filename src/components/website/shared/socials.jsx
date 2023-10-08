import { BiEnvelopeOpen } from 'react-icons/bi';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="flex absolute right-4 -translate-y-1/2 top-1/2 items-center gap-y-6 five:py-6 py-2 five:px-2 px-1 bg-dark-brownish text-gray-200 flex-col">
      <a
        className="flex items-center five:px-2 px-1"
        href="https://www.facebook.com/ishimwendungutsecharles"
        target="_blank"
        rel="no-referrer noreferrer"
      >
        <FaFacebookSquare className="five:text-3xl" />
      </a>
      <a
        className="flex items-center five:px-2 px-1"
        href="https://www.instagram.com/ndungutse_charles/"
        target="_blank"
        rel="no-referrer noreferrer"
      >
        <FaInstagramSquare className="five:text-3xl" />
      </a>
      <a
        className="flex items-center five:px-2 px-1"
        href="mailto:ndungutsecharles103@gmail.com"
        target="_blank"
        rel="no-referrer noreferrer"
      >
        <BiEnvelopeOpen className="five:text-3xl" />
      </a>
    </div>
  );
};

export default Socials;
