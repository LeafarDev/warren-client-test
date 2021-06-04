import React from 'react';
import { TransactionModal } from '../TransactionModal';
import { render, screen, waitFor } from '@testing-library/react';
import { IUser } from '../../../../../../core/reducers/userReducer';
import * as redux from 'react-redux';
import store from '../../../../../../__mocks__/store';

jest.mock('react-redux');

describe('<TransactionModal />', () => {
  const user: IUser = {
    'id': '1aafa847-b0b4-42c9-929f-61cc75b975a5',
    'name': 'Charles Marciano',
    'email': 'charles.marciano45@gmail.com',
    'accountId': '1539c5cc-8978-41c2-9339-1e34778f5b7d',
    'createdAt': '2021-06-02T01:42:01.987Z',
    'updatedAt': null,
    'account': {
      'id': '1539c5cc-8978-41c2-9339-1e34778f5b7d',
      'accountNumber': '12345678',
      'balance': 0.0056,
      'createdAt': '2021-06-02T01:42:01.766Z',
      'updatedAt': '2021-06-02T21:42:02.128Z'
    }
  };

  const onClose = jest.fn();
  const onTransactionCreated = jest.fn();

  beforeEach(() => {
    jest.spyOn(redux, 'useDispatch')
      .mockImplementation(jest.fn());
    jest.spyOn(redux, 'useSelector')
      .mockImplementation((cb) => cb(store));
  });

  it('should render and match the snapshot', async () => {
    const {
      container: { firstChild }
    } = render(<TransactionModal user={user} isOpen onClose={onClose}
                                 onTransactionCreated={onTransactionCreated}/>);
    await waitFor(() => {
      expect(firstChild)
        .toMatchSnapshot();
    });
  });

  it('should render the right transaction type', async () => {
    const newStore = store;
    newStore.transactions.currentCreatingTransactionType = 'payment';

    jest.spyOn(redux, 'useSelector')
      .mockImplementation((cb) => cb(newStore));

    render(<TransactionModal user={user} isOpen onClose={onClose}
                             onTransactionCreated={onTransactionCreated}/>);

    await waitFor(() => {
      expect(screen.getByTestId('targetAccountNumber'))
        .toBeInTheDocument();
      expect(screen.getByText('New payment'))
        .toBeInTheDocument();
    });
  });

  it('should hide the destination account field when its not a payment transaction', async () => {
    const newStore = store;
    newStore.transactions.currentCreatingTransactionType = 'deposit';

    jest.spyOn(redux, 'useSelector')
      .mockImplementation((cb) => cb(newStore));

    render(<TransactionModal user={user} isOpen={true} onClose={onClose}
                             onTransactionCreated={onTransactionCreated}/>);

    await waitFor(() => {
      let inputTargetAccountNumber;
      try {
        inputTargetAccountNumber = screen.getByTestId('targetAccountNumber');
      } catch (ex) {
        inputTargetAccountNumber = null;
      }
      expect(inputTargetAccountNumber)
        .toBeNull();
      expect(screen.getByText('New deposit'))
        .toBeInTheDocument();
    });
  });

});
