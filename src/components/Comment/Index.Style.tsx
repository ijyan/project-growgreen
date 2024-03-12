import { styled } from 'styled-components';

export const InputWrap = styled.div`
  border: 1px solid var(--gray40);
  margin: 24rem 0 0;
  border-radius: 8rem;
`;

export const InputBox = styled.div`
  padding: 22rem 108rem 0 24rem;
  border-bottom: 1px solid var(--gray40);

  & textarea {
    width: 100%;
  }

  & > span {
    display: inline-block;
    font-size: 14rem;
    font-weight: 600;
    margin-bottom: 12rem;
    color: var(--gray120);
  }
`;

export const CommentWrap = styled.div`
  margin-top: 40rem;

  & > div:first-child {
    border-top: 1px solid var(--gray40);
  }
`;

export const CommentList = styled.div`
  padding: 24rem 16rem;
  border-bottom: 1px solid #edeef0;
  color: var(--gray110);
  position: relative;

  & > span {
    font-size: 14rem;
    display: block;
    padding-right: 50rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14rem;
  gap: 12rem;
  margin-top: 24rem;

  & span {
    color: var(--gray90);
  }

  & img {
    width: 32rem;
    height: 32rem;
    border-radius: 16rem;
    object-fit: cover;
  }
`;

export const TextFieldBox = styled.div`
  & label {
    display: none;
    position: static;
    margin: 0 0 4rem;
  }

  & label + .MuiInputBase-root {
    margin: 4rem 0 0;
    padding: 0;

    &:hover fieldset {
      border: 1px solid var(--gray50);
    }
  }

  & textarea {
    font-size: 14rem;
    font-family: inherit;
    line-height: 1.5;
    outline-color: var(--gray80);
  }

  & fieldset {
    border: none !important;

    & legend {
      display: none;
    }
  }

  &.Mui-error fieldset {
    border-color: #ef4444;
  }
`;

export const ButtonWrap = styled.div``;

export const SubmitButtonWrap = styled.div`
  text-align: right;

  & button {
    display: inline-block;
    height: 48rem;
    margin-left: auto;
    width: 128rem;
    background-color: var(--green90);
    border-bottom-right-radius: 8rem;
    font-size: 16rem;
    font-weight: 600;
    color: #fff;
  }
`;

export const CommentsBtn = styled.div`
  display: flex;
  gap: 4rem;
  position: absolute;
  right: 16rem;
  top: 24rem;

  & button {
    border: 1px solid var(--gray40);
    color: var(--gray90);
    min-width: 40rem;
    height: 24rem;
    line-height: 24rem;
    border-radius: 6rem;
    font-size: 12rem;
  }
`;
