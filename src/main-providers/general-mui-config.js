import React from 'react';
import { create } from 'jss';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import jssPreset from '@mui/styles/jssPreset';
import StylesProvider from '@mui/styles/StylesProvider';
import jssPluginExtend from 'jss-plugin-extend';
import jssPluginExpand from 'jss-plugin-expand';
import { createTheme } from '@mui/material/styles';

const jss = create({
  plugins: [
    ...jssPreset().plugins.slice(0, 5),
    jssPluginExtend(),
    jssPluginExpand(),
    // we might need to add `vendor-prefixer` and `sort` plugins after expand
  ],
});

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(', '),
  },
  palette: {
    primary: {
      main: '#1a4367',
      light: '#244466',
    },
    background: {
      default: '#0a1929',
      paper: '#1b1538'
    },
    text: {
      primary: '#cbcbd1',
      secondary: '#8c8ebe',
    },
    green: {
      main: '#14343E',
      light: '#39C095'
    },
    blue: {
      card: '#001e3c',
      border: '#103153',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        form: {
          display: 'contents',
        },
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
        },
        '#root': {
          height: '100%',
        },
      },
    },
  },
});

export const GeneralMuiConfig = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  </StyledEngineProvider>
);






