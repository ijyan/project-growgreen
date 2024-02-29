import styled from 'styled-components';

export const Content = styled.div`
  width: 1440rem;
  margin: 0 auto;
  padding: 0 16rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36rem;
  min-height: 0;
  min-width: 0;

  @media screen and (min-width: 768px) {
    padding: 0 48rem;
  }
`;
