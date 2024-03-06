import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import './Pagination.css';

interface IProp {
  activePage: number;
  itemsCountPerPage: number;
  totalItemsCount: number;
  pageRangeDisplayed: number;
  prevPageText: string;
  nextPageText: string;
  onChange: (pageNumber: number) => void;
}

function Index({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  pageRangeDisplayed,
  prevPageText,
  nextPageText,
  onChange,
}: IProp) {
  return (
    <Pagination
      activePage={activePage}
      itemsCountPerPage={itemsCountPerPage}
      totalItemsCount={totalItemsCount}
      pageRangeDisplayed={pageRangeDisplayed}
      prevPageText={prevPageText}
      nextPageText={nextPageText}
      onChange={onChange}
    />
  );
}

export default Index;
