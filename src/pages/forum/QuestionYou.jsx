import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import QuestionItem from "../../components/QuestionItem";
import ReplyItem from "../../components/ReplyItem";
import ReplyInput from "../../components/ReplyInput";
import Pagination from "../../components/Pagination";

const QuestionYou = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Full width Header */}
      <Header className="w-full" />

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/4 bg-white shadow-md p-4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-50">
          {/* Questions Section */}
          <div className="space-y-6">
            <div className="text-xl font-semibold text-gray-700">Your Questions</div>

            {/* Question Items */}
            <div className="space-y-4">
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
            </div>

            {/* Replies Section */}
            <div className="space-y-4">
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
            </div>

            {/* Reply Input */}
            <div className="mt-6">
              <ReplyInput />
            </div>

            {/* Pagination */}
            <div className="mt-6">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionYou;
