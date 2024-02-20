import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledInput = styled(TextField)`
  & label {
    position: static;
    font-size: 14rem;
  }

  & label[data-shrink='true'] {
    color: var(--gray100);
    font-weight: 500;
  }

  & label + input {
    margin-top: 4rem;
  }

  & input {
    border: 1px solid var(--gray50);
    height: 48rem;
    font-size: 16rem;
    padding: 8rem 12rem;
    border-radius: 6rem;
    margin: 4rem 0 0;
  }

  & input:focus {
    border-color: var(--gray80);
  }
`;
interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  required?: boolean;
}

function Index({
  label,
  type,
  name,
  value,
  onChange,
  autoFocus,
  required,
}: InputFieldProps) {
  return (
    <StyledInput
      label={label}
      type={type}
      name={name}
      variant="standard"
      fullWidth
      InputLabelProps={{ shrink: true }}
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
      required={required}
    />
  );
}

export default Index;

Index.defaultProps = {
  autoFocus: 'some default',
  required: 'some default',
};
