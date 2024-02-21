import SVGProfile from '../assets/images/ico_profile.svg';
import SVGArticle from '../assets/images/ico_article.svg';
import SVGComment from '../assets/images/ico_commnet.svg';

export const MYPAGE_LIST = [
  {
    id: 0,
    title: '프로필',
    url: '/my-page/profile',
    svg: SVGProfile,
  },
  {
    id: 1,
    title: '내가 쓴 게시물',
    url: '/my-page/posts',
    svg: SVGArticle,
  },
  {
    id: 2,
    title: '내가 쓴 댓글',
    url: '/my-page/comment',
    svg: SVGComment,
  },
];
