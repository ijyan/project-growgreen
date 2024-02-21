import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';
import SubTitle from '../../components/SubTitle/SubTitle';
import Tab from '../../components/Tab/Tab';
import { COMMUNITY_LIST } from '../../constants/CommunityMenu';
import { PostType } from '../../types';
import PostList from '../../components/PostList/PostList';
import * as S from './Index.Styled';

function Index() {
  const [data, setData] = useState<PostType[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/posts');
      setData(response.data);
    } catch (error) {
      console.error('데이터를 가져오는 중 오류 발생', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <SubTitle>커뮤니티</SubTitle>
      <Tab links={COMMUNITY_LIST} index={0} />
      <S.Content>
        <PostList data={data} />
      </S.Content>
    </>
  );
}

export default Index;
