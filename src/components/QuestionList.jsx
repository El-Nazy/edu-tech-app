import React from "react";
import QuestionCard from "./QuestionCard";

const QuestionList = () => {
  const questions = [
    { title: "What is User Centered Design", content: "Lorem ipsum dolor sit amet consectetur adipiscing elit..." },
    { title: "What is User Centered Design", content: "Lorem ipsum dolor sit amet consectetur adipiscing elit..." },
    { title: "What is User Centered Design", content: "Lorem ipsum dolor sit amet consectetur adipiscing elit..." },
  ];

  return (
    <section>
      <h2 className="font-bold text-lg mb-4">Previous Questions</h2>
      {questions.map((q, index) => (
        <QuestionCard key={index} title={q.title} content={q.content} />
      ))}
    </section>
  );
};

export default QuestionList;
