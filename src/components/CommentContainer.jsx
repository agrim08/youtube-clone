import React from "react";

const commentsData = [
  {
    name: "Agrim",
    text: "Thanks for this video",
    replies: [
      {
        name: "John",
        text: "Thanks",
        replies: [
          {
            name: "Agrim",
            text: "Thanks for the reply",
            replies: [
              {
                name: "Agrim",
                text: "Thanks for the reply",
                replies: [
                  {
                    name: "Agrim",
                    text: "Thanks for the reply",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Agrim",
    text: "Thanks for this video",
    replies: [
      {
        name: "John",
        text: "Thanks",
        replies: [
          {
            name: "Agrim",
            text: "Thanks for the reply",
            replies: [
              {
                name: "Agrim",
                text: "Thanks for the reply",
                replies: [
                  {
                    name: "Agrim",
                    text: "Thanks for the reply",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Agrim",
    text: "Thanks for this video",
    replies: [
      {
        name: "John",
        text: "Thanks",
        replies: [
          {
            name: "Agrim",
            text: "Thanks for the reply",
            replies: [
              {
                name: "Agrim",
                text: "Thanks for the reply",
                replies: [
                  {
                    name: "Agrim",
                    text: "Thanks for the reply",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Agrim",
    text: "Thanks for this video",
    replies: [
      {
        name: "John",
        text: "Thanks",
        replies: [
          {
            name: "Agrim",
            text: "Thanks for the reply",
            replies: [
              {
                name: "Agrim",
                text: "Thanks for the reply",
                replies: [
                  {
                    name: "Agrim",
                    text: "Thanks for the reply",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    name: "Agrim",
    text: "Thanks for this video",
    replies: [
      {
        name: "John",
        text: "Thanks",
        replies: [
          {
            name: "Agrim",
            text: "Thanks for the reply",
            replies: [
              {
                name: "Agrim",
                text: "Thanks for the reply",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    name: "Agrim",
    text: "Thanks for this video",
    replies: [
      {
        name: "John",
        text: "Thanks",
        replies: [
          {
            name: "Agrim",
            text: "Thanks for the reply",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-center bg-gray-50 p-2 rounded-md">
      <img
        className="w-6 h-6"
        src="https://th.bing.com/th/id/OIP.yOX1_KBsR6fClg3ek8G_ZwHaHx?w=186&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        alt="user"
      />
      <div className="p-2 m-2">
        <div className="font-bold ">{name}</div>
        <div>{text}</div>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-7 border border-l-black ml-7">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-2 p-2 shadow-md">
      <span className="text-2xl font-extrabold shadow-sm text-red-800">
        Comments
      </span>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
