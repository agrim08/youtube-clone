import React, { useEffect } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../constants/YOUTUBE_API";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    //*make an api call after every key press
    //*but if the diff between two key press is < 200ms => decline api call

    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + search);
    const jsonData = await data.json();
    setSuggestions(jsonData[1]);
    // console.log(jsonData[1]);
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
      <div className="col-span-10">
        <div className="flex mx-32 h-9">
          <input
            placeholder="search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            type="text"
            value={search}
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
        {showSuggestions && (
          <div className="mx-28 absolute py-2 px-5 w-[500px] my-1 rounded-lg">
            <ul className="bg-white border border-gray-200 -my-2 shadow-lg rounded-md w-[500px]">
              {suggestions?.map((s) => (
                <li
                  key={s}
                  className="pt-2 flex items-center hover:bg-gray-100"
                >
                  <svg
                    className="h-4 w-5 text-balck m-2"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <circle cx="10" cy="10" r="7" />{" "}
                    <line x1="21" y1="21" x2="15" y2="15" />
                  </svg>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
