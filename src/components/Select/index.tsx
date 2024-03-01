import React, { ReactNode } from 'react';
import {
  FormHelperText,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import * as S from './index.Style';

interface IProp {
  id: string;
  label?: string;
  option: Array<IOption>;
  defaultValue?: string;
  displayEmpty: boolean;
  onChange?: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
  error?: boolean;
  helperText?: string | undefined;
  value?: string;
}

interface IOption {
  id: number;
  value: string;
  name: string;
}

function Index({
  id,
  label,
  option,
  defaultValue,
  error,
  onChange,
  displayEmpty,
  helperText,
  value,
}: IProp) {
  return (
    <S.MuiFormControl error={error}>
      <InputLabel id={id}>{label}</InputLabel>
      <S.MuiSelect
        id={id}
        onChange={onChange}
        displayEmpty={displayEmpty}
        defaultValue={defaultValue}
        value={value}
      >
        {option.map(item => (
          <MenuItem key={item.id} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </S.MuiSelect>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </S.MuiFormControl>
  );
}

export default Index;
