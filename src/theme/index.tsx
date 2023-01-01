import React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

import { useCustomSelector } from 'hooks/redux';

interface Props {
  children: React.ReactNode;
}

const MuiThemeProvider: React.FC<Props> = ({ children }) => {
  const { themeMode } = useCustomSelector((state) => state.settings);
  const FONT_PRIMARY = 'Lalezar';
  const isLight = themeMode === 'light';

  const theme = createTheme({
    palette: {
      primary: {
        light: '#5BE584',
        main: '#00AB55',
        dark: '#007B55'
      },
      secondary: {
        light: '#84A9FF',
        main: '#3366FF',
        dark: '#1939B7'
      },
      info: {
        light: '#74CAFF',
        main: '#1890FF',
        dark: '#0C53B7'
      },
      success: {
        light: '#AAF27F',
        main: '#54D62C',
        dark: '#229A16'
      },
      warning: {
        light: '#FFE16A',
        main: '#FFC107',
        dark: '#B78103'
      },
      error: {
        light: '#FFA48D',
        main: '#FF4842',
        dark: '#B72136'
      },

      mode: isLight ? 'light' : 'dark'
    },
    typography: {
      fontFamily: FONT_PRIMARY,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 700
    }
  });

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MuiThemeProvider;
