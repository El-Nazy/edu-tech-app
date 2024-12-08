import React from "react";

const ReplyItem = ({ author, time, content }) => {
  return (
    <div className="ml-8 mb-4 border-l-2 pl-4">
      <h4 className="font-semibold">{author}</h4>
      <p className="text-sm text-gray-400">{time}</p>
      <p className="mt-1">{content}</p>
    </div>
  );
};

export default ReplyItem;
