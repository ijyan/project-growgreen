import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './index.Style';
import Img from '../../assets/images/not-found.jpg';

// 404 에러 페이지
export default function Index() {
  const navigate = useNavigate();
  return (
    <S.Content>
      <img src={Img} alt="페이지를 찾을 수 없습니다." />
      <S.Text>
        <h3>요청하신 페이지를 찾을 수 없습니다.</h3>
        <p>
          존재하지 않는 주소를 입력하셨거나,
          <br />
          요청하신 페이지의 주소가 변경, 삭제되어 페이지를 찾을 수 없습니다.
        </p>
        <div>
          <button
            type="button"
            className="btn_home"
            onClick={() => navigate('/')}
          >
            홈으로 가기
          </button>
          <button
            type="button"
            className="btn_prev"
            onClick={() => navigate(-1)}
          >
            이전 페이지
          </button>
        </div>
      </S.Text>
    </S.Content>
  );
}
