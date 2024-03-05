// TypeScript 타입 정의와 인터페이스를 보관
import subTitle from '../components/SubTitle';

export interface CardType {
  id: number;
  categoryId?: number;
  category?: string;
  title?: string;
  thumbnail?: string;
  url: string;
  snippet: ICardSnippet;
}

export interface ICardSnippet {
  title: string;
  thumbnails: {
    high: {
      url: string;
    };
  };
  description: string;
}

export interface IPost {
  id: string;
  userId: string;
  nickName: string;
  avatar: string;
  title: string;
  content: string;
  category: string;
  sub_category: string;
  create_at: number;
  update_at: number;
  view_count: number;
  vote_count: number;
  comment_count: number;
}

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

export interface IUser {
  id: number;
  userId: string;
  name: string;
  nickName: string;
  password: string;
  email: string;
  avatar: string;
}
