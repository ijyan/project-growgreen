import React from 'react';
import { StyledInput } from './Input.Style';

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
}

function Input({
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
    />
  );
}

export default Input;
