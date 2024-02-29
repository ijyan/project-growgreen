import React from 'react';
import { CardType } from '../../types';
import Card from '../Card';
import * as S from './index.Style';

interface IProp {
  data: CardType[];
}

function Index({ data }: IProp) {
  return (
    <S.Content>
      {data
        .filter(el => el.snippet.title !== 'Private video')
        .map(item => (
          <Card
            key={item.id}
            id={item.id}
            url="/exercise"
            snippet={item.snippet}
            // category={item.category}
            // title={item.snippet.title}
            // thumbnail={item.thumbnail}
          />
        ))}
    </S.Content>
  );
}

export default Index;
