import React, { ReactNode } from 'react';
// import { StyledSelect } from './index.Style';
import * as S from './index.Style';

interface IProp {
  // id: string;
  label?: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  onChange?: (event: React.ChangeEvent<{ value: string }>) => void;
}

function Index({
  // id,
  label,
  error,
  helperText,
  placeholder,
  multiline,
  rows,
  onChange,
}: IProp) {
  return (
    <S.MuiTextField
      label={label}
      multiline={multiline}
      rows={rows}
      error={error}
      helperText={helperText}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Index;
