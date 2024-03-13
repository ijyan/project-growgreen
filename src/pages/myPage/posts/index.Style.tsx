import styled from 'styled-components';
import { common } from '../../../styles/theme';

export const Container = styled.div`
  ${common.container}
`;

// export const Title = styled.h3`
//   font-size: 20rem;
//   color: var(--gray110);
//   font-weight: 600;
// `;

export const ContainerInner = styled.div`
  display: flex;
`;

export const Content = styled.div`
  border-left: 1px solid var(--gray40);
  padding-left: 80rem;
  width: 100%;
`;

export const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12rem;
  min-height: 0;
  min-width: 0;
`;

export const PostWrapper = styled.div`
  overflow: hidden; /* NEW */
  min-width: 0;

  & a {
    display: block;
    border: 1px solid var(--gray30);
    padding: 24rem;
    border-radius: 8rem;
    height: 100%;

    &:hover h3 {
      text-decoration: underline;
    }
  }
`;

export const Category = styled.div`
  margin-bottom: 8rem;
  color: var(--gray90);
  font-size: 13rem;
  font-weight: 700;
`;

export const Title = styled.h3`
  font-size: 16rem;
  font-weight: 700;
  ${common.ellipsis}
`;

export const Desc = styled.span`
  display: block;
  ${common.ellipsis}
  -webkit-line-clamp: 2;
  font-size: 14rem;
  line-height: 20rem;
  margin-top: 12rem;
  height: 40rem;
`;

export const Util = styled.div`
  font-size: 13rem;
  color: var(--gray90);
  display: flex;
  align-items: center;
  gap: 12rem;

  & span {
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-top: 18rem;

    & strong {
      font-weight: 700;
    }
  }
`;

export const NotFound = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150rem 0;
  text-align: center;
  color: var(--gray90);
  font-weight: 500;
  gap: 20rem;

  & span {
    display: block;
    font-size: 14rem;
    margin-top: 4rem;
  }
`;
