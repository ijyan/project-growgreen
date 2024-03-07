import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('../assets/fonts/Pretendard-Bold.subset.woff') format('woff2'),
    url('../assets/fonts/Pretendard-Bold.subset.woff2') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard-Medium';
    src: url('../assets/fonts/Pretendard-Medium.subset.woff2') format('woff2'),
    url('../assets/fonts/Pretendard-Medium.subset.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('../assets/fonts/Pretendard-SemiBold.subset.woff2') format('woff2'),
    url('../assets/fonts/Pretendard-SemiBold.subset.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard-Bold';
    src: url('../assets/fonts/Pretendard-Bold.subset.woff2') format('woff2'),
    url('../assets/fonts/Pretendard-Bold.subset.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  ${reset}
  :root {
    --black: #000;
    --white: #fff;
    --blue10: #f7fafe;
    --blue20: #eff5ff;
    --blue30: #deebff;
    --blue40: #bcd1fc;
    --blue50: #94b5fc;
    --blue60: #6d9cfa;
    --blue70: #5189fa;
    --blue80: #4876ef;
    --blue90: #2d65f2;
    --blue100: #3157dd;
    --blue110: #1632a6;
    --blue120: #15276f;
    --gray10: #f8fafc;
    --gray20: #f4f6fa;
    --gray30: #eaedf4;
    --gray40: #d7dce5;
    --gray50: #b4c0d3;
    --gray60: #96a0b5;
    --gray70: #8491a7;
    --gray80: #67738e;
    --gray90: #5c667b;
    --gray100: #475067;
    --gray110: #373f57;
    --gray120: #292e41;
    --gray130: #171926;
    --green10: #f3fffd;
    --green20: #ebfffc;
    --green30: #defaf6;
    --green40: #aff4e5;
    --green50: #7beed8;
    --green60: #4fe5c7;
    --green70: #00deb3;
    --green80: #00d3ab;
    --green90: #11be9a;
    --green100: #17a187;
    --green110: #2a7c6d;
    --green120: #286258;
    --coral10: #fffafa;
    --coral20: #fff5f7;
    --coral30: #fce6e6;
    --coral40: #fec5c5;
    --coral50: #fea4a3;
    --coral60: #ff837e;
    --coral70: #ff7a72;
    --coral80: #ff6d6a;
    --coral90: #ff5656;
    --coral100: #eb413f;
    --coral110: #d63131;
    --coral120: #b81d1d;
  }

  ::selection {
    background-color: #cbdeff;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 6.25%;
  }

  body {
    font-size: 16rem;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    line-height: 1.5;
    word-break: keep-all;
    word-wrap: break-word;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
    font-family: inherit;
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    -ms-appearance: none;
    appearance: none;

    &:focus {
      border-color: var(--gray80);
    }
  }

  textarea {
    font-family: inherit;
    color: inherit;
  }

  textarea::placeholder {
    color: var(--gray50);
  }
`;

export default GlobalStyled;
