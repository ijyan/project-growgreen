import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SubTitle from '../../components/SubTitle/SubTitle';
import Tab from '../../components/Tab/Tab';
import { CardType } from '../../types';
import CardList from '../../components/CardList/CardList';

export const exerciseLinks = [
  {
    id: 0,
    name: '전체',
    path: '/exercise',
  },
  {
    id: 1,
    name: '홈트레이닝',
    path: '/exercise/home-training',
  },
  {
    id: 2,
    name: '스트레칭',
    path: '/exercise/stretch',
  },
];

function Index() {
  const [data, setData] = useState<CardType[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/data/article.json');
      setData(response.data);
    } catch (error) {
      console.error('데이더를 가져오는 중 오류 발생', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Grow Green - 운동</title>
        </Helmet>
      </HelmetProvider>
      <SubTitle>운동</SubTitle>
      <Tab links={exerciseLinks} index={0} />
      <CardList data={data} />
    </>
  );
}

export default Index;
