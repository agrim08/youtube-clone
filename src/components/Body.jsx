import React from "react";
import SideBar from "./SideBar";
import HomeContainer from "./HomeContainer";
import ButtonList from "./ButtonList";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex gap-5">
      <SideBar />

      <div className="flex flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
