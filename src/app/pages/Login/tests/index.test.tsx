import React from 'react';
import Login from '..';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as authActionCreators from '../../../../core/actionCreators/authActionCreators';
import * as actions from '../../../../core/actionTypes/authActionsTypes';
import * as redux from 'react-redux';
import store from '../../../../__mocks__/store';

jest.mock('react-redux');

describe('<Login />', () => {

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<Login/>);

    expect(firstChild)
      .toMatchSnapshot();
  });

  let dispatch;
  beforeEach(() => {
    dispatch = jest.spyOn(redux, 'useDispatch')
      .mockImplementation(jest.fn());
    dispatch.mockReturnValue(jest.fn());
    jest.spyOn(redux, 'useSelector')
      .mockImplementation((cb) => cb(store));
    jest
      .spyOn(authActionCreators, 'login')
      .mockImplementation((): actions.LoginAction => {
        return {
          type: actions.LOGIN,
          email: 'charles45@hotmail.com',
          password: '12345678'
        };
      });
  });

  it('should validation message when email or password is empty', async () => {
    render(<Login/>);
    await waitFor(() => {
      const loginButton = screen.getAllByRole('button');
      fireEvent.click(loginButton[0]);

      expect(screen.getByText('Enter valid email.'))
        .toBeInTheDocument();
      expect(screen.getByText('Enter valid email.'))
        .toBeInTheDocument();
      expect(authActionCreators.login)
        .toHaveBeenCalledTimes(0);
    });
  });

  it('Button SIGN IN should dispatch the login action', async () => {
    render(<Login/>);

    await waitFor(() => {
      const loginButton = screen.getAllByRole('button');
      const inputEmail = screen.getByTestId('email');
      const inputPassword = screen.getByTestId('password');

      fireEvent.change(inputEmail, { target: { value: 'charles45@hotmail.com' } });
      fireEvent.change(inputPassword, { target: { value: '12345678' } });
      fireEvent.click(loginButton[0]);

      expect(authActionCreators.login)
        .toHaveBeenCalledTimes(1);
    });

  });
});
