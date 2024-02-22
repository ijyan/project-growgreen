import React from 'react';
import * as S from './index.Style';

function Index({ children }: { children: React.ReactNode }) {
  return <S.Title>{children}</S.Title>;
}

export default Index;
