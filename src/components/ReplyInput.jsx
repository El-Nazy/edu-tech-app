import React from "react";

const ReplyInput = () => {
  return (
    <div className="ml-8 mt-4">
      <textarea
        className="w-full border rounded-md p-2"
        rows="3"
        placeholder="Write your reply..."
      ></textarea>
      <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md">
        Send Now
      </button>
    </div>
  );
};

export default ReplyInput;
