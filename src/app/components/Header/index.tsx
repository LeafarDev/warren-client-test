import * as React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { CustomToolbar, HeaderDiv, LogoutButton } from './styles';
import { useDispatch } from 'react-redux';
import { logout } from '../../../core/actionCreators/authActionCreators';

export function Header(): JSX.Element {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderDiv>
      <AppBar>
        <CustomToolbar>
          <Typography variant={'h6'} color="inherit" style={{ flex: 1 }}>
            Bank of Mars
          </Typography>
          <div>
            <LogoutButton name={'logout'} variant="contained" onClick={() => onLogout()}>
              Logout
            </LogoutButton>
          </div>
        </CustomToolbar>
      </AppBar>
    </HeaderDiv>
  );
}

export default Header;
