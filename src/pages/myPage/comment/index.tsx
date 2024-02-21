import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MyPageTabs from '../../../components/MyPageTab/MyPageTab';

// 작성된 댓글 설정
function Index() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Grow Green - 내가 쓴 댓글</title>
        </Helmet>
      </HelmetProvider>
      <MyPageTabs index={2} />
      <div>asdkfj</div>
    </>
  );
}

export default Index;
