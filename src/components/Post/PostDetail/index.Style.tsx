import { styled } from 'styled-components';
import { common } from '../../../styles/theme';

export const Container = styled.div`
  ${common.container}
  max-width: 840rem;
`;

export const Inner = styled.div`
  border: 1px solid var(--gray30);
  border-radius: 12rem;
  padding: 32rem;
`;

export const Top = styled.div`
  position: relative;

  & h3 {
    font-size: 20rem;
    font-weight: 700;
    line-height: 28rem;
    color: var(--gray110);
    padding: 0 100rem 0 0;
  }
`;

export const PostBtn = styled.div`
  display: flex;
  gap: 4rem;
  position: absolute;
  right: 0;
  top: 0;

  & button {
    border: 1px solid var(--gray40);
    color: var(--gray90);
    min-width: 40rem;
    height: 24rem;
    line-height: 24rem;
    border-radius: 6rem;
    font-size: 12rem;
  }
`;

export const Info = styled.div`
  margin-top: 22rem;
  display: flex;
  justify-content: space-between;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12rem;

  & img {
    width: 48rem;
    height: 48rem;
    border-radius: 24rem;
    border: 1px solid var(--gray30);
  }

  & span {
    display: block;
  }

  & div span:first-child {
    font-size: 14rem;
    color: var(--gray110);
  }

  & div span:nth-child(2) {
    font-size: 12rem;
    color: var(--gray90);
  }
`;

export const Util = styled.div`
  display: flex;
  font-size: 13rem;
  gap: 12rem;

  & span {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const Content = styled.div`
  padding: 32rem 0;
  color: var(--gray110);
  font-size: 16rem;
  letter-spacing: -1px;
  line-height: 26rem;
  word-break: break-all;
`;

export const VoteCount = styled.div`
  text-align: center;

  & button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    border: 1px solid var(--gray40);
    padding: 0 12rem;
    border-radius: 6rem;
    color: var(--gray100);
    height: 32rem;
    transition: 0.2s ease;

    &:hover {
      background-color: var(--gray20);
    }
  }
`;
