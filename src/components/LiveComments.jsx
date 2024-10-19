import React from "react";

const LiveComments = ({ name, text }) => {
  return (
    <div className="flex items-center border-b-2 ">
      <div className="flex col-span-1 p-2">
        <img
          className="h-6"
          src="https://th.bing.com/th/id/OIP.yOX1_KBsR6fClg3ek8G_ZwHaHx?w=186&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="profile"
        />
      </div>
      <span className="font-bold px-2">{name}</span>
      <span>{text}</span>
    </div>
  );
};

export default LiveComments;
