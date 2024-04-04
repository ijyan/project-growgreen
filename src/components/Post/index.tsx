import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as S from './index.Style';
import { IPost } from '../../types';
import useCommentStore from '../../stores/comments.store';

function Index({
  id,
  nickName,
  avatar,
  title,
  content,
  sub_category,
  create_at,
  view_count,
  vote_count,
  comment_count,
}: IPost) {
  // 시간 구하는 함수
  const calcDate = (date: Date) => {
    const milliSeconds = new Date().getTime() - Number(date);
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

  const { fetchComments, comments } = useCommentStore();

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <S.Wrapper>
      <Link to={`/posts/${id}`}>
        <S.Title>{title}</S.Title>
        <S.Desc>{content}</S.Desc>
        <S.Util>
          <S.Info>
            <S.Category>{sub_category}</S.Category>
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
              공감 <strong>{vote_count}</strong>
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
              댓글{' '}
              <strong>
                {/* {comment_count} */}
                {comments.filter(item => item.postId === id).length}
              </strong>
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
              조회 <strong>{view_count}</strong>
            </span>
          </S.Info>
          <S.Writer>
            {avatar === '' ? (
              <svg
                width="20"
                height="20"
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
              <img src={avatar} alt="사용자 프로필" />
            )}
            {nickName} · {calcDate(new Date(create_at))} 작성
          </S.Writer>
        </S.Util>
      </Link>
    </S.Wrapper>
  );
}

export default Index;
