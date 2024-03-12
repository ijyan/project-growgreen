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
                  <img src={comment.avatar} alt="유저 아바타" />
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
