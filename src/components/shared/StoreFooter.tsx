import { Button } from '../ui/Button';
import Image, { ImageLoader, StaticImageData } from 'next/image';
import Link from 'next/link';
import { Route } from 'next';

const StoreFooter = () => {
  return (
    <div className="w-full bg-black flex divide-y-2 divide-gray-500 flex-col">
      <div className="w-full flex-col md:flex-row flex md:gap-8 justify-between px-8 md:px-20 pt-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-5xl font-extrabold md:ml-10 text-white whitespace-nowrap">
            ARIEL WAYZ
          </h1>
          <i className="text-white/60 md:text-center text-xl md:max-w-md">
            Indulge in the sweetness of your favourite music by your favourite artist
          </i>
        </div>
        <div className="flex my-5 md:my-0 flex-col md:items-center">
          <h3 className="text-white font-semibold mb-4">
            Join the Ariel Nation for latest news and updates
          </h3>
          <div className=" p-2 flex items-center bg-white rounded-full">
            <input
              className="w-[90%] pl-4 outline-none border-none mr-3 rounded-full"
              placeholder="Enter your email"
            />
            <Button className="bg-black text-white rounded-full">Subscribe</Button>
          </div>
          <div className="flex items-center justify-center gap-3 my-7">
            {(
              ['/images/yt.png', '/images/fb.png', '/images/ig.png', '/images/twitter.png'] as const
            ).map((e, i) => (
              <Image
                key={i}
                src={e}
                className="h-7"
                alt="logo"
                width={40}
                height={80}
                quality={7}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2 justify-between text-white/50 px-7 sm:px-20 py-4">
        <h4 className="lg:w-1/3">@2023 AfricaInColors. All rights reserved</h4>
        <div className="lg:w-2/3 lg:pl-32 flex flex-col sm:flex-row sm:gap-5 lg:justify-between sm:items-center">
          {['FAQs', 'Privacy Conditions', 'Terms and Conditions'].map((e, i) => (
            <Link key={i} href={e as Route<string>}>
              {e}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreFooter;
