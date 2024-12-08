import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import QuestionItem from "../../components/QuestionItem";
import ReplyItem from "../../components/ReplyItem";
import ReplyInput from "../../components/ReplyInput";
import Pagination from "../../components/Pagination";

const QuestionYou= () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Header />

        {/* Questions Section */}
        <div className="mt-6">
          {/* Question Items */}
          <QuestionItem
            author="Evanto-hosted Lorem Ipsum"
            email="john@example.com"
            content="Lorem ipsum dolor sit amet consectetur. Volutpat arcu at vivamus vulputate..."
            time="5:00 PM"
          />
          <QuestionItem
            author="Audrey Jason"
            email="audrey@example.com"
            content="What is User-Centered Design?"
            time="2 hours ago"
          />

          {/* Replies Section */}
          <ReplyItem
            author="James Olsen"
            time="2 hours ago"
            content="Lorem ipsum dolor sit amet consectetur. Senectus adipiscing odio molestie quis donec."
          />
          <ReplyItem
            author="Jane Doe"
            time="1 hour ago"
            content="I completely agree with your point!"
          />

          {/* Reply Input */}
          <ReplyInput />

          {/* Pagination */}
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default QuestionYou
