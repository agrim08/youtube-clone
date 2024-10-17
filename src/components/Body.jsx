import React from "react";
import SideBar from "./SideBar";
import HomeContainer from "./HomeContainer";

const Body = () => {
  return (
    <div className="grid grid-flow-col gap-5">
      <SideBar />
      <HomeContainer />
    </div>
  );
};

export default Body;
