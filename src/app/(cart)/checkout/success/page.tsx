import Link from 'next/link';

const Success = () => {
  return (
    <div className="w-full h-full bg-slate-200 flex px-5 sm:px-10 md:px-40 lg:px-52 py-16 flex-col items-center">
      <div className="w-full h-full flex flex-col items-center relative">
        <img src={'/images/sm-butt-fly.png'} alt="" className="absolute h-7 right-0 top-4" />
        <img src={'/images/lg-butt-fly.png'} alt="" className="absolute h-8 left-0 top-24" />
        <h1 className="font-bold mb-7">THANK YOU FOR YOUR PURCHASE</h1>
        <img
          src={'/images/wayzz.png'}
          alt="ariel ways image"
          className="object-contain h-40 mb-9"
        />
        <div className="flex flex-col md:flex-row items-center md:gap-10">
          <Link href={'#'} className="text-stone-500 underline font-bold">
            Continue Shopping
          </Link>
          <Link href={'#'} className="text-violet-900 font-bold">
            Watch More Ariel Wayz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
