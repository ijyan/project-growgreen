import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SubTitle from '../../components/SubTitle';
import Tab from '../../components/Tab';
import { COMMUNITY_LIST } from '../../constants/CommunityMenu';
import PostList from '../../components/Post/PostList';
import * as S from './index.Styled';
import Input from '../../components/Input';
import usePostStore from '../../stores/posts.store';
import useUserStore from '../../stores/user.store';
import Pagination from '../../components/Pagination';
import { IPost } from '../../types';

function Index() {
  const {
    originalPosts,
    posts,
    setPosts,
    resetActiveButton,
    fetchPosts,
    active,
    sortByDate,
    sortByThumbsUp,
    sortByViews,
    sortByComments,
    searchTerm,
    setSearchTerm,
  } = usePostStore();

  const navigate = useNavigate();
  const { user } = useUserStore();

  // 페이징
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage =
    searchParams.get('page') === null ? '1' : searchParams.get('page');
  const [currentPost, setCurrentPost] = useState<IPost[]>([]);
  const [activePage, setActivePage] = useState(Number(initialPage));

  const itemsPerPage = 10;
  const indexOfLastPost: number = activePage * itemsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - itemsPerPage;

  useEffect(() => {
    // 데이터 불러오기
    fetchPosts();
    resetActiveButton(); // 정렬 초기화
  }, [fetchPosts, resetActiveButton]);

  useEffect(() => {
    // 페이징: 현재 페이지에 나타낼 데이터
    setCurrentPost(posts.slice(indexOfFirstPost, indexOfLastPost));
  }, [posts, indexOfLastPost, indexOfFirstPost]);

  const handlePageChange = (pageNumber: number) => {
    // 페이징: active 페이지
    setActivePage(pageNumber);
    navigate(`/community?page=${pageNumber}`);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setPosts(originalPosts);
    } else {
      const filteredPosts = originalPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setPosts(filteredPosts);
    }
  };

  const handleOnKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Grow Green - 커뮤니티</title>
        </Helmet>
      </HelmetProvider>
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
              onChange={e => setSearchTerm(e.target.value)}
              onKeyPress={handleOnKeyPress}
            />
            <S.SearchButton type="button" onClick={handleSearch}>
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
          <S.WriteButton
            type="button"
            onClick={
              user ? () => navigate('/posts/new') : () => navigate('/login')
            }
          >
            게시글 작성하기
          </S.WriteButton>
        </S.SortForm>
        <S.List>
          {posts.length === 0 ? (
            <S.NotFound>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"
                  fill="none"
                  stroke="#5c667b"
                  strokeWidth="3"
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 4L40 14"
                  stroke="#5c667b"
                  strokeWidth="3"
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 22L30 34"
                  stroke="#5c667b"
                  strokeWidth="3"
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 22L18 34"
                  stroke="#5c667b"
                  strokeWidth="3"
                  strokeLinecap="butt"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                검색결과가 없어요.
                <span>다른 키워드로 검색해보세요!</span>
              </div>
            </S.NotFound>
          ) : (
            <>
              <PostList data={currentPost} />
              <Pagination
                activePage={activePage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={posts.length}
                pageRangeDisplayed={10}
                prevPageText="이전"
                nextPageText="다음"
                onChange={handlePageChange}
              />
            </>
          )}
        </S.List>
      </S.Content>
    </>
  );
}

export default Index;
