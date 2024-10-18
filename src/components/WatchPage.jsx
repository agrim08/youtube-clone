import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const disptach = useDispatch();
  useEffect(() => {
    disptach(closeMenu());
  }, []);
  return (
    <div className="mx-10 my-4 p-2">
      <iframe
        className="rounded-lg"
        width="760"
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
  );
};

export default WatchPage;