import React, { useEffect, useRef, useState } from 'react';
import { Avatar } from '@mui/material';
import axios from 'axios';
import isEqual from 'lodash/isEqual';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MyPageTabs from '../../../components/MyPageTab';
import { User, FormData } from '../../../types';
import useStore from '../../../stores/user.store';
import * as S from './index.Style';
import Input from '../../../components/Input';
import photo from '../../../assets/images/photo.png';

// 프로필 설정
function Index() {
  const { user, updateUser } = useStore();

  const initialPhoto = user?.avatar || photo;
  const [profileImage, setProfileImage] = useState(initialPhoto);
  const fileInput = useRef<HTMLInputElement | null>(null);

  const initialForm = user
    ? {
        id: user.id,
        userId: user.userId,
        name: user.name,
        nickName: user.nickName,
        password: user.password,
        email: user.email,
        avatar: user.avatar,
      }
    : {
        id: 0,
        userId: '',
        password: '',
        name: '',
        nickName: '',
        email: '',
        avatar: '',
      };

  const [formData, setFormData] = useState<User>(initialForm);
  const [isFormDataChanged, setIsFormDataChanged] = useState(true);

  const previousFormDataRef = useRef<User>(formData);

  const [errors, setErrors] = useState<FormData>({
    name: '',
    nickName: '',
    password: '',
    email: '',
  });

  const handleInputChange =
    (name: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: event.target.value,
      }));

      setErrors(prevError => ({
        ...prevError,
        [name]: '',
      }));
    };

  useEffect(() => {
    // 데이터 가져와서 previousFormDataRef에 초기화
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/users/${user?.id}`,
        );
        previousFormDataRef.current = { ...response.data };
      } catch (error) {
        console.error('Update failed: ', error);
      }
    };
    fetchUser();
  }, [user?.id]);

  useEffect(() => {
    // 입력 값이 이전 값과 다를 때만 상태를 업데이트
    const isChanged = isEqual(formData, previousFormDataRef.current);
    setIsFormDataChanged(isChanged);
  }, [formData]);

  // 저장
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    const passwordRegExp =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    const emailRegExp = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;

    const newErrors = {
      password: '',
      name: '',
      nickName: '',
      email: '',
    };

    if (!formData.password) {
      newErrors.password = '비밀번호를 입력하세요.';
    } else if (!passwordRegExp.test(formData.password)) {
      newErrors.password =
        '8~16자리 영문 대소문자, 숫자, 특수문자 중 3가지 이상 조합으로 만들어주세요.';
    }

    if (!formData.name) {
      newErrors.name = '이름을 입력하세요.';
    }

    if (!formData.nickName) {
      newErrors.nickName = '닉네임을 입력하세요.';
    }

    if (!formData.email) {
      newErrors.email = '이메일을 입력하세요.';
    } else if (!emailRegExp.test(formData.email)) {
      newErrors.email =
        '잘못된 이메일 주소입니다. 이메일 주소를 정확하게 입력해주세요.';
    }

    // 에러
    if (Object.values(newErrors).some(error => !!error)) {
      setErrors(newErrors);
      setIsFormDataChanged(true);
      return;
    }

    if (
      !profileImage ||
      !user ||
      (formData.name === user.name &&
        formData.email === user.email &&
        formData.password === user.password &&
        formData.nickName === user.nickName &&
        profileImage === user.avatar)
    ) {
      setIsFormDataChanged(true);
      return;
    }

    const updates: Partial<
      Pick<User, 'name' | 'email' | 'password' | 'nickName' | 'avatar'>
    > = {
      name: formData.name !== user.name ? formData.name : user.name,
      email: formData.email !== user.email ? formData.email : user.email,
      password:
        formData.password !== user.email ? formData.password : user.password,
      nickName:
        formData.nickName !== user.email ? formData.nickName : user.nickName,
      avatar: profileImage !== user.avatar ? profileImage : user.avatar,
    };

    try {
      // Zustand store update
      updateUser(user.id, { ...user, ...updates });

      // 서버에 업데이트 요청

      const updateNewUser = { ...user, ...updates };

      const response = await axios.put(
        `http://localhost:5000/users/${user.id}`,
        updateNewUser,
      );
      console.log('회원정보 수정 성공: ', response.data);
    } catch (error) {
      console.error('Update failed: ', error);
    }

    previousFormDataRef.current = {
      ...formData,
    };
    // 저장 후 버튼 비활성화
    setIsFormDataChanged(true);
  };

  // 프로필사진 업데이트 로직
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfileImage(reader.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setProfileImage(photo);
    }
    setIsFormDataChanged(false);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Grow Green - 프로필</title>
        </Helmet>
      </HelmetProvider>
      <S.Container>
        <S.ContainerInner>
          <MyPageTabs index={0} />
          <S.Content>
            <S.Form>
              <S.InputWrapper>
                <S.Title>회원정보</S.Title>
                <Input
                  label="이름"
                  type="name"
                  name="name"
                  placeholder="이름 입력"
                  value={formData.name}
                  error={!!errors.name}
                  helperText={errors.name}
                  onChange={handleInputChange('name')}
                />
                <Input
                  label="닉네임"
                  type="nickName"
                  name="nickName"
                  placeholder="닉네임 입력"
                  value={formData.nickName}
                  error={!!errors.nickName}
                  helperText={errors.nickName}
                  onChange={handleInputChange('nickName')}
                />
                <Input
                  label="비밀번호"
                  type="password"
                  name="userPassword"
                  placeholder="8~12자리 / 영문 대소문자, 숫자, 특수문자 조합"
                  value={formData.password}
                  error={!!errors.password}
                  helperText={errors.password}
                  onChange={handleInputChange('password')}
                />
                <Input
                  label="이메일"
                  type="email"
                  name="userEmail"
                  placeholder="email@example.com"
                  value={formData.email}
                  error={!!errors.email}
                  helperText={errors.email}
                  onChange={handleInputChange('email')}
                />
              </S.InputWrapper>

              <S.AvatarWrapper>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="profile-image-input">
                  <span>변경</span>
                  <input
                    id="profile-image-input"
                    type="file"
                    style={{
                      display: 'none',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    accept="image/jpg,image/png,image/jpeg"
                    name="profileImage"
                    onChange={onChange}
                    ref={fileInput}
                  />
                  <Avatar
                    src={profileImage}
                    alt="avatar"
                    sx={{
                      width: 160,
                      height: 160,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: '1px solid #eaedf4',
                    }}
                  />
                </label>
              </S.AvatarWrapper>
            </S.Form>
            <S.SubmitButton
              type="submit"
              onClick={handleSave}
              disabled={isFormDataChanged}
            >
              저장
            </S.SubmitButton>
          </S.Content>
        </S.ContainerInner>
      </S.Container>
    </>
  );
}

export default Index;
