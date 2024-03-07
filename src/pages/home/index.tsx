import React, { useEffect, useRef, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from 'axios';
import * as S from './index.Style';
import CardList from '../../components/CardList';
import ImgQustion from '../../assets/images/img_question.png';
import ImgBoard from '../../assets/images/img_board.png';

// 홈 화면 페이지
export default function Index() {
  const [exerciseData, setExerciseData] = useState([]);

  // 무한 스크롤
  const exerciseRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    // 운동 data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLPPetu1spkebTXnDVnGtT0tYZV-6ocW4z&key=${process.env.REACT_APP_API_KEY}`,
        );
        setExerciseData(response.data.items);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // 무한 스크롤
    const handleScroll = () => {
      const currentRef = exerciseRef.current;
      if (!currentRef) return;

      const { scrollWidth = 0, clientWidth = 0 } = currentRef;
      const maxScrollPosition = scrollWidth - clientWidth;

      setScrollPosition(prev => (prev + 0.2) % Math.max(maxScrollPosition, 1));
    };

    const intervalId = setInterval(handleScroll, 10); // 매 20밀리초마다 스크롤

    return () => clearInterval(intervalId);
  }, [scrollPosition]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Grow Green</title>
        </Helmet>
      </HelmetProvider>
      <main>
        <S.Section>
          <S.Title>
            간단한 운동으로
            <br />
            건강한 습관을 만들어보세요.
          </S.Title>
          <S.ExerciseInner
            ref={exerciseRef}
            style={{ transform: `translateX(${-scrollPosition}px)` }}
          >
            <CardList data={exerciseData.slice(0, 32)} />
            <CardList data={exerciseData.slice(0, 32)} />
          </S.ExerciseInner>
        </S.Section>
        <S.Section>
          <S.Title>
            다이어터들과 이야기를 나누고
            <br />
            일상을 공유해보세요.
          </S.Title>
          <S.CommunityInner>
            <S.CommunityLink to="/community/questions">
              <S.CommunityText>
                <h3>질문&고민</h3>
                <div>
                  바로가기
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                      fill="#373f57"
                    />
                    <path
                      d="M13.971 8.57861L13.2084 9.34121L15.7213 11.854L7.53825 11.8544L7.53826 12.9297L15.7213 12.9293L13.2085 15.4421L13.9711 16.2047L17.7842 12.3917L13.971 8.57861Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </S.CommunityText>
              <img src={ImgQustion} alt="질문&고민" />
            </S.CommunityLink>
            <S.CommunityLink to="/community/board">
              <S.CommunityText>
                <h3>자유게시판</h3>
                <div>
                  바로가기
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                      fill="#373f57"
                    />
                    <path
                      d="M13.971 8.57861L13.2084 9.34121L15.7213 11.854L7.53825 11.8544L7.53826 12.9297L15.7213 12.9293L13.2085 15.4421L13.9711 16.2047L17.7842 12.3917L13.971 8.57861Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </S.CommunityText>
              <img src={ImgBoard} alt="질문&고민" />
            </S.CommunityLink>
          </S.CommunityInner>
        </S.Section>
      </main>
    </>
  );
}
