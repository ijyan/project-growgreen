import { styled } from 'styled-components';

export const Result = styled.div`
  background-color: var(--blue20);
  border-radius: 8rem;
  padding: 16rem;
  color: var(--coral110);
  font-size: 14rem;
  display: flex;
  align-items: flex-start;
  gap: 10rem;
  border: 1px solid var(--coral40);

  & svg {
    width: 20rem;
  }

  & h3 {
    font-weight: 700;
  }

  & p {
    margin-top: 8rem;
  }
`;
