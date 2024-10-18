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
    <div className="flex flex-wrap w-full">
      {videos.length > 0 ? (
        videos.map((video) => <VideoCard key={video.id} info={video} />)
      ) : (
        <p>Loading ....</p>
      )}
    </div>
  );
};

export default HomeContainer;
