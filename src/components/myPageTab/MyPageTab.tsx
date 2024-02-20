import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './MyPageTab.Style';
import { MYPAGE_LIST } from '../../constants/MyPageMenu';

function MyPageTab({ index }: { index: number }) {
  const [activeTab, setActiveTab] = useState<string>(
    `${MYPAGE_LIST[index].url}`,
  );
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    setActiveTab(path);
    navigate(path);
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

export default MyPageTab;
