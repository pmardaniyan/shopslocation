import React from 'react';

import { Switch, Typography } from '@mui/material';

import { useCustomSelector, useCustomDispatch } from 'hooks/redux';

import { setThemeMode } from 'redux/slices/settings';

import { AppbarStyled, AppbarContainerStyled } from './HomeStyles';

const Home: React.FC = () => {
  const {
    settings: { themeMode }
  } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  const handleChangeTheme = (): void => {
    dispatch(setThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      <AppbarStyled>
        <AppbarContainerStyled>
          <Typography variant="h6">پروژه فروشگاه</Typography>
          <Switch onChange={handleChangeTheme} />
        </AppbarContainerStyled>
      </AppbarStyled>
    </div>
  );
};

export default Home;
