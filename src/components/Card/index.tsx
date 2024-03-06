import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './index.Style';
import { CardType } from '../../types';

function Index({ url, snippet }: CardType) {
  // console.log(snippet.thumbnails.high.url);
  return (
    <S.Card>
      <Link to={url} target="_blank">
        <S.ImgWrap>
          <img src={snippet.thumbnails.high.url} alt="thumb-img" />
        </S.ImgWrap>
        <S.TextWrap>
          <S.Title>{snippet.title}</S.Title>
          <S.Description>{snippet.description}</S.Description>
        </S.TextWrap>
      </Link>
    </S.Card>
  );
}

export default Index;
