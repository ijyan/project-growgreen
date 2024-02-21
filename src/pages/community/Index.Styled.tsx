import { styled } from 'styled-components';

export const Content = styled.div`
  max-width: 1440rem;
  margin: 0 auto;
  padding: 0 16rem;
  color: var(--gray110);

  & > div:first-child {
    border-top: 1px solid var(--gray40);
  }

  @media screen and (min-width: 768px) {
    padding: 80rem 48rem;
  }
`;
