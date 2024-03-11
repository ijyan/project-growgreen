import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useCommentStore from '../../stores/comments.store';
import { IPost } from '../../types';
import userStore from '../../stores/user.store';

function Index() {
  const { user } = userStore();
  const [newComment, setNewComment] = useState<string>('');
  const [formData, setFormData] = useState({
    userId: user?.userId,
    nickName: user?.nickName,
    avatar: user?.avatar,
    content: '',
  });

  // 댓글 상태, 댓글 추가 메서드
  const { comments, setComment, fetchComments } = useCommentStore();

  useEffect(() => {
    fetchComments(); // 컴포넌트 마운트 시 댓글 가져옴
  }, [fetchComments]);

  // 댓글 작성
  const postComment = async () => {
    try {
      const response = await axios.post<IPost>(
        'http://localhost:5000/comments',
        {
          ...formData,
        },
      );
      setComment(response.data); // 새댓글 추가
      setNewComment('');
      setFormData({
        ...formData,
        content: '',
      }); // 댓 작성 후 폼 데이터 초기화
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div>
      <Link to="/comments">
        <h2>댓글</h2>
        <div>
          <textarea
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
          />
          <Button onClick={postComment}>댓글 작성</Button>
        </div>
        <div>
          {comments.map(comment => (
            <div key={comment.id}>
              <div>{comment.nickName}</div>
              <div>{comment.content}</div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}

export default Index;
