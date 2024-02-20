import React from 'react';
import { CardType } from '../../types';
import Card from '../Card/Card';
import * as S from './CardList.Style';

interface IProp {
  data: CardType[];
}

function CardList({ data }: IProp) {
  return (
    <S.Content>
      {data.map(item => (
        <Card
          key={item.id}
          id={item.id}
          url="/exercise"
          category={item.category}
          title={item.title}
          thumbnail={item.thumbnail}
        />
      ))}
    </S.Content>
  );
}

export default CardList;
