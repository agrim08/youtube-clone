import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../constants/YOUTUBE_VIDEO_API";
import VideoCard from "./VideoCard";

const HomeContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="">
      <VideoCard info={videos[0]} />
    </div>
  );
};

export default HomeContainer;
