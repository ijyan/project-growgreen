// TypeScript 타입 정의와 인터페이스를 보관
export interface CardType {
  id: number;
  categoryId?: number;
  category: string;
  title: string;
  thumbnail: string;
  url: string;
}
