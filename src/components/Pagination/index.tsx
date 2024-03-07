import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import './Pagination.css';

interface IProp {
  /** 현재 페이지 */
  activePage: number;
  /** 한 페이지 당 보여줄 아이템 수 */
  itemsCountPerPage: number;
  /** 총 아이템 수 */
  totalItemsCount: number;
  /** 보여줄 범위 */
  pageRangeDisplayed: number;
  /** 이전 페이지 텍스트 */
  prevPageText: string;
  /** 다음 페이지 텍스트 */
  nextPageText: string;
  /**
   * 페이지가 바뀔 때 핸들링 하는 함수
   * @param {number} pageNumber - 현재 페이지
   */
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
