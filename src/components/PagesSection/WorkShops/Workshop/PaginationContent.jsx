"use client";

import { Pagination } from "flowbite-react";

const PaginationContent = ({ totalPages, currentPage, handlePageChange }) => {
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        showIcons
        onPageChange={(e) => handlePageChange(e)}
        totalPages={totalPages}
      />
    </div>
  );
};

export default PaginationContent;
