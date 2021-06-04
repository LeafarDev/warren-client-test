import React from 'react';
import { WelcomeText } from '../WelcomeText';
import { render, screen } from '@testing-library/react';
import { IUser } from '../../../../../core/reducers/userReducer';

describe('<WelcomeText />', () => {
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

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<WelcomeText user={user}/>);

    expect(firstChild)
      .toMatchSnapshot();
  });

  it('should render the welcome message', () => {

    render(<WelcomeText user={user}/>);

    expect(screen.getByText('Welcome Charles Marciano ! Account: 12345678'))
      .toBeInTheDocument();
  });
});
