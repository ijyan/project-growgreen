import React from 'react';
import { StyledInput } from './index.Style';

interface IProp {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string | boolean;
  value?: string;
  autoFocus?: boolean;
  required?: boolean;
  onKeyPress?: (e: React.KeyboardEvent) => void;
  defaultValue?: string;
}

function Index({
  label,
  type,
  name,
  placeholder,
  onChange,
  error,
  helperText,
  value,
  autoFocus,
  required,
  onKeyPress,
  defaultValue,
}: IProp) {
  return (
    <StyledInput
      label={label}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      variant="standard"
      onChange={onChange}
      InputLabelProps={{ shrink: true }}
      error={error}
      helperText={helperText}
      autoFocus={autoFocus}
      required={required}
      onKeyPress={onKeyPress}
      defaultValue={defaultValue}
    />
  );
}

export default Index;
