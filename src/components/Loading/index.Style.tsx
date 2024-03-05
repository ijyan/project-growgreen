import { styled } from 'styled-components';

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16rem;

  & img {
    width: 60rem;
  }
`;

export const Text = styled.div`
  & h3 {
    font-size: 18rem;
    text-align: center;
    color: var(--gray100);
    font-weight: 600;
  }

  & p {
    font-size: 14rem;
    color: var(--gray70);
    margin-top: 4rem;
  }
`;
