import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Apple SD Gothic Neo"',
      '"Pretendard Variable"',
      'Pretendard',
      'Roboto',
      '"Noto Sans KR"',
      '"Segoe UI"',
      '"Malgun Gothic"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          fontSize: '6.25%',
        },
        body: {
          fontSize: '16rem',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important',
          lineHeight: '1.5',
          wordBreak: 'keep-all',
          wordWrap: 'break-word',
          overflowX: 'hidden',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
          fontFamily: 'inherit',
          display: 'inline-block',
        },
        button: {
          background: 'inherit',
          border: 'none',
          boxShadow: 'none',
          borderRadius: 0,
          padding: 0,
          overflow: 'visible',
          cursor: 'pointer',
          fontFamily: 'inherit',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: '8rem',
          boxShadow:
            'rgba(20, 20, 20, 0.12) 4px 12px 24px 0, rgba(20, 20, 20, 0.08) 0 1px 4px 0',
          background: 'none',
          color: 'inherit',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '& +.MuiInputBase-root': {
            marginTop: 0,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transform: 'none',
          fontSize: '14rem',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          width: '100%',
          flex: 1,
          boxSizing: 'border-box',
          '::after': {
            display: 'none',
          },
          '::before': {
            display: 'none',
          },
          '&.Mui-error input': {
            borderColor: '#ef4444',
          },
        },
        input: {
          boxSizing: 'border-box',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          color: '#373f57',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '12rem',
          '&.Mui-error': {
            color: '#ef4444',
            marginTop: '8rem',
          },
          '&.Mui-error:before': {
            // content:
            //   '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4 flex-shrink-0 text-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"></path></svg>',
            display: 'block',
            width: '16rem',
            height: '16rem',
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          cursor: 'pointer',
        },
      },
    },
  },
});

export const color = {
  black: '#000',
  white: '#fff',
  blue10: '#f7fafe',
  blue20: '#eff5ff',
  blue30: '#deebff',
  blue40: '#bcd1fc',
  blue50: '#94b5fc',
  blue60: '#6d9cfa',
  blue70: '#5189fa',
  blue80: '#4876ef',
  blue90: '#2d65f2',
  blue100: '#3157dd',
  blue110: '#1632a6',
  blue120: '#15276f',
  gray10: '#f8fafc',
  gray20: '#f4f6fa',
  gray30: '#eaedf4',
  gray40: '#d7dce5',
  gray50: '#b4c0d3',
  gray60: '#96a0b5',
  gray70: '#8491a7',
  gray80: '#67738e',
  gray90: '#5c667b',
  gray100: '#475067',
  gray110: '#373f57',
  gray120: '#292e41',
  gray130: '#171926',
  green10: '#f3fffd',
  green20: '#ebfffc',
  green30: '#defaf6',
  green40: '#aff4e5',
  green50: '#7beed8',
  green60: '#4fe5c7',
  green70: '#00deb3',
  green80: '#00d3ab',
  green90: '#11be9a',
  green100: '#17a187',
  green110: '#2a7c6d',
  green120: '#286258',
  coral10: '#fffafa',
  coral20: '#fff5f7',
  coral30: '#fce6e6',
  coral40: '#fec5c5',
  coral50: '#fea4a3',
  coral60: '#ff837e',
  coral70: '#ff7a72',
  coral80: '#ff6d6a',
  coral90: '#ff5656',
  coral100: '#eb413f',
  coral110: '#d63131',
  coral120: '#b81d1d',
};

export const common = {
  container: `
    max-width: 1440rem;
    margin: 0 auto;
    padding: 0 16rem;
    color: var(--gray110);

    @media screen and (min-width: 768px) {
      padding: 80rem 48rem;
    }
  `,
  ellipsis: `
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  `,
  blind: `
    overflow: hidden;
    clip: rect(1px,1px,1px,1px);
    position: absolute !important;
    width: 1px;
    height: 1px;
  `,
};
