import { styled } from 'styled-components';

export const Header = styled.header<{ $scroll: boolean }>`
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 999;
  transition: box-shadow 0.3s ease 0s;
  box-shadow: ${props =>
    props.$scroll
      ? 'rgba(20, 20, 20, 0.06) 0px 0px 0px 1px, rgba(20, 20, 20, 0.08) 0px 2px 4px 0px'
      : 'none'};
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440rem;
  margin: 0 auto;
  padding: 0 16rem;

  & > * {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 0 48rem;
  }
`;

export const Logo = styled.h1`
  width: 20%;
  flex: 0 0 20%;
  display: flex;
  justify-content: flex-start;

  & a {
    display: flex;
    align-items: center;
  }

  & img {
    width: 168rem;
    height: 50rem;
  }
`;

export const ButtonWrapper = styled.div`
  width: 20%;
  flex: 0 0 20%;
  display: flex;
  justify-content: flex-end;
  gap: 10rem;

  & a {
    cursor: pointer;
    height: 33rem;
    line-height: 31rem;
    background-color: var(--gray120);
    color: #fff;
    border-radius: 8rem;
    border: 0;
    padding: 0 12rem;
    font-weight: 600;
    font-size: 13rem;
  }

  & a:first-child {
    border: 1px solid #d7dce5;
    background: none;
    color: var(--gray110);

    &:hover {
      background-color: var(--gray20);
    }
  }
`;

export const User = styled.div`
  width: 20%;
  flex: 0 0 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const UserButton = styled.button`
  position: relative;
  padding: 11px 27px 12px 46px;
  border-radius: 20rem;
  background-color: #fff;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--gray20);
  }

  & span {
    display: block;
    overflow: hidden;
    max-width: 50px;
    color: var(--gray90);
    font-size: 14rem;
    letter-spacing: -1rem;
    line-height: 18rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
  }
`;

export const UserImg = styled.div`
  display: block;
  overflow: hidden;
  position: absolute;
  top: 4px;
  left: 6px;
  z-index: 2;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  box-sizing: border-box;
  background: #fff;

  & img {
    width: 32rem;
    height: 32rem;
    aspect-ratio: 1;
    object-fit: cover;
  }
`;

export const UserArrow = styled.div`
  display: block;
  position: absolute;
  top: 12px;
  right: 8px;
  z-index: 2;
  width: 16px;
  height: 16px;
`;

export const MyList = styled.div`
  background-color: #fff;
  box-shadow:
    rgba(20, 20, 20, 0.12) 4px 12px 24px 0,
    rgba(20, 20, 20, 0.08) 0 1px 4px 0;
  display: flex;
  flex-direction: column;
  padding: 6rem;
  min-width: 140rem;
`;

export const MyLink = styled.span`
  display: block;
  font-size: 14rem;
  cursor: pointer;
  border-radius: 6rem;
  height: 37rem;
  line-height: 37rem;
  padding: 0 8rem;
  color: var(--gray120);
  transition: background-color 0.2s ease 0s;
  font-weight: 500;

  &:hover {
    background-color: var(--gray20);
  }

  & span {
    display: flex;
    align-items: center;
    gap: 4rem;

    svg {
      width: 20rem;
    }
  }

  & span.logout {
    color: #eb413f;
  }
`;
