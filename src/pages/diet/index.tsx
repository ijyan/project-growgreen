import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubTitle from '../../components/SubTitle/SubTitle';
import CardList from '../../components/CardList/CardList';
import { CardType } from '../../types';

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
      <SubTitle>식단</SubTitle>
      <CardList data={data} />
    </>
  );
}

export default Index;
