import React, { MutableRefObject } from 'react';
import { CardType } from '../../types';
import Card from '../Card';
import * as S from './index.Style';

interface IProp {
  data: CardType[];
}

function Index({ data }: IProp) {
  return (
    <>
      {data
        .filter(el => el.snippet.title !== 'Private video')
        .map(item => (
          <Card
            key={item.id}
            id={item.id}
            url={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}&ab_channel=ThankyouBUBU`}
            snippet={item.snippet}
            // category={item.category}
            // title={item.snippet.title}
            // thumbnail={item.thumbnail}
          />
        ))}
    </>
  );
}

export default Index;
