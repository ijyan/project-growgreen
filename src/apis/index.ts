import axios from 'axios';
// 백엔드 API와 통신을 담당하는 함수 저장
// ex) 사용자 데이터를 가져오는 API 호출

// 기본 설계 API
const API_BASE_URL = 'https://localhost:5000';

// Auth API Endpoints
// 회원가입 관련 API
export const authApi = {
  // 회원가입
  // POST: auth/register
  // 요청 바디
  // 응답
  register: (userData: { username: string; email: string; password: string }) =>
    axios.post(`${API_BASE_URL}/users`, userData),

  // 로그인
  // POST: /auth/login
  // 요청 바디
  // 응답
  login: (credentials: { username: string; password: string }) =>
    axios.post(`${API_BASE_URL}/users`, credentials),

  findUsername: (email: string) =>
    axios.post(`${API_BASE_URL}/auth/find-username`, { email }),

  resetPassword: (data: { username: string; email: string }) =>
    axios.post(`${API_BASE_URL}/auth/reset-password`, data),
};

// 마이페이지 관련 API
export const userApi = {
  // 개인 정보 수정
  updateProfile: (userId: string, updateData: object) =>
    axios.put(`${API_BASE_URL}/users/${userId}`, updateData),

  // 1:1 문의 관련
  getUserInquiries: (userId: string) =>
    axios.get(`${API_BASE_URL}/inquiries/${userId}`),

  postInquiry: (
    userId: string,
    inquiryData: { title: string; content: string },
  ) => axios.post(`${API_BASE_URL}/inquiries`, { userId, ...inquiryData }),

  updateInquiry: (
    inquiryId: string,
    updateData: { title: string; content: string },
  ) => axios.put(`${API_BASE_URL}/inquiries/${inquiryId}`, updateData),

  deleteInquiry: (inquiryId: string) =>
    axios.delete(`${API_BASE_URL}/inquiries/${inquiryId}`),

  // 알림 설정
  getNotificationSettings: (userId: string) =>
    axios.get(`${API_BASE_URL}/notificationsSettings/${userId}`),

  updateNotificationSettings: (userId: string, settingsData: object) =>
    axios.put(
      `${API_BASE_URL}/user/notificationsSettings/${userId}`,
      settingsData,
    ),
};

// 커뮤니티 관련 API
export const communityApi = {
  // 게시판
  postArticle: (articleData: {
    userId: string;
    category: string;
    title: string;
    content: string;
  }) => axios.post(`${API_BASE_URL}/posts`, articleData),

  getArticlesByCategory: (categoryId: string) =>
    axios.get(`${API_BASE_URL}/posts/${categoryId}`),

  updateArticle: (
    postId: string,
    updateData: { title: string; content: string },
  ) => axios.put(`${API_BASE_URL}/posts/${postId}`, updateData),

  deleteArticle: (postId: string) =>
    axios.delete(`${API_BASE_URL}/posts/${postId}`),

  // 검색
  searchArticles: (queryParams: { query: string; category?: string }) =>
    axios.get(`${API_BASE_URL}/posts`, { params: queryParams }),

  // 댓글
  postComment: (
    postId: string,
    commentData: { userId: string; content: string },
  ) => axios.post(`${API_BASE_URL}/comments/${postId}`, commentData),

  updateComment: (commentId: string, updateData: { content: string }) =>
    axios.put(`${API_BASE_URL}/comments/${commentId}`, updateData),

  deleteComment: (commentId: string) =>
    axios.delete(`${API_BASE_URL}/comments/${commentId}`),
};
