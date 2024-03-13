import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import MyPageTabs from '../../../components/MyPageTab';
import * as S from './index.Style';
import useUserStore from '../../../stores/user.store';
import usePostStore from '../../../stores/posts.store';
import Pagination from '../../../components/Pagination';
import { IPost } from '../../../types';

//! 작성된 게시물 페이지
function Index() {
  const { user } = useUserStore();
  const { posts, fetchPosts } = usePostStore();

  // 페이징
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage =
    searchParams.get('page') === null ? '1' : searchParams.get('page');
  const [currentPost, setCurrentPost] = useState<IPost[]>([]);
  const [activePage, setActivePage] = useState(Number(initialPage));
  const navigate = useNavigate();
  const itemsPerPage = 10;
  const indexOfLastPost: number = activePage * itemsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - itemsPerPage;

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    // 페이징: 현재 페이지에 나타낼 데이터
    setCurrentPost(
      posts
        .filter(item => item.userId === user?.userId)
        .slice(indexOfFirstPost, indexOfLastPost),
    );
  }, [posts, indexOfLastPost, indexOfFirstPost, user]);

  const handlePageChange = (pageNumber: number) => {
    // 페이징: active 페이지
    setActivePage(pageNumber);
    navigate(`/my-page/posts?page=${pageNumber}`);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Grow Green - 내가 쓴 게시물</title>
        </Helmet>
      </HelmetProvider>
      <S.Container>
        <S.ContainerInner>
          <MyPageTabs index={1} />
          <S.Content>
            <S.Posts>
              {user &&
                currentPost
                  // .filter(el => el.userId === user.userId)
                  .map(item => (
                    <S.PostWrapper key={item.id}>
                      <Link to={`/posts/${item.id}`}>
                        <S.Category>{item.sub_category}</S.Category>
                        <S.Title>{item.title}</S.Title>
                        <S.Desc>{item.content}</S.Desc>
                        <S.Util>
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M27.6002 18.5998V11.3998C27.6002 8.41743 25.1826 5.99977 22.2002 5.99977L15.0002 22.1998V41.9998H35.9162C37.7113 42.0201 39.2471 40.7147 39.5162 38.9398L42.0002 22.7398C42.1587 21.6955 41.8506 20.6343 41.1576 19.8373C40.4645 19.0403 39.4564 18.5878 38.4002 18.5998H27.6002Z"
                                stroke="#5c667b"
                                strokeWidth="3"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15 22.0001H10.194C8.08532 21.9628 6.2827 23.7095 6 25.7994V38.3994C6.2827 40.4894 8.08532 42.0367 10.194 41.9994H15V22.0001Z"
                                fill="none"
                                stroke="#5c667b"
                                strokeWidth="3"
                                strokeLinejoin="round"
                              />
                            </svg>
                            공감 <strong>{item.vote_count}</strong>
                          </span>
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M44 6H4V36H13V41L23 36H44V6Z"
                                fill="none"
                                stroke="#5c667b"
                                strokeWidth="3"
                                strokeLinecap="butt"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14 19.5V22.5"
                                stroke="#5c667b"
                                strokeWidth="3"
                                strokeLinecap="butt"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M24 19.5V22.5"
                                stroke="#5c667b"
                                strokeWidth="3"
                                strokeLinecap="butt"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M34 19.5V22.5"
                                stroke="#5c667b"
                                strokeWidth="3"
                                strokeLinecap="butt"
                                strokeLinejoin="round"
                              />
                            </svg>
                            댓글 <strong>{item.comment_count}</strong>
                          </span>
                        </S.Util>
                      </Link>
                    </S.PostWrapper>
                  ))}
            </S.Posts>
            <Pagination
              activePage={activePage}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={posts.length}
              pageRangeDisplayed={10}
              prevPageText="이전"
              nextPageText="다음"
              onChange={handlePageChange}
            />
          </S.Content>
        </S.ContainerInner>
      </S.Container>
    </>
  );
}

export default Index;
