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
import Exercise from './pages/exercise';

// 커뮤니티
import Community from './pages/community';
import Questions from './pages/community/questions';
import Board from './pages/community/board';

// 마이페이지
import MyPage from './pages/myPage';
import Profile from './pages/myPage/profile';
import MyPosts from './pages/myPage/posts';

// 게시글
import PostDetail from './components/Post/PostDetail';
import PostNew from './pages/post/new';
import PostEdit from './pages/post/edit';

// NotFound
import NotFound from './pages/notFound';

// Auth
import Login from './pages/auth/login';
import Join from './pages/auth/join';

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
      { path: '/login', element: <Login /> },
      { path: '/join', element: <Join /> },
      { path: '/comments/:commentId' },
      {
        path: '/exercise',
        element: <Exercise />,
      },
      {
        path: '/posts',
        element: <Outlet />,
        children: [
          {
            path: ':postId',
            element: <PostDetail />,
          },
          {
            path: 'new',
            element: <PostNew />,
          },
          {
            path: ':postId/edit',
            element: <PostEdit />,
          },
        ],
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
