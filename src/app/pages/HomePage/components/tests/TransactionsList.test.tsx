import React from 'react';
import { TransactionsList } from '../TransactionsList';
import { render, screen } from '@testing-library/react';
import { ITransaction } from '../../../../../core/reducers/transactionsReducer';

describe('<TransactionsList />', () => {
  const transactions: ITransaction[] = [
    {
      'id': '848c14cb-79b4-491c-945b-e27c35f8eb30',
      'sourceAccountNumber': '12345678',
      'targetAccountNumber': '65932871',
      'amount': 0.99,
      'type': 'payment',
      'createdAt': '2021-06-02T21:42:02.119Z',
      'updatedAt': null
    },
    {
      'id': '34344fbf-37f3-408e-a290-e65d87f678f2',
      'sourceAccountNumber': '12345678',
      'targetAccountNumber': null,
      'amount': 1000,
      'type': 'withdraw',
      'createdAt': '2021-06-02T21:41:31.196Z',
      'updatedAt': null
    }];

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<TransactionsList transactions={transactions}/>);

    expect(firstChild)
      .toMatchSnapshot();
  });

  it('should render the transactions list', () => {

    render(<TransactionsList transactions={transactions}/>);

    expect(screen.getByText('payment'))
      .toBeInTheDocument();
    expect(screen.getByText('withdraw'))
      .toBeInTheDocument();
  });
});
