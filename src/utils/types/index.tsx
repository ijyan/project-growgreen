// 회원 정보 정의
export interface User extends FormData {
  id: number;
  userId: string;
  avatar: string;
}

export interface FormData {
  password: string;
  name: string;
  email: string;
  nickName: string;
}
