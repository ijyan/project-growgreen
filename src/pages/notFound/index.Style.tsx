import { styled } from 'styled-components';

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  & img {
    width: 300px;
  }
`;

export const Text = styled.div`
  & h3 {
    font-size: 36px;
    color: #373f57;
    letter-spacing: -1px;
    line-height: 50px;
    font-weight: 700;
    margin: 0;
  }

  & p {
    color: #6b768b;
    margin: 24px 0 32px;
    line-height: 1.5;
  }

  & button {
    display: inline-block;
    padding: 0 12px;
    width: 140px;
    font-size: 16px;
    text-align: center;
    border-radius: 6px;
    box-sizing: border-box;
    cursor: pointer;
    border: 0;
    background-color: #fff;
    height: 46px;
    font-weight: 500;

    &.btn_prev {
      border: 1px solid #d7dce5;
      background-color: #fff;
      color: #5c667b;
      margin-left: 8px;
    }

    &.btn_home {
      border: 1px solid #373f57;
      background-color: #373f57;
      color: #fff;
    }
  }
`;
