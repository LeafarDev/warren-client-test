import React from 'react';
import { WelcomeGrid } from '../styles';
import { Typography } from '@material-ui/core';
import { IUser } from '../../../../core/reducers/userReducer';

interface Props {
  user: IUser,
}

export const WelcomeText: React.FC<Props> = props => {
  const {
    user
  } = props;

  return (<WelcomeGrid item xs={12}>
    <Typography
      variant="h5"> {`Welcome ${user.name} ! Account: ${user.account.accountNumber}`} </Typography>
  </WelcomeGrid>);
};
