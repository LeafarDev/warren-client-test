import React from 'react';
import Index from '..';
import { render, waitFor } from '@testing-library/react';
import * as redux from 'react-redux';
import store from '../../../../__mocks__/store';
import * as userActionCreators from '../../../../core/actionCreators/userActionCreators';
import * as userActionTypes from '../../../../core/actionTypes/userActionTypes';
import * as userTotalInboundYieldActionCreators
  from '../../../../core/actionCreators/userTotalInboundYieldActionCreators';
import * as userTotalInboundYieldActionTypes
  from '../../../../core/actionTypes/userTotalInboundYieldActionTypes';
import * as transactionsActionCreators
  from '../../../../core/actionCreators/transactionsActionCreators';
import * as transactionsActionTypes from '../../../../core/actionTypes/transactionsActionTypes';

jest.mock('react-redux');

describe('<Index />', () => {
  let dispatch;
  beforeEach(() => {
    dispatch = jest.spyOn(redux, 'useDispatch')
      .mockImplementation(jest.fn());
    dispatch.mockReturnValue(jest.fn());
    jest.spyOn(redux, 'useSelector')
      .mockImplementation((cb) => cb(store));

    jest
      .spyOn(userActionCreators, 'getUser')
      .mockImplementation((): userActionTypes.GetUserAction => {
        return {
          type: userActionTypes.GET_USER
        };
      });

    jest
      .spyOn(userTotalInboundYieldActionCreators, 'getUserTotalInboundYield')
      .mockImplementation((): userTotalInboundYieldActionTypes.GetUserTotalInboundYieldTypesAction => {
        return {
          type: userTotalInboundYieldActionTypes.GET_USER_TOTAL_INBOUND_YIELD
        };
      });

    jest
      .spyOn(transactionsActionCreators, 'getTransactions')
      .mockImplementation((): transactionsActionTypes.GetTransactionsAction => {
        return {
          type: transactionsActionTypes.GET_TRANSACTIONS
        };
      });
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<Index/>);

    expect(firstChild)
      .toMatchSnapshot();
  });

  it('should load user information', async () => {
    render(<Index/>);

    await waitFor(() => {
      expect(userTotalInboundYieldActionCreators.getUserTotalInboundYield)
        .toHaveBeenCalledTimes(1);
      expect(userActionCreators.getUser)
        .toHaveBeenCalledTimes(1);

      expect(transactionsActionCreators.getTransactions)
        .toHaveBeenCalledTimes(1);
    });

  });

});
