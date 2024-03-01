// import { styled } from 'styled-components';

import { styled } from '@mui/material/styles';
import { FormControl, FormHelperText, Select } from '@mui/material';

export const MuiFormControl = styled(FormControl)`
  width: 100%;
`;

export const MuiSelect = styled(Select)`
  & > div {
  }

  & svg {
    width: 24rem;
    height: 24rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;
