import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as S from './index.Style';
import { IPost } from '../../../types';
import usePostStore from '../../../stores/posts.store';
import useUserStore from '../../../stores/user.store';
import Loading from '../../Loading';
import Comment from '../../Comment';
import useCommentStore from '../../../stores/comments.store';

function Index() {
  const { postId } = useParams();
  const [post, setPost] = useState<IPost | undefined>(undefined);
  const { posts, setPosts, fetchPosts } = usePostStore();
  const { user } = useUserStore();
  const { comments, fetchComments } = useCommentStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IPost>(
          `${process.env.REACT_APP_SERVER_URL}/posts/${postId}`,
        );
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post', error);
      }
    };
    fetchPosts();
    fetchComments();
    fetchData();
  }, [fetchComments, postId, fetchPosts]);

  if (!post) {
    return <Loading />;
  }

  const handleClick = async () => {
    try {
      const updateCount = {
        ...post,
        vote_count: post.vote_count + 1,
      };
      await axios.patch(
        `${process.env.REACT_APP_SERVER_URL}/posts/${postId}`,
        updateCount,
      );
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
    navigate(`/posts/${postId}/edit`);
  };

  const handleDeletePost = async (id: string) => {
    const userConfirmed = window.confirm(
      '입력하신 글을 정말 삭제하시겠어요? 삭제하신 글은 복구하실 수 없습니다.',
    );

    if (!userConfirmed) return;

    try {
      await axios
        .delete(
          `${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_SERVER_URL}/posts/${postId}`,
        )
        .then(() => {
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
              {post.avatar === '' ? (
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 16C0 21.4994 2.77441 26.3506 7 29.2306V24.5385C7 20.9292 9.88 18 13.4286 18H18.5714C22.12 18 25 20.9292 25 24.5385V29.2306C29.2256 26.3506 32 21.4994 32 16C32 7.16345 24.8365 0 16 0C7.16345 0 0 7.16345 0 16ZM16 32C18.2866 32 20.4612 31.5204 22.4286 30.6561V24.5385C22.4286 22.3807 20.6929 20.6154 18.5714 20.6154H13.4286C11.3071 20.6154 9.57141 22.3807 9.57141 24.5385V30.6561C11.5388 31.5204 13.7134 32 16 32ZM18.5 11C18.5 9.625 17.375 8.5 16 8.5C14.625 8.5 13.5 9.625 13.5 11C13.5 12.375 14.625 13.5 16 13.5C17.375 13.5 18.5 12.375 18.5 11ZM11 11C11 8.23755 13.2375 6 16 6C18.7625 6 21 8.23755 21 11C21 13.7625 18.7625 16 16 16C13.2375 16 11 13.7625 11 11Z"
                    fill="#C5CAD0"
                  />
                </svg>
              ) : (
                <img src={post.avatar} alt="사용자 프로필" />
              )}
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
                {/* {post.comment_count} */}
                {comments.filter(item => item.postId === postId).length}
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
        <Comment />
      </S.Container>
    </>
  );
}

export default Index;
