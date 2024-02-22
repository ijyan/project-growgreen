import { styled } from 'styled-components';
import { common } from '../../styles/theme';

export const Content = styled.div`
  max-width: 1440rem;
  margin: 0 auto;
  padding: 0 16rem;
  color: var(--gray110);

  @media screen and (min-width: 768px) {
    padding: 80rem 48rem;
  }
`;

export const SearchForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListNum = styled.div`
  font-size: 24rem;
  font-weight: 500;
  color: var(--gray110);

  & strong {
    font-weight: 700;
  }
`;

export const InputBox = styled.div`
  position: relative;

  & > div {
    width: 300rem;
  }

  & label {
    ${common.blind}
  }

  & input {
    width: 100%;
    height: 38rem !important;
    margin: 0 !important;
    padding: 8rem 44rem 8rem 12rem !important;
    font-size: 14rem !important;
  }
`;

export const SearchButton = styled.button`
  width: 32rem;
  height: 32rem;
  position: absolute;
  right: 8rem;
  top: 4rem;

  & span {
    ${common.blind}
  }
`;

export const SortForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32rem 0;
`;

export const SortBox = styled.div`
  display: flex;
  gap: 8rem;
  padding: 10rem;
  border: 1px solid var(--gray40);
  border-radius: 6rem;

  & button {
    display: flex;
    padding: 4rem;
    gap: 4rem;
    align-items: center;
    justify-content: center;
    font-size: 14rem;
    color: var(--gray90);
    font-weight: 500;

    & svg {
      fill: var(--gray60);
    }
  }

  & button.active {
    color: var(--gray110);

    & svg {
      fill: var(--green90);
    }
  }
`;

export const WriteButton = styled.button`
  width: 224rem;
  font-size: 16rem;
  height: 48rem;
  background-color: var(--green90);
  border-radius: 8rem;
  color: #fff;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--green100);
  }
`;

export const List = styled.div`
  border-top: 1px solid var(--gray40);
`;
