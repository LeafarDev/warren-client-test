import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const BalanceGrid = styled(Grid)`
  && {
    margin-bottom: 10px;
  }
`;
export const WelcomeGrid = styled(Grid)`
  && {
    margin: 10px 0px;
  }
`;
export const ButtonTransactionList = styled(Grid)`
  justify-content: flex-end;
`;
export const GridButtonTransaction = styled(Grid)`
  align-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonTransaction = styled(Button)`
  && {
    color: white;
    background-color: #e61b5d;
    width: 90%;
    @media (max-width: 768px) {
      width: 100%;
      margin: 1px;
    }
  }
`;

