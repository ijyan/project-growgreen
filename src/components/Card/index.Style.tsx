import styled from 'styled-components';
import { common } from '../../styles/theme';

export const Card = styled.div`
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
  transition: all 0.3s ease;
  border-radius: 24rem;
  overflow: hidden;
  background-color: #fff;

  & a {
    display: block;
    min-height: 375rem;
  }

  &:hover {
    box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.18);
    //box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.14);
    transform: translateY(-5px);
  }
`;

export const Title = styled.h3`
  color: var(--gray120);
  font-weight: 600;
  letter-spacing: -1rem;
  font-size: 24rem;
  ${common.ellipsis}
  -webkit-line-clamp: 2;
  margin: 0 0 8rem;
`;

export const Description = styled.span`
  display: block;
  ${common.ellipsis}
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: var(--gray90);
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
