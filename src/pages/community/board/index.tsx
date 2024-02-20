import React from 'react';
import SubTitle from '../../../components/SubTitle/SubTitle';
import Tab from '../../../components/Tab/Tab';
import { communityLink } from '../index';

// 자유게시판 페이지
export default function Index() {
  return (
    <>
      <SubTitle>자유게시판</SubTitle>
      <Tab links={communityLink} index={2} />

      <div>자유게시판</div>
    </>
  );
}
