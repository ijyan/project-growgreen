import React from 'react';
import * as S from './index.Style';
import Spinner from '../../assets/images/loading.gif';

function Index() {
  return (
    <S.Background>
      <img src={Spinner} alt="로딩중" />
      <S.Text>
        <h3>잠시만 기다려 주세요.</h3>
        <p>해당 페이지로 이동 중입니다.</p>
      </S.Text>
    </S.Background>
  );
}

export default Index;
