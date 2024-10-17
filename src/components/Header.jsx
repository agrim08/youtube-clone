import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-md py-3 mx-2 h-18 my-2 rounded-lg">
      <div className="flex col-span-1 gap-3 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-7 cursor-pointer mx-1"
          src="https://ts4.mm.bing.net/th?id=OIP.YwZImfZTSczA_EzsVXFJmAAAAA&pid=15.1"
          alt="menu"
        />
        <img
          className="h-6 mx-2 text-center cursor-pointer"
          src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-9.png"
          alt="logo"
        />
      </div>
      <div className="flex col-span-10 mx-32 h-9">
        <input
          type="text"
          value="search"
          className="px-2 py-center border border-gray-400 rounded-l-full w-[500px] shadow-md"
        />
        <button className="flex items-center justify-evenly cursor-pointer border border-gray-400 rounded-r-full w-20 shadow-md bg-gray-100 text-white">
          <img
            className="h-6 mix-blend-multiply"
            src="https://th.bing.com/th/id/OIP.vyhkMafwzVBCCSsgGJfI4wHaHa?rs=1&pid=ImgDetMain"
            alt="search"
          />
        </button>
      </div>
      <div className="flex col-span-1">
        <img
          className="h-8"
          src="https://th.bing.com/th/id/OIP.yOX1_KBsR6fClg3ek8G_ZwHaHx?w=186&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Header;
