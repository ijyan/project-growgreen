import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MyPageTabs from '../../../components/myPageTab/MyPageTab';

// 작성된 댓글 설정
function Index() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

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
