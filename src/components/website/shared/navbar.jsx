/* eslint-disable react/no-unescaped-entities */

const Navbar = () => {
  return (
    <div className="flex 2sm:flex-row flex-col sticky items-center font-luckGuy justify-center  bg-white p-3">
      <span className=" md:text-3xl five:text-left text-center text-lg uppercase font-bold">
        "Ariel Ways" The Live Experience
      </span>
      <button className="ml-4 bg-black text-white px-8 py-2 ">View Dates</button>
    </div>
  );
};

export default Navbar;
