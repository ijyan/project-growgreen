import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SubTitle from '../../../components/SubTitle/SubTitle';
import Tab from '../../../components/Tab/Tab';
import CardList from '../../../components/CardList/CardList';
import { CardType } from '../../../types';
import { EXERCISE_LIST } from '../../../constants/ExerciseMenu';

export default function Index() {
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
          <title>Grow Green - 홈트레이닝</title>
        </Helmet>
      </HelmetProvider>
      <SubTitle>홈트레이닝</SubTitle>
      <Tab links={EXERCISE_LIST} index={1} />
      <CardList data={data} />
    </>
  );
}
