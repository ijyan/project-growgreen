import React, { useState } from 'react';
import MyPageTabs from '../../../components/myPageTab/MyPageTab';

//! 작성된 게시물 페이지
function Index() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <MyPageTabs index={1} />
      <div>saldkfj</div>
    </>
  );
}

export default Index;
