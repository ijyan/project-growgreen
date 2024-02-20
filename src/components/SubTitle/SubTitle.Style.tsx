import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 48rem;
  font-weight: 600;
  max-width: 1440rem;
  margin: 0 auto;
  text-align: center;
  padding: 0 16rem;
  color: var(--gray110);

  @media screen and (min-width: 768px) {
    padding: 80rem 48rem;
  }
`;
