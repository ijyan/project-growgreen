import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

// 404page
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Page404 from './pages/page404';
// auth
import Join from './pages/auth/join';
import Login from './pages/auth/login';
import Logout from './pages/auth/logout';
// challenge
// community
import Board from './pages/community/board';
import Inquiry from './pages/community/inquiry';
// exercise
import HomeTraining from './pages/exercise/homeTraining';
import Stretch from './pages/exercise/stretch';
// home
import Home from './pages/home';
// myPage
import Comment from './pages/myPage/comment';
import MyArticle from './pages/myPage/article';
import Profile from './pages/myPage/profile';
import Exercise from './pages/exercise';
import Diet from './pages/diet';
import Community from './pages/community';
import MyPage from './pages/myPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import useStore from './stores/user.store';

function App() {
  const { user, setUser } = useStore();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !user) {
      axios('http://localhost:4080/api/user/', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(response => {
          const responseData = response.data.data;
          setUser(responseData);
        })
        .catch(error => {
          // setCookies('token', new Date());
        });
    }
    if (!token && user) {
      // setUser(null);
    }
  }, [setUser, user]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise">
          <Route index element={<Exercise />} />
          <Route path="home-training" element={<HomeTraining />} />
          <Route path="stretch" element={<Stretch />} />
        </Route>

        <Route path="/diet">
          <Route index element={<Diet />} />
        </Route>

        <Route path="/community">
          <Route index element={<Community />} />
          <Route path="board" element={<Board />} />
          <Route path="inquiry" element={<Inquiry />} />
        </Route>

        <Route path="/my-page" element={<MyPage />}>
          <Route path="comment" element={<Comment />} />
          <Route path="article" element={<MyArticle />} />
          <Route path="profile" index element={<Profile />} />
        </Route>

        {/* <Route path="/diet" element={<Diet />} /> */}
        {/* <Route path="/community" element={<Community />} /> */}
        {/* <Route path="/challenge" element={<Challenge />} /> */}
        {/* <Route path="/myPage" element={<MyPage />} /> */}
        {/* <Route path="/*" element={<Page404 />} /> */}
        {/* /!* auth *!/ */}
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        {/* /!* challenge *!/ */}
        {/* <Route path="/challenge" element={<Challenge />} /> */}
        {/* /!* commnity *!/ */}
        {/* <Route path="/board" element={<Board />} /> */}
        {/* <Route path="/inquiry" element={<Inquiry />} /> */}
        {/* /!* home *!/ */}
        {/* <Route path="/home" element={<Home />} /> */}
        {/* /!* myPage *!/ */}
        {/* <Route path="/postWritten" element={<PostWritten />} /> */}
        {/* <Route path="/commentsWritten" element={<CommentsWritten />} /> */}
        {/* <Route path="/profileSetting" element={<ProfileSetting />} /> */}
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
