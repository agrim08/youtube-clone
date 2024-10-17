import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //* early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-44">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li>History</li>
        <li>Playlist</li>
        <li>Your videos</li>
        <li>Your courses</li>
        <li>Watch later</li>
        <li>Liked videos</li>
      </ul>
      <ul className="pt-5 mb-5">
        <li>Settings</li>
        <li>Report history</li>
        <li>Help</li>
        <li>Send feedback</li>
      </ul>
    </div>
  );
};

export default SideBar;
