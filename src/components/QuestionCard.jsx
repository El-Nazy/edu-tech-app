import React from "react";
import { FaHeart, FaReply, FaShareAlt, FaEllipsisH, FaArrowUp, FaArrowDown } from "react-icons/fa";

const QuestionCard = ({ title, content }) => {
  return (
    <div className="bg-white p-4 shadow-sm rounded-md mb-4">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-700 text-sm mt-2">{content}</p>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <button>
            <FaArrowUp />
          </button>
          <button>
            <FaArrowDown />
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-1">
            <FaHeart />
            <span>Likes</span>
          </button>
          <button className="flex items-center space-x-1">
            <FaReply />
            <span>Replies</span>
          </button>
          <button className="flex items-center space-x-1">
            <FaShareAlt />
            <span>Share</span>
          </button>
        </div>
        <button>
          <FaEllipsisH />
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
