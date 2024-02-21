import { styled } from 'styled-components';

export const Wrapper = styled.div`
  border-bottom: 1px solid var(--gray40);

  & > a {
    display: block;
    padding: 38rem 32rem;

    &:hover h3 {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h3`
  font-size: 20rem;
  font-weight: 700;
  letter-spacing: -1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--gray110);
`;

export const Desc = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 12rem;
  font-size: 16rem;
  letter-spacing: -1rem;
  color: var(--gray90);
`;

export const Util = styled.div`
  margin-top: 20rem;
  font-size: 14rem;
  color: var(--gray90);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  gap: 16rem;
  align-items: center;

  & span:not(:first-child) {
    display: flex;
    align-items: center;
    gap: 4rem;

    & strong {
      font-weight: 600;
    }
  }
`;

export const Category = styled.span`
  display: block;
  background-color: var(--blue20);
  min-width: 60rem;
  text-align: center;
  padding: 0 12rem;
  height: 28rem;
  line-height: 28rem;
  border-radius: 6rem;
`;
