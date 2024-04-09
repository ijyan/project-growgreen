import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as S from './index.Style';
import Input from '../../../components/Input';
import { User } from '../../../types';

// ! 회원가입

interface FormData {
  userId: string;
  password: string;
  name: string;
  nickName: string;
  email: string;
  avatar: string;
}

function Index() {
  const idRegExp = /^[a-zA-Z0-9_]{4,15}$/;
  const passwordRegExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  const emailRegExp = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
  const [user, setUser] = useState<User[] | null>(null);
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    name: '',
    nickName: '',
    email: '',
    avatar: '',
  });

  const [errors, setErrors] = useState<Record<keyof FormData, string>>({
    userId: '',
    password: '',
    name: '',
    nickName: '',
    email: '',
    avatar: '',
  });

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>(
          `${process.env.REACT_APP_SERVER_URL}/users`,
        );
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching post', error);
      }
    };
    fetchData();
  }, [setUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      userId: '',
      password: '',
      name: '',
      nickName: '',
      email: '',
      avatar: '',
    };

    if (!formData.userId) {
      newErrors.userId = '아이디를 입력해주세요.';
    } else if (!idRegExp.test(formData.userId)) {
      newErrors.userId = "4~15자의 영문, 숫자와 특수문자 '_'만 사용해주세요.";
    } else if (user?.some(el => el.userId === formData.userId)) {
      newErrors.userId = '중복된 아이디입니다.';
    }

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
    } else if (user?.some(el => el.nickName === formData.nickName)) {
      newErrors.nickName = '중복된 닉네임입니다.';
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
      return;
    }

    try {
      // json-server에서 제공하는 REST API 엔드포인트를 사용합니다.
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users`,
        {
          userId: formData.userId,
          password: formData.password,
          name: formData.name,
          nickName: formData.nickName,
          email: formData.email,
          avatar: formData.avatar,
        },
      );

      // 성공적인 회원가입 후의 로직
      setIsSuccess(true);
    } catch (error) {
      // 오류 처리
      console.error('회원 가입 실패:', error);
      // 여기에 오류 시 처리 로직을 구현할 수 있습니다. 예: 오류 메시지 표시
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Grow Green - 회원가입</title>
        </Helmet>
      </HelmetProvider>
      {isSuccess ? (
        <S.LoginContainer>
          <svg
            width="140"
            height="140"
            viewBox="0 0 140 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M69.9992 101.8C85.905 101.8 98.7992 88.9058 98.7992 73C98.7992 57.0942 85.905 44.2 69.9992 44.2C54.0934 44.2 41.1992 57.0942 41.1992 73C41.1992 88.9058 54.0934 101.8 69.9992 101.8ZM83.3448 68.3455C84.7507 66.9396 84.7507 64.6603 83.3448 63.2544C81.9389 61.8485 79.6595 61.8485 78.2536 63.2544L66.3992 75.1088L61.7448 70.4544C60.3389 69.0485 58.0595 69.0485 56.6536 70.4544C55.2477 71.8603 55.2477 74.1396 56.6536 75.5455L63.8536 82.7455C65.2595 84.1514 67.5389 84.1514 68.9448 82.7455L83.3448 68.3455Z"
              fill="#34D399"
            />
            <g clipPath="url(#clip0_1394_6431)">
              <path
                d="M104.098 107.24C105.928 107.441 109.829 109.53 111.369 111.839C112.908 114.148 113.783 118.144 113.911 119.94"
                stroke="#BAE0DB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30.9789 84.343C28.8623 86.7802 23.3208 91.1544 18.0871 89.1533C11.5449 86.652 11.7373 82.8037 13.8539 81.2643C15.9705 79.725 18.8567 82.2265 19.4339 84.343C20.0112 86.4595 19.0491 93.5789 13.8539 96.2728C8.65869 98.9666 1.73174 97.6197 0 96.2728"
                stroke="#EFE0FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M114.391 16.2281C111.89 15.9073 106.656 17.3824 105.732 25.8488C104.809 34.3151 97.3945 36.0469 93.8027 35.8544"
                stroke="#64B9F7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="20.1082" cy="51.1087" r="4.61793" fill="#F99A3D" />
              <circle cx="48.0318" cy="14.8809" r="3.84817" fill="#FFE7EE" />
              <circle cx="59.7688" cy="22.18" r="2.29619" fill="#FFE7EE" />
              <circle cx="121.125" cy="65.759" r="4.13688" fill="#EFE0FF" />
              <circle cx="35.1154" cy="112.708" r="4.13688" fill="#BDE2F8" />
              <circle cx="86.6838" cy="124.83" r="4.13688" fill="#F9D2DD" />
              <circle cx="73.888" cy="120.693" r="2.29623" fill="#0090F9" />
            </g>
            <defs>
              <clipPath id="clip0_1394_6431">
                <rect width="140" height="140" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <S.LoginTitle>
            환영합니다!
            <br />
            <span>{formData.nickName}님</span>
          </S.LoginTitle>
          <S.LoginBox>
            <p>
              회원가입이 성공적으로 완료되었습니다!
              <br />
              아래 로그인 버튼을 눌러 다시 한 번 로그인 해주세요.
            </p>
          </S.LoginBox>
          <S.LoginButton>
            <Link to="/login">로그인</Link>
          </S.LoginButton>
        </S.LoginContainer>
      ) : (
        <S.Container onSubmit={handleSubmit}>
          <S.ContainerInner>
            <S.Title>회원가입</S.Title>
            <Input
              label="아이디"
              type="id"
              name="userId"
              placeholder="4~15자리 / 영문, 숫자, 특수문자'_' 사용가능"
              error={!!errors.userId}
              helperText={errors.userId}
              onChange={handleInputChange('userId')}
            />
            <Input
              label="비밀번호"
              type="password"
              name="userPassword"
              placeholder="8~12자리 / 영문 대소문자, 숫자, 특수문자 조합"
              error={!!errors.password}
              helperText={errors.password}
              onChange={handleInputChange('password')}
            />
            <Input
              label="이름"
              type="name"
              name="userName"
              placeholder="이름 입력"
              error={!!errors.name}
              helperText={errors.name}
              onChange={handleInputChange('name')}
            />
            <Input
              label="닉네임"
              type="nickName"
              name="nickName"
              placeholder="닉네임 입력"
              error={!!errors.nickName}
              helperText={errors.nickName}
              onChange={handleInputChange('nickName')}
            />
            <Input
              label="이메일"
              type="email"
              name="userEmail"
              placeholder="email@example.com"
              error={!!errors.email}
              helperText={errors.email}
              onChange={handleInputChange('email')}
            />
            <S.Button type="submit">회원가입</S.Button>
            <S.SignIn>
              <span>이미 회원이신가요?</span>
              <Link to="/login">로그인</Link>
            </S.SignIn>
          </S.ContainerInner>
        </S.Container>
      )}
    </>
  );
}

export default Index;
