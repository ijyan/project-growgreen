import React, { useState } from 'react';
import MyPageTabs from '../../../components/myPageTab/MyPageTab';

// 작성된 댓글 설정
function Index() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <MyPageTabs index={2} />
      <div>asdkfj</div>
    </>
  );
}

export default Index;
