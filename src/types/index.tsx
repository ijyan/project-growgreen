// TypeScript 타입 정의와 인터페이스를 보관
export interface CardType {
  id: number;
  categoryId?: number;
  category: string;
  title: string;
  thumbnail: string;
  url: string;
}

export interface PostType {
  id: number;
  userId: string;
  nickName: string;
  avatar: string;
  title: string;
  content: string;
  category: string;
  sub_category: string;
  create_at: string;
  update_at: string;
  view_count: number;
  vote_count: number;
  comment_count: number;
}
