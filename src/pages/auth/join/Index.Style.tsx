import { styled } from 'styled-components';

export const Container = styled.form`
  max-width: 420rem;
  margin: 120rem auto;

  & label[data-shrink='true'] {
    color: var(--gray100);
  }

  & input {
    border: 1px solid var(--gray50);
    height: 48rem;
    font-size: 16rem;
    padding: 8rem 12rem;
    border-radius: 6rem;
  }

  & input:focus {
    border-color: var(--gray80);
  }
`;

export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24rem;
`;

export const Title = styled.h3`
  font-size: 32rem;
  color: var(--gray110);
  font-weight: 700;
  text-align: center;
`;

export const Button = styled.button`
  font-size: 16rem;
  height: 48rem;
  background-color: var(--green90);
  border-radius: 8rem;
  color: #fff;
  font-weight: 600;
  margin-top: 16rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--green100);
  }
`;

export const SignIn = styled.div`
  text-align: center;

  & span {
    color: var(--gray110);
    font-size: 14rem;
  }

  & a {
    margin-left: 8rem;
    font-size: 14rem;
    text-decoration: underline;
    color: var(--blue80);
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 64rem;
  max-width: 420rem;
  margin: 128rem auto;
  align-items: center;
  justify-content: center;

  & svg {
    width: 140rem;
  }
`;

export const LoginTitle = styled.h2`
  font-size: 32rem;
  color: var(--gray120);
  font-weight: 700;
  line-height: 1.2;
  text-align: center;

  & span {
    color: var(--blue80);
  }
`;

export const LoginBox = styled.div`
  padding: 16rem;
  border-radius: 8rem;
  text-align: center;
  font-size: 14rem;
  background-color: var(--gray20);
  margin: 24rem 0;
  width: 100%;
  color: var(--gray120);
`;

export const LoginButton = styled.button`
  width: 192rem;
  margin: 0 auto;
  background-color: var(--green90);
  border-radius: 8rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--green100);
  }

  & a {
    display: block;
    width: 100%;
    height: 38rem;
    line-height: 38rem;
    font-size: 14rem;
    border-radius: 8rem;
    color: #fff;
    font-weight: 600;
  }
`;
