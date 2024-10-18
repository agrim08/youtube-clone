import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../constants/YOUTUBE_VIDEO_API";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      ) : (
        <p>Loading ....</p>
      )}
    </div>
  );
};

export default HomeContainer;
