import React from "react";
import Header from '../../components/Header';
import Sidebar from "../../components/Sidebar";
import MessageInput from "../../components/MessageInput";
import QuestionList from "../../components/QuestionList";

const QuestionAsk = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Full width header */}
      <Header className="w-full" />
      
      <div className="flex">
        <Sidebar />
        <main className="w-3/4 p-6">
          <MessageInput />
          <QuestionList />
        </main>
      </div>
    </div>
  );
};

export default QuestionAsk;
