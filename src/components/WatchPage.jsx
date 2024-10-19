import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommnetContainer from "./CommentContainer";
import LiveMessage from "./LiveMessage";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const disptach = useDispatch();
  useEffect(() => {
    disptach(closeMenu());
  }, []);
  return (
    <div className="flex flex-col">
      <div className="ml-2 px-5 flex w-full ">
        <div className="mr-1">
          <iframe
            className="rounded-lg shadow-lg"
            width="800"
            height="400"
            src={`https://www.youtube.com/embed/${searchParams.get(
              "v"
            )}?autoplay=1`}
            title="Arjun Celebrates his WR Chess Victory with Pragg, Vidit &amp; Vaishali"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="">
          <LiveMessage />
        </div>
      </div>
      <CommnetContainer />
    </div>
  );
};

export default WatchPage;
