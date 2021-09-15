import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import './confilctsMUI-Semantic.css';

export const componentsOverrides = {
  MuiIconButton: {
    styleOverrides: {
      root: {
        ':disabled': {
          color: '#8b8a8ad1',
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      input: {
        '&:-webkit-autofill': {
          transitionDelay: '9999s',
          transitionProperty: 'background-color, color',
        },
      },
    },
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2185d0',
    },
    secondary: {
      // Nav color
      main: '#6f6f6fbf',
    },
  },
  components: componentsOverrides,
});

export default function ThemeProviderWhitTheme({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
