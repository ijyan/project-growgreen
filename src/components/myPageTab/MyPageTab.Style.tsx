import styled from 'styled-components';

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 0 64rem 0 0;
  flex-grow: 1;
  min-width: 256rem;

  & a {
    height: 48rem;
    padding: 0 12rem;
    line-height: 46rem;
    color: var(--gray90);
    border-radius: 8rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6rem;

    &:hover {
      background: var(--gray20);
    }
  }

  & a.active {
    color: var(--gray110);
    font-weight: 700;
    background-color: var(--gray20);

    & img {
      filter: invert(22%) sepia(15%) saturate(1129%) hue-rotate(187deg)
        brightness(99%) contrast(90%);
    }
  }

  & img {
    filter: invert(43%) sepia(4%) saturate(2282%) hue-rotate(183deg)
      brightness(87%) contrast(82%);
  }
`;
