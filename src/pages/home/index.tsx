import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// 홈 화면 페이지
export default function Index() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Grow Green</title>
      </Helmet>
    </HelmetProvider>
  );
}
