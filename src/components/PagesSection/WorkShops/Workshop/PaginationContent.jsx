"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

const PaginationContent = () => {
  let page = 1;
  const [currentPage, setCurrentPage] = useState(1);
  // const onPageChange = (page: number) => setCurrentPage(page);
  return (
    <div>
      <Pagination
        currentPage={1}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
        totalPages={100}
      />
    </div>
  );
};

export default PaginationContent;
