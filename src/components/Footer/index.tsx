import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './index.Style';
import { ReactComponent as Logo } from '../../assets/logo.svg';

function Index() {
  return (
    <S.Footer>
      <S.Inner>
        <S.Logo>
          <Link to="/">
            <Logo />
          </Link>
        </S.Logo>
        <div>
          <S.Menu>
            <Link to="/">개인정보처리방침</Link>
            <Link to="/">이용약관</Link>
          </S.Menu>
          <S.CopyRight>Copyrightⓒ GrowGreen, All rights reserved.</S.CopyRight>
        </div>
      </S.Inner>
    </S.Footer>
  );
}

export default Index;
