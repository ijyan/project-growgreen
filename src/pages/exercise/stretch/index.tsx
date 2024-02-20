import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubTitle from '../../../components/SubTitle/SubTitle';
import Tab from '../../../components/Tab/Tab';
import { exerciseLinks } from '../index';
import { CardType } from '../../../types';
import CardList from '../../../components/CardList/CardList';

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
      <SubTitle>스트레칭</SubTitle>
      <Tab links={exerciseLinks} index={2} />
      <CardList data={data} />
    </>
  );
}
