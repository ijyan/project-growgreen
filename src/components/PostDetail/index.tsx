import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { findAllByRole } from '@testing-library/react';
import * as S from './index.Style';
import { IPost } from '../../types';
import usePostStore from '../../stores/posts.store';
import useStore from '../../stores/user.store';

function Index() {
  const { postId } = useParams();
  const [post, setPost] = useState<IPost | undefined>(undefined);
  const { posts, setPosts, fetchPosts } = usePostStore();
  const { user } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IPost>(
          `http://localhost:5000/posts/${postId}`,
        );
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post', error);
      }
    };
    fetchPosts();
    fetchData();
  }, [postId, fetchPosts]);

  if (!post) {
    return <div>Loading</div>;
  }

  const handleClick = async () => {
    try {
      const updateCount = {
        ...post,
        vote_count: post.vote_count + 1,
      };
      await axios.patch(`http://localhost:5000/posts/${postId}`, updateCount);
      setPost(updateCount);
    } catch (error) {
      console.log('Update Count Error: ', error);
    }
  };

  const calcDate = (date: number) => {
    const milliSeconds = new Date().getTime() - date;
    const seconds = milliSeconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const weeks = days / 7;
    const months = days / 30;
    const years = days / 365;

    if (seconds < 60) return `방금 전`;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    if (days < 7) return `${Math.floor(days)}일 전`;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    if (years < 3) return `${Math.floor(years)}년 전`;

    return `${new Date(date).toLocaleDateString()}`;
  };

  const handleUpdate = () => {
    console.log(posts.find(item => item.id === postId));
    // console.log(posts.find(item => item.id === Number(postId)));
  };

  const handleDeletePost = async (id: string) => {
    const userConfirmed = window.confirm(
      '입력하신 글을 정말 삭제하시겠어요? 삭제하신 글은 복구하실 수 없습니다.',
    );

    if (!userConfirmed) return;

    try {
      await axios.delete(`http://localhost:5000/posts/${postId}`).then(() => {
        alert('삭제되었습니다.');
      });
      const updatedPosts = posts.filter(item => item.id !== id);
      setPosts(updatedPosts);
      navigate(-1);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{post.title}</title>
        </Helmet>
      </HelmetProvider>
      <S.Container>
        <S.Inner>
          <S.Top>
            <h3>{post.title}</h3>
            <S.PostBtn>
              {user && user.userId === post.userId ? (
                <>
                  <button type="button" onClick={() => handleUpdate()}>
                    수정
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeletePost(post.id)}
                  >
                    삭제
                  </button>
                </>
              ) : (
                ''
              )}
            </S.PostBtn>
          </S.Top>
          <S.Info>
            <S.Profile>
              <img src={post.avatar} alt="유저 아바타" />
              <div>
                <span>{post.nickName}</span>
                <span>{calcDate(post.create_at)} 작성</span>
              </div>
            </S.Profile>
            <S.Util>
              <span>
                <svg
                  width="18"
                  height="18"
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
                {post.vote_count}
              </span>
              <span>
                <svg
                  width="18"
                  height="18"
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
                {post.comment_count}
              </span>
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 41C33.9411 41 42 32.678 42 27C42 21.322 33.9411 13 24 13C14.0589 13 6 21.3278 6 27C6 32.6722 14.0589 41 24 41Z"
                    fill="none"
                    stroke="#5c667b"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 33C27.3137 33 30 30.3137 30 27C30 23.6863 27.3137 21 24 21C20.6863 21 18 23.6863 18 27C18 30.3137 20.6863 33 24 33Z"
                    fill="none"
                    stroke="#5c667b"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                </svg>
                {post.view_count}
              </span>
            </S.Util>
          </S.Info>
          <S.Content>{post.content}</S.Content>
          <S.VoteCount>
            <button type="button" onClick={handleClick}>
              <svg
                width="18"
                height="18"
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
              {post.vote_count}
            </button>
          </S.VoteCount>
        </S.Inner>
      </S.Container>
    </>
  );
}

export default Index;
