import { styled } from 'styled-components';
import { styled as mui } from '@mui/material/styles';
import { NativeSelect, Select } from '@mui/material';

export const Content = styled.div`
  max-width: 840rem;
  margin: 0 auto;
  padding: 0 16rem;
  color: var(--gray110);

  & .css-v1z81d-MuiFormControl-root-MuiTextField-root {
    width: 100%;
  }

  & label {
    font-size: 14rem;
    color: var(--gray100);
    font-weight: 500;
    display: block;
  }

  @media screen and (min-width: 768px) {
    padding: 80rem 48rem;
  }
`;

export const ContentInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32rem;
`;

export const CustomSelect = styled.div`
  position: relative;

  & select {
    cursor: pointer;
    width: 100%;
    padding: 8rem 40rem 8rem 12rem;
    font-size: 16rem;
    height: 48rem;
    border: 1px solid var(--gray50);
    border-radius: 6rem;
    margin: 4rem 0 0;
    color: var(--gray110);
    position: relative;

    &::before {
      content: '⌵';
      display: block;
      position: absolute;
      top: 1px;
      right: 8px;
      color: #49c181;
      font-size: 20px;
    }
  }

  & svg {
    position: absolute;
    right: 10rem;
    bottom: 12rem;
  }
`;

export const TextField = styled.div`
  & textarea {
    width: 100%;
    min-height: 300rem;
    margin-top: 4rem;
    border: 1px solid var(--gray50);
    border-radius: 6rem;
    padding: 12rem;
    resize: none;
    font-size: 16rem;
  }

  &::placeholder {
    color: var(--gray40);
  }
`;

export const Button = styled.button`
  margin: 0 auto;
  width: 140rem;
  height: 56rem;
  font-size: 16rem;
  font-weight: 700;
  background-color: var(--green90);
  text-align: center;
  border-radius: 8rem;
  color: #fff;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--green100);
  }
`;

export const SelectBox = styled.div`
  & label {
    position: inherit;
  }

  //& > div > div {
  //  border-radius: 6rem;
  //}

  & .MuiInputBase-root {
    font-size: 16rem;
    color: var(--gray110);
    line-height: 32rem;
    border-radius: 6rem;
    margin-top: 4rem !important;
    padding: 8rem 40rem 8rem 12rem;
    width: 100%;

    & fieldset {
      transition: border 0.2s ease;
    }

    &:hover fieldset {
      border: 1px solid var(--gray50);
    }

    &:focus fieldset {
      border: 1px solid var(--gray80);
    }
  }
`;

export const TextFieldBox = styled.div`
  & label {
    position: static;
    margin: 0 0 4rem;
  }

  & label + .MuiInputBase-root {
    margin: 4rem 0 0;
    padding: 12rem;

    &:hover fieldset {
      border: 1px solid var(--gray50);
    }
  }

  & textarea {
    font-size: 16rem;
    font-family: inherit;
    line-height: 1.5;
    outline-color: var(--gray80);
  }

  & fieldset {
    & legend {
      display: none;
    }
  }

  &.Mui-error fieldset {
    border-color: #ef4444;
  }
`;

export const MuiTextField = mui(TextField)`

`;

export const MuiSelect = mui(NativeSelect)`
  font-size: 16rem;

  & label {
    position: static;
    font-size: 14rem;
  }

  & .css-yf8vq0-MuiSelect-nativeInput {
    font-size: 16rem;
  }

  & input {
  font-size: 16rem;
    padding: 8rem 12rem;
  }
  
  & fieldset {
    & legend {
      font-size: 14rem;
      transition: none;
    }
  }
`;
