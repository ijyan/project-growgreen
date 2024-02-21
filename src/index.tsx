import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyled from './styles/GlobalStyled';
import { theme } from './styles/theme';

// 메인
import Home from './pages/home';

// 운동
import Main from './pages/exercise/main';
import HomeTraining from './pages/exercise/homeTraining';
import Stretch from './pages/exercise/stretch';

// 식단
import Diet from './pages/diet';

// 커뮤니티
import Community from './pages/community';
import Questions from './pages/community/questions';
import Board from './pages/community/board';

// 마이페이지
import MyPage from './pages/myPage';
import Profile from './pages/myPage/profile';
import Comment from './pages/myPage/comment';
import MyPosts from './pages/myPage/posts';

// 게시글 상세
import PostDetail from './components/PostDetail/PostDetail';

// NotFound
import NotFound from './pages/notFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <App />
      </ThemeProvider>
    ),
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: 'posts/:postId', element: <PostDetail /> },
      {
        path: '/exercise',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Main />,
          },
          {
            path: 'home-training',
            element: <HomeTraining />,
          },
          {
            path: 'stretch',
            element: <Stretch />,
          },
        ],
      },
      {
        path: '/diet',
        element: <Diet />,
      },
      {
        path: '/community',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Community />,
          },
          {
            path: 'questions',
            element: <Questions />,
          },
          {
            path: 'board',
            element: <Board />,
          },
        ],
      },
      {
        path: '/my-page',
        element: <MyPage />,
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'comment',
            element: <Comment />,
          },
          {
            path: 'posts',
            element: <MyPosts />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
