import React from 'react';
import * as S from './SubTitle.Style';

function SubTitle({ children }: { children: React.ReactNode }) {
  return <S.Title>{children}</S.Title>;
}

export default SubTitle;
