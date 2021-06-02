import { Button, Toolbar } from '@material-ui/core';
import styled from 'styled-components';

export const CustomToolbar = styled(Toolbar)`
  && {
    background-color: #6a88ff;
  }
`;

export const HeaderDiv = styled.div`
  && {
    min-height: 64px;
  }
`;

export const LogoutButton = styled(Button)`
  && {
    background-color: #e61b5d;
    color: white;
  }
`;
