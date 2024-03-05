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
  defaultValue?: string;
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
  defaultValue,
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
      defaultValue={defaultValue}
    />
  );
}

export default Index;
