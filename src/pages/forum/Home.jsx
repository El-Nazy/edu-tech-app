import React, { useState } from "react";
import Grid from "../../components/Grid";
import Pagination from "../../components/Pagination";
import data from "../../data/data";
import Header from "../../components/Header";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 bg-gray-50">
      <Header />
      <div className="container mx-auto">
        <Grid items={paginatedData} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Home;
