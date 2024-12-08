import React from "react";
import Card from "./Card";

const Grid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          students={item.students}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Grid;
