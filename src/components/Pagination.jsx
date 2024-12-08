import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <button className="px-4 py-2 border rounded-md">1</button>
      <button className="px-4 py-2 border rounded-md">2</button>
      <button className="px-4 py-2 border rounded-md">3</button>
      <button className="px-4 py-2 border rounded-md">...</button>
      <button className="px-4 py-2 border rounded-md">10</button>
    </div>
  );
};

export default Pagination;
