import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import * as S from './index.Style';

interface IProps {
  links: {
    id: number;
    name: string;
    url: string;
  }[];
  index: number;
}

function Index({ links, index }: IProps) {
  const [activeTab, setActiveTab] = useState<string>(`${links[index].url}`);

  const handleClick = (path: string) => {
    setActiveTab(path);
  };

  return (
    <S.Tab>
      {links.map(item => (
        <Link
          to={item.url}
          className={activeTab === item.url ? 'active' : ''}
          onClick={() => handleClick(item.url)}
          key={item.id}
        >
          {item.name}
        </Link>
      ))}
    </S.Tab>
  );
}

export default Index;
