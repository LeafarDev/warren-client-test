import React from 'react';
import Header from '../index';
import { fireEvent, render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import store from '../../../../__mocks__/store';
import * as authActionCreators from '../../../../core/actionCreators/authActionCreators';
import * as actions from '../../../../core/actionTypes/authActionsTypes';

jest.mock('react-redux');

describe('<Header />', () => {

  let dispatch;
  beforeEach(() => {
    dispatch = jest.spyOn(redux, 'useDispatch')
      .mockImplementation(jest.fn());
    dispatch.mockReturnValue(jest.fn());
    jest.spyOn(redux, 'useSelector')
      .mockImplementation((cb) => cb(store));
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<Header/>);
    expect(firstChild)
      .toMatchSnapshot();
  });

  it('Logout button should dispatch the logout action', async () => {
    render(<Header/>);
    const logoutButton = await screen.getAllByRole('button', {
      name: /logout/i
    });

    jest
      .spyOn(authActionCreators, 'logout')
      .mockImplementation((): actions.LogoutAction => {
        return {
          type: actions.LOGOUT
        };
      });

    fireEvent.click(logoutButton[0]);
    expect(authActionCreators.logout)
      .toHaveBeenCalledTimes(1);
  });
});
