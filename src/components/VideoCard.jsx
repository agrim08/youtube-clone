import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 h-[330px] w-[345px] shadow-lg overflow-hidden">
      <div className=" cursor-pointer">
        <div>
          <img
            className="rounded-lg"
            src={thumbnails.medium.url}
            alt="thumbnail"
          />
        </div>
        <div className="font-bold py-2">{title}</div>
        <div>{channelTitle}</div>
        <div>{statistics.viewCount} views</div>
      </div>
    </div>
  );
};

export default VideoCard;
