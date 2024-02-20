import styled from 'styled-components';

export const Card = styled.div`
  display: block;
  //background: var(--gray20);
  border-radius: 24rem;
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.18);
    //box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.14);
    transform: translateY(-5px);
  }
`;

export const Category = styled.span`
  display: inline-block;
  //background-color: #fff;
  background: var(--gray20);
  font-size: 14rem;
  border-radius: 8rem;
  height: 32rem;
  padding: 0 12rem;
  line-height: 32rem;
`;

export const Title = styled.h3`
  color: var(--gray120);
  font-weight: 500;
  letter-spacing: -1rem;
  font-size: 24rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 16rem;
`;

export const ImgWrap = styled.div`
  overflow: hidden;
  border-radius: 24rem 24rem 0 0;
  aspect-ratio: 16/9;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextWrap = styled.div`
  padding: 24rem 32rem 40rem;
`;
