import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { WelcomeGrid } from './styles';
import { AppState } from '../../../core/reducers/rootReducer';
import {
  currentCreatingTransaction,
  getTransactions,
  saveTransactionSuccess
} from '../../../core/actionCreators/transactionsActionCreators';
import { getUser } from '../../../core/actionCreators/userActionCreators';
import { getUserTotalInboundYield } from '../../../core/actionCreators/userTotalInboundYieldActionCreators';
import { BalanceCard } from './components/BalanceCard';
import { TransactionButtonGroup } from './components/TransactionButtonGroup';
import { TransactionModal } from './components/TransactionModal/TransactionModal';
import { TransactionsList } from './components/TransactionsList';
import { LoadingUserData } from './components/LoadingUserData';

function HomePage(): JSX.Element {

  const dispatch = useDispatch();
  const transactions = useSelector((state: AppState) => state.transactions.transactions);
  const userTotalInboundYield = useSelector((state: AppState) => state.userTotalInboundYield.userTotalInboundYield);
  const user = useSelector((state: AppState) => state.user.user);
  const [transactionModalOpen, setTransactionModalOpen] = React.useState(false);

  const openTransactionModal = (transactionType: 'withdraw' | 'deposit' | 'payment') => {
    dispatch(currentCreatingTransaction(transactionType));
    setTransactionModalOpen(true);
  };

  const closeTransactionModal = () => {
    setTransactionModalOpen(false);
  };

  const onTransactionCreated = () => {
    closeTransactionModal();
    dispatch(saveTransactionSuccess(null));
    getAccountValues();
  };

  const getAccountValues = () => {
    dispatch(getUser());
    dispatch(getTransactions());
    dispatch(getUserTotalInboundYield());
  };

  useEffect(() => {
    getAccountValues();
  }, []);

  return (
    <div>
      {!user.account.accountNumber && (
        <LoadingUserData></LoadingUserData>
      )}

      {user.account.accountNumber && (
        <Grid container direction={'row'} alignItems={'center'}>
          <WelcomeGrid item xs={12}>
            <Typography
              variant="h5"> {`Welcome ${user.name} ! Account: ${user.account.accountNumber}`} </Typography>
          </WelcomeGrid>
          <BalanceCard amount={user.account.balance} title={'Balance'}/>
          <BalanceCard amount={userTotalInboundYield.total} title={'Total Inbound Yields'}/>
          <TransactionButtonGroup openTransactionModal={openTransactionModal}/>
          <TransactionModal onTransactionCreated={onTransactionCreated}
                            onClose={closeTransactionModal}
                            isOpen={transactionModalOpen}
                            user={user}/>
          <TransactionsList transactions={transactions}/>
        </Grid>
      )}
    </div>
  );
}

export default HomePage;

