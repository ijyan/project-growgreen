import React from 'react';
import * as S from './Index.Style';

interface IProp {
  title: string;
  desc: string;
}

function Index({ title, desc }: IProp) {
  return (
    <S.Result>
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clipRule="evenodd"
        />
      </svg>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </S.Result>
  );
}

export default Index;
