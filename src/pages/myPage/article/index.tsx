import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MyPageTabs from '../../../components/myPageTab/MyPageTab';

//! 작성된 게시물 페이지
function Index() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Grow Green - 내가 쓴 게시물</title>
        </Helmet>
      </HelmetProvider>
      <MyPageTabs index={1} />
      <div>saldkfj</div>
    </>
  );
}

export default Index;
