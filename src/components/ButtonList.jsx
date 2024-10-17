import React from "react";
import Button from "./Button";

const btnList = [
  "All",
  "Cricket",
  "News",
  "Live",
  "BGMI",
  "Chess",
  "Cooking",
  "JavaScript",
  "Podcasts",
  "Gaming",
  "Music",
];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap space-x-3">
      {btnList.map((item) => {
        return <Button key={item} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
