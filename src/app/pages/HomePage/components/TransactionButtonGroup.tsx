import { Grid } from '@material-ui/core';
import { ButtonTransaction, ButtonTransactionList, GridButtonTransaction } from '../styles';
import React from 'react';

interface Props {
  openTransactionModal(transactionType: string): void;
}

export const TransactionButtonGroup: React.FC<Props> = props => {
  const {
    openTransactionModal
  } = props;

  return (
    <Grid item xs={12} sm={12} md={6}>
      <ButtonTransactionList container direction={'row'} alignItems={'flex-end'}>
        <GridButtonTransaction container item xs={12} sm={4} md={4} lg={3}>
          <ButtonTransaction variant="contained" onClick={() => openTransactionModal('deposit')}>
            New Deposit
          </ButtonTransaction>
        </GridButtonTransaction>
        <GridButtonTransaction item xs={12} sm={4} md={4} lg={3}>
          <ButtonTransaction variant="contained" onClick={() => openTransactionModal('withdraw')}>
            New Withdraw
          </ButtonTransaction>
        </GridButtonTransaction>
        <GridButtonTransaction item xs={12} sm={4} md={4} lg={3}>
          <ButtonTransaction variant="contained" onClick={() => openTransactionModal('payment')}>
            New Payment
          </ButtonTransaction>
        </GridButtonTransaction>
      </ButtonTransactionList>
    </Grid>
  );
};


