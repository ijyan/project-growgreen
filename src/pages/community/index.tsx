import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubTitle from '../../components/SubTitle';
import Tab from '../../components/Tab';
import { COMMUNITY_LIST } from '../../constants/CommunityMenu';
import PostList from '../../components/PostList';
import * as S from './index.Styled';
import Input from '../../components/Input';
import usePostStore from '../../stores/posts.store';

function Index() {
  const {
    posts,
    fetchPosts,
    active,
    sortByDate,
    sortByThumbsUp,
    sortByViews,
    sortByComments,
  } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      <SubTitle>커뮤니티</SubTitle>
      <Tab links={COMMUNITY_LIST} index={0} />
      <S.Content>
        <S.SearchForm>
          <S.ListNum>
            전체 <strong>{posts.length}</strong>건
          </S.ListNum>
          <S.InputBox>
            <Input
              label="검색"
              type="text"
              name="search"
              placeholder="검색어를 입력해주세요."
            />
            <S.SearchButton type="button">
              <svg
                width="20"
                height="20"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
                  fill="none"
                  stroke="#5c667b"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <path
                  d="M33.2216 33.2217L41.7069 41.707"
                  stroke="#5c667b"
                  strokeWidth="3"
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                />
              </svg>
              <span>검색</span>
            </S.SearchButton>
          </S.InputBox>
        </S.SearchForm>
        <S.SortForm>
          <S.SortBox>
            <button
              type="button"
              onClick={sortByDate}
              className={active === 'date' ? 'active' : ''}
            >
              <svg
                width="6"
                height="6"
                strokeWidth="0"
                viewBox="0 0 24 24"
                fill="current"
                xmlns="http://www.w3.org/2000/svg"
                type="solid"
              >
                <circle cx="12" cy="12" r="10" fill="inherit" />
              </svg>
              최신순
            </button>
            <button
              type="button"
              onClick={sortByThumbsUp}
              className={active === 'thumbsUp' ? 'active' : ''}
            >
              <svg
                width="6"
                height="6"
                strokeWidth="0"
                viewBox="0 0 24 24"
                fill="current"
                xmlns="http://www.w3.org/2000/svg"
                type="solid"
              >
                <circle cx="12" cy="12" r="10" fill="inherit" />
              </svg>
              공감순
            </button>
            <button
              type="button"
              onClick={sortByViews}
              className={active === 'views' ? 'active' : ''}
            >
              <svg
                width="6"
                height="6"
                strokeWidth="0"
                viewBox="0 0 24 24"
                fill="current"
                xmlns="http://www.w3.org/2000/svg"
                type="solid"
              >
                <circle cx="12" cy="12" r="10" fill="inherit" />
              </svg>
              조회순
            </button>
            <button
              type="button"
              onClick={sortByComments}
              className={active === 'comments' ? 'active' : ''}
            >
              <svg
                width="6"
                height="6"
                strokeWidth="0"
                viewBox="0 0 24 24"
                fill="current"
                xmlns="http://www.w3.org/2000/svg"
                type="solid"
              >
                <circle cx="12" cy="12" r="10" fill="inherit" />
              </svg>
              댓글순
            </button>
          </S.SortBox>
          <S.WriteButton type="button">게시글 작성하기</S.WriteButton>
        </S.SortForm>
        <S.List>
          <PostList data={posts} />
        </S.List>
      </S.Content>
    </>
  );
}

export default Index;
