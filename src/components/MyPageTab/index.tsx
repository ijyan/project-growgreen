import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './index.Style';
import { MYPAGE_LIST } from '../../constants/MyPageMenu';

function Index({ index }: { index: number }) {
  const [activeTab, setActiveTab] = useState<string>(
    `${MYPAGE_LIST[index].url}`,
  );

  const handleClick = (path: string) => {
    setActiveTab(path);
  };

  return (
    <S.Tab>
      {MYPAGE_LIST.map(item => (
        <Link
          to={item.url}
          className={activeTab === item.url ? 'active' : ''}
          onClick={() => handleClick(item.url)}
          key={item.id}
        >
          <img src={item.svg} alt="아이콘" />
          {item.title}
        </Link>
      ))}
    </S.Tab>
  );
}

export default Index;
