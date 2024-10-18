import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-68 h-76 shadow-lg">
      <div className="h-auto w-[330px] cursor-pointer">
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
