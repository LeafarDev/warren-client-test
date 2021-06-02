import React from 'react';
import DataTable from 'react-data-table-component';
import currency from 'currency.js';
import { format, parseISO } from 'date-fns';
import { ITransaction } from '../../../../core/reducers/transactionsReducer';
import { toFixed } from '../../../utils/number';

interface Props {
  transactions: ITransaction[],
}

export const TransactionsList: React.FC<Props> = props => {
  const columns = [
    {
      name: 'Transaction',
      selector: 'type',
      sortable: true
    },
    {
      name: 'Amount',
      selector: (row: any) => currency(toFixed(row.amount, 2), {
        decimal: '.',
        precision: 2
      })
        .format(),
      sortable: true
    }, {
      name: 'Source Account',
      selector: 'sourceAccountNumber'
    }, {
      name: 'Destination Account',
      selector: 'targetAccountNumber'
    },
    {
      name: 'Date',
      selector: (row: any) => format(parseISO(row.createdAt), 'MM-dd-yyyy H:mm:ss'),
      defaultSortAsc: false,
      defaultSortField: true,
      sortable: true,
      right: true
    }
  ];

  const {
    transactions
  } = props;

  return (<DataTable
    title="Transactions"
    columns={columns}
    data={transactions}
  />);
};
