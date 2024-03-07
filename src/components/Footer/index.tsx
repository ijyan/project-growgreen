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
        <S.CopyRight>Copyrightⓒ GrowGreen, All rights reserved.</S.CopyRight>
      </S.Inner>
    </S.Footer>
  );
}

export default Index;
