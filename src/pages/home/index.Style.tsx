import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { common } from '../../styles/theme';

export const Section = styled.section`
  overflow: visible;
  margin: 160rem 0;
`;

export const Title = styled.h3`
  max-width: 1440rem;
  margin: 0 auto;
  font-size: 46rem;
  color: var(--gray120);
  font-weight: 700;
  letter-spacing: -1rem;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    padding: 0 48rem 48rem;
  }
`;

export const ExerciseInner = styled.div`
  display: flex;
  gap: 16rem;
  flex-wrap: nowrap;

  & > div {
    flex: 0 0 412rem;
  }
`;

export const CommunityInner = styled.div`
  max-width: 1440rem;
  margin: 0 auto;
  display: grid;
  gap: 24rem;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 768px) {
    padding: 0 48rem;
  }
`;

export const CommunityLink = styled(Link)`
  display: flex;
  height: 168rem;
  padding: 36rem 40rem;
  background-color: var(--gray20);
  border-radius: 24rem;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--gray30);

    & svg {
      transform: translateX(12px);
    }
  }
`;

export const CommunityText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24rem;

  & h3 {
    font-size: 24rem;
    color: var(--gray120);
    font-weight: 500;
  }

  & div {
    display: flex;
    gap: 8rem;
    align-items: center;
    color: var(--gray110);

    & svg {
      transition: all 0.2s ease;
    }
  }
`;
