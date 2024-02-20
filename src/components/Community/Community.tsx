import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Community.Style';

function Community() {
  return (
    <S.Community>
      <Link to="/community">전체</Link>
      <Link to="/board">자유게시판</Link>
      <Link to="/inquiry">질문 & 고민</Link>
    </S.Community>
  );
}

export default Community;
