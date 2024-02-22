import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Popover } from '@mui/material';
import useStore from '../../stores/user.store';
import * as S from './index.Style';
import Nav from '../Nav';
import logo from '../../assets/logo.svg';
import { MYPAGE_LIST } from '../../constants/MyPageMenu';

function Index() {
  const navigator = useNavigate();
  const [cookies, , removeCookie] = useCookies(['userToken', 'userType']);
  const { user, removeUser } = useStore();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleUserProfile = (url: string) => {
    setAnchorEl(null);
    navigator(url);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollInit = 0;

      if (scrollPosition > scrollInit) {
        setIsScrolled(true);
      }
      if (scrollPosition === 0) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const signOutHandler = () => {
    navigator('/');
    if (user) {
      removeUser(user.id);
      removeCookie('userToken', { path: '/' }); // userToken Cookie
      removeCookie('userType', { path: '/' }); // userType Cookie 삭제
      localStorage.clear();
    }
    setAnchorEl(null);
  };

  return (
    <S.Header $scroll={isScrolled}>
      <S.Inner>
        <S.Logo>
          <Link to="/">
            <img src={logo} alt="홈페이지로 이동" />
          </Link>
        </S.Logo>
        <Nav />
        {user ? (
          <S.User>
            <S.UserButton onClick={handleClick}>
              <S.UserImg>
                {user.avatar === '' ? (
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
                  <img src={user.avatar} alt="사용자 프로필" />
                )}
              </S.UserImg>
              <span>{`${user.nickName}`}</span>
              <S.UserArrow>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36 19L24 31L12 19H36Z"
                    fill="#C5CAD0"
                    stroke="#C5CAD0"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                </svg>
              </S.UserArrow>
            </S.UserButton>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorReference="anchorEl"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <S.MyList>
                {MYPAGE_LIST.map(item => (
                  <S.MyLink
                    key={item.id}
                    onClick={() => handleUserProfile(item.url)}
                  >
                    <span>{item.title}</span>
                  </S.MyLink>
                ))}
                <S.MyLink onClick={signOutHandler}>
                  <span className="logout">로그아웃</span>
                </S.MyLink>
              </S.MyList>
            </Popover>
          </S.User>
        ) : (
          <S.ButtonWrapper>
            <Link to="/login">로그인</Link>
          </S.ButtonWrapper>
        )}
      </S.Inner>
    </S.Header>
  );
}

export default Index;
