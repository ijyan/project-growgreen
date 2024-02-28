import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as S from './index.Style';
import { IPost } from '../../types';

function Index() {
  const { postId } = useParams();
  const [post, setPost] = useState<IPost | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get<IPost>(
          `http://localhost:5000/posts/${postId}`,
        );
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post', error);
      }
    };

    fetchPost();
  }, [postId]);

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

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{post.title}</title>
        </Helmet>
      </HelmetProvider>
      <S.Container>
        <S.Inner>
          <S.Title>{post.title}</S.Title>
          <S.Info>
            <S.Profile>
              <img src={post.avatar} alt="유저 아바타" />
              <div>
                <span>{post.nickName}</span>
                <span>{post.create_at} 작성</span>
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
