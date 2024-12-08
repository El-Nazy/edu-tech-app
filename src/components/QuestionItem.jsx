import React from "react";

const QuestionItem = ({ author, email, content, time }) => {
  return (
    <div className="p-4 mb-4 bg-white shadow rounded-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{author}</h3>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
        <span className="text-sm text-gray-400">{time}</span>
      </div>
      <p className="mt-2">{content}</p>
      <div className="flex items-center space-x-4 mt-4 text-gray-600">
        <button>👍 Likes</button>
        <button>💬 Replies</button>
        <button>🔗 Share</button>
      </div>
    </div>
  );
};

export default QuestionItem;
