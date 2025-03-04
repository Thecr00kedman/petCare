import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ paginationData, setPage }) => {
  const { totalDocs, limit, totalPages, currentPage } = paginationData ||{};

  const handlePageChange = (e) => {
    setPage(e.selected+1)
 };
 
  return (
    <ReactPaginate
      className='pagination flex flex-row items-center justify-center gap-2 p-4'
      pageClassName="page-class text-sm py-1 px-2 border-[#dadada] border-2 rounded-md shadow-btn"
      activeClassName="active-page text-sm py-1 px-2 rounded-md bg-[#5271FF] text-white shadow-btn"
      nextClassName="next-class text-sm py-1 px-2 border-[#dadada] border-2 rounded-md shadow-btn"
      previousClassName='text-sm py-1 px-2 border-[#dadada] border-2 rounded-md shadow-btn'
      disabledClassName="disabled-page"
      breakClassName="break-class"
      previousLabel="previous"
      nextLabel="next"
      pageCount={totalPages}
    //   forcePage={currentPage - 1} 
      onPageChange={handlePageChange}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
    />
  );
};


export default Pagination