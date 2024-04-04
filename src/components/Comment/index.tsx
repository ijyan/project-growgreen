import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useCommentStore from '../../stores/comments.store';
import { IComment } from '../../types';
import userStore from '../../stores/user.store';
import * as S from './Index.Style';
import TextArea from '../TextArea';

function Index() {
  const { user } = userStore();
  const { postId } = useParams();
  // const [newComment, setNewComment] = useState<string>('');
  const [formData, setFormData] = useState({
    postId,
    userId: user?.userId,
    nickName: user?.nickName,
    avatar: user?.avatar,
    content: '',
  });

  // 댓글 상태, 댓글 추가 메서드
  const { comments, fetchComments } = useCommentStore();

  const [errors, setErrors] = useState<Partial<Pick<IComment, 'content'>>>({
    content: '',
  });

  useEffect(() => {
    fetchComments(); // 컴포넌트 마운트 시 댓글 가져옴
  }, [fetchComments]);

  // 댓글 작성
  const handleChange =
    <T extends keyof IComment>(name: T) =>
    (event: React.ChangeEvent<{ value: string }>) => {
      setFormData({
        ...formData,
        [name]: event.target.value,
      });

      setErrors({
        ...errors,
        [name]: '',
      });
    };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      alert('로그인을 해주세요.');
      return;
    }

    const newErrors = {
      content: '',
    };

    if (!formData.content) {
      newErrors.content = '내용을 최소 5자 이상 입력해주세요.';
    }

    // 에러
    if (Object.values(newErrors).some(error => !!error)) {
      setErrors(newErrors);
      return;
    }

    const userConfirmed = window.confirm('댓글을 등록하시겠습니까?');

    if (!userConfirmed) return;

    try {
      const response = await axios.post<IComment>(
        'http://localhost:5000/comments',
        {
          ...formData,
        },
      );
      window.location.reload();
    } catch (error) {
      console.error('Error posting comment: ', error);
    }
  };

  const handleDeletePost = async (id: string) => {
    const userConfirmed = window.confirm(
      '입력하신 댓글을 정말 삭제하시겠어요? 삭제하신 댓글은 복구하실 수 없습니다.',
    );

    if (!userConfirmed) return;

    try {
      await axios.delete(`http://localhost:5000/comments/${id}`).then(() => {
        alert('삭제되었습니다.');
      });
      fetchComments();
    } catch (error) {
      console.error('Error deleting comments:', error);
    }
  };

  return (
    <>
      <S.InputWrap>
        <S.InputBox>
          {user && <span>{user.nickName}</span>}
          <S.TextFieldBox>
            <TextArea
              label="본문"
              multiline
              rows={4}
              placeholder="내용을 입력해주세요."
              error={!!errors.content}
              helperText={errors.content}
              onChange={handleChange('content')}
            />
          </S.TextFieldBox>
        </S.InputBox>
        <S.SubmitButtonWrap>
          <button type="button" onClick={handleSave}>
            댓글 작성
          </button>
        </S.SubmitButtonWrap>
      </S.InputWrap>
      <S.CommentWrap>
        {comments
          .filter(item => postId === item.postId)
          .map(comment => (
            <S.CommentList key={comment.id}>
              <span>{comment.content}</span>
              <S.UserInfo>
                <span>{comment.nickName}</span>
                <div>
                  {comment.avatar === '' ? (
                    <svg
                      width="32"
                      height="32"
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
                    <img src={comment.avatar} alt="사용자 프로필" />
                  )}
                </div>
              </S.UserInfo>
              <S.CommentsBtn>
                {user && user.userId === comment.userId ? (
                  <button
                    type="button"
                    onClick={() => handleDeletePost(comment.id)}
                  >
                    삭제
                  </button>
                ) : (
                  ''
                )}
              </S.CommentsBtn>
            </S.CommentList>
          ))}
      </S.CommentWrap>
    </>
  );
}

export default Index;
