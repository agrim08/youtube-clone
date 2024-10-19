import React, { useEffect, useState } from "react";
import LiveComments from "./LiveComments";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { liveData } from "../utils/youtube_live_chat_comments.js";

const LiveMessage = () => {
  const dispatch = useDispatch();
  // console.log(liveData);

  const chatMessage = useSelector((store) => store.chat.messages);

  const [LiveText, setLiveText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const i = setInterval(() => {
      if (currentIndex < liveData.length) {
        dispatch(
          addMessage({
            name: liveData[currentIndex].username,
            message: liveData[currentIndex].message,
          })
        );
        currentIndex += 1; // Move to the next message
      } else {
        clearInterval(i); // Stop the interval when all messages have been dispatched
      }
    }, 1500);
    return () => clearInterval(i); // Clean up interval when component unmounts
  }, [liveData, dispatch]);

  return (
    <div className="border border-black rounded-lg">
      <div className="flex flex-col-reverse p-2  w-[399px] h-[400px] max-w-full overflow-y-scroll  bg-slate-100 rounded-lg  ">
        {chatMessage.map((c, index) => (
          <LiveComments key={index} name={c.name} text={c.message} />
        ))}
      </div>
      <form
        className="p-2 w-[399px] mt-1 border border-gray-400 rounded-full"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Agrim",
              message: LiveText,
            })
          );
          setLiveText("");
        }}
      >
        <input
          className="mr-2 h-8 p-2 rounded-full w-80 bg-slate-100 "
          type="text"
          placeholder="chat ->"
          value={LiveText}
          onChange={(e) => {
            setLiveText(e.target.value);
          }}
        />
        <button className="text-gray-500" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveMessage;
