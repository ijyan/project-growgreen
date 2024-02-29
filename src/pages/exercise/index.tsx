import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SubTitle from '../../components/SubTitle';
import CardList from '../../components/CardList';

function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('/data/article.json');
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLPPetu1spkebTXnDVnGtT0tYZV-6ocW4z&key=${process.env.REACT_APP_API_KEY}`,
        );

        setData(response.data.items);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생', error);
      }
    };
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
      {/* <Tab links={EXERCISE_LIST} index={0} /> */}
      <CardList data={data} />
    </>
  );
}

export default Index;
