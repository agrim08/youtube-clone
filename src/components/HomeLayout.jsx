import React from "react";
import HomeContainer from "./HomeContainer";
import ButtonList from "./ButtonList";

const HomeLayout = () => {
  return (
    <div>
      <ButtonList />
      <HomeContainer />
    </div>
  );
};

export default HomeLayout;
