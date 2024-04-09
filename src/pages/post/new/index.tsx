import React, { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import * as S from './index.Styled';
import Input from '../../../components/Input';
import userStore from '../../../stores/user.store';
import { IPost } from '../../../types';
import Select from '../../../components/Select';
import TextField from '../../../components/TextArea';

function Index() {
  const { user } = userStore();
  const [formData, setFormData] = useState({
    userId: user?.userId,
    nickName: user?.nickName,
    avatar: user?.avatar,
    title: '',
    content: '',
    category: '커뮤니티',
    sub_category: '',
    create_at: new Date().getTime(),
    update_at: new Date().getTime(),
    view_count: 0,
    vote_count: 0,
    comment_count: 0,
  });
  const navigate = useNavigate();

  // select 옵션
  const option = [
    { id: 0, value: '', name: '카테고리를 선택해주세요.' },
    { id: 1, value: '질문&고민', name: '질문&고민' },
    { id: 2, value: '자유게시판', name: '자유게시판' },
  ];

  const [errors, setErrors] = useState<
    Partial<Pick<IPost, 'title' | 'sub_category' | 'content'>>
  >({
    sub_category: '',
    title: '',
    content: '',
  });

  const selectChange = (event: SelectChangeEvent<unknown>) => {
    setFormData({
      ...formData,
      sub_category: event.target.value as string,
    });
  };

  const handleChange =
    <T extends keyof IPost>(name: T) =>
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
      sub_category: '',
      title: '',
      content: '',
    };

    if (!formData.sub_category) {
      newErrors.sub_category = '카테고리를 선택해주세요.';
    }

    if (!formData.title) {
      newErrors.title = '제목을 최소 5자 이상 입력해주세요.';
    }

    if (!formData.content) {
      newErrors.content = '내용을 최소 5자 이상 입력해주세요.';
    }

    // 에러
    if (Object.values(newErrors).some(error => !!error)) {
      setErrors(newErrors);
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, {
        ...formData,
      });
    } catch (error) {
      console.error('posts failed: ', error);
    }

    navigate(-1);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Grow Green - 게시글 작성</title>
        </Helmet>
      </HelmetProvider>
      <S.Content>
        <S.ContentInner>
          <S.SelectBox>
            <Select
              id="category"
              label="카테고리"
              value={formData.sub_category}
              defaultValue=""
              onChange={selectChange}
              error={!!errors.sub_category}
              option={option}
              displayEmpty
              helperText={errors.sub_category}
            />
          </S.SelectBox>
          <Input
            label="제목"
            type="text"
            name="title"
            placeholder="제목을 입력해주세요."
            error={!!errors.title}
            onChange={handleChange('title')}
            helperText={errors.title}
          />
          <S.TextFieldBox>
            <TextField
              label="본문"
              multiline
              rows={12}
              placeholder="내용을 입력해주세요."
              error={!!errors.content}
              helperText={errors.content}
              onChange={handleChange('content')}
            />
          </S.TextFieldBox>
          <S.Button type="submit" onClick={handleSave}>
            게시글 등록
          </S.Button>
        </S.ContentInner>
      </S.Content>
    </>
  );
}

export default Index;
