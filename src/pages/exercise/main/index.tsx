import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SubTitle from '../../../components/SubTitle';
import Tab from '../../../components/Tab';
import { EXERCISE_LIST } from '../../../constants/ExerciseMenu';
import CardList from '../../../components/CardList';
import { CardType } from '../../../types';

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
      <Tab links={EXERCISE_LIST} index={0} />
      <CardList data={data} />
    </>
  );
}

export default Index;
