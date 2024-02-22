import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import useStore from '../../../stores/user.store';
import * as S from './Index.Style';
import Input from '../../../components/Input';
import AuthResult from '../../../components/AuthResult';

interface LoginResponse {
  token: string;
}

interface FormData {
  userId: string;
  password: string;
}

function Index() {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
  });

  const [errors, setErrors] = useState<Record<keyof FormData, string>>({
    userId: '',
    password: '',
  });

  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [cookies, setCookie] = useCookies(['userToken', 'userType']);

  const { setUser } = useStore();

  const navigate = useNavigate();

  const handleInputChange =
    (name: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [name]: event.target.value,
      });

      setErrors({
        ...errors,
        [name]: '',
      });
    };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 유효성 검사
    const newErrors = {
      userId: '',
      password: '',
    };

    if (!formData.userId) {
      newErrors.userId = '아이디를 입력해주세요.';
    }

    if (!formData.password) {
      newErrors.password = '비밀번호를 입력하세요.';
    }

    // 에러
    if (Object.values(newErrors).some(error => !!error)) {
      setErrors(newErrors);
      return;
    }

    // 로그인
    try {
      // 사용자 목록을 가져옵니다.
      const usersResponse = await axios.get('http://localhost:5000/users');
      const users = usersResponse.data;

      // 입력된 userId와 password가 일치하는 사용자를 찾습니다.
      const user = users.find(
        (findUser: FormData) =>
          findUser.userId === formData.userId &&
          findUser.password === formData.password,
      );

      if (user) {
        // 임의의 토큰 생성 (실제 환경에서는 안전한 방식으로 생성 필요)
        // const token = `faketoken-${new Date().getTime()}`;
        // const token = user.id;
        // const expiration = new Date(Date.now() + 3600 * 1000);

        // // 쿠키에 토큰과 사용자 유형 저장
        // setCookie('userToken', token, { path: '/', expires: expiration });
        setUser(user);

        // window.localStorage.setItem('token', token);

        navigate('/');
      } else {
        // 일치하는 사용자가 없는 경우
        setIsLogin(false);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Grow Green - 로그인</title>
        </Helmet>
      </HelmetProvider>
      <S.Container onSubmit={handleSubmit}>
        <S.ContainerInner>
          <S.Title>로그인</S.Title>
          <Input
            label="아이디"
            type="id"
            name="userId"
            error={!!errors.userId}
            helperText={errors.userId}
            onChange={handleInputChange('userId')}
          />
          <Input
            label="비밀번호"
            type="password"
            name="userPassword"
            error={!!errors.password}
            helperText={errors.password}
            onChange={handleInputChange('password')}
          />
          <S.Button type="submit">로그인</S.Button>
          <S.SignUp>
            <span>아직 회원이 아니신가요?</span>
            <Link to="/join">회원가입</Link>
          </S.SignUp>
          {isLogin ? (
            ''
          ) : (
            <AuthResult
              title="로그인 실패"
              desc="아이디 또는 비밀번호가 틀렸습니다."
            />
          )}
        </S.ContainerInner>
      </S.Container>
    </>
  );
}

export default Index;
