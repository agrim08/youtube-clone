import React from "react";
import SideBar from "./SideBar";
import HomeContainer from "./HomeContainer";
import ButtonList from "./ButtonList";

const Body = () => {
  return (
    <div className="flex gap-5">
      <SideBar />
      <div className="flex flex-col">
        <ButtonList />
        <HomeContainer />
      </div>
    </div>
  );
};

export default Body;
