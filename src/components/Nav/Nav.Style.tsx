import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  height: 70rem;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  gap: 10rem;

  & a {
    cursor: pointer;
    border-radius: 6rem;
    padding: 0 11rem;
    font-size: 14rem;
    color: var(--gray120);
    text-decoration: none;
    font-weight: 600;
    height: 33rem;
    line-height: 33rem;
    &:hover {
      background-color: #f4f6fa;
    }
  }
`;
