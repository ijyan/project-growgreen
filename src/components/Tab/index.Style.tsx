import styled from 'styled-components';

export const Tab = styled.div`
  margin-bottom: 60rem;
  display: flex;
  gap: 12rem;
  justify-content: center;
  padding: 0 48rem;

  & a {
    height: 48rem;
    padding: 0 24rem;
    line-height: 46rem;
    color: var(--gray110);
    border: 1rem solid var(--gray40);
    border-radius: 8rem;

    :hover {
      background: var(--gray20);
    }
  }

  & a.active {
    border-color: var(--gray120);
    color: var(--gray120);
  }
`;
