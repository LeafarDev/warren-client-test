import React from 'react';
import { TransactionButtonGroup } from '../TransactionButtonGroup';
import { render } from '@testing-library/react';

describe('<TransactionButtonGroup />', () => {
  const openTransactionModal = jest.fn();

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<TransactionButtonGroup openTransactionModal={openTransactionModal}/>);

    expect(firstChild)
      .toMatchSnapshot();
  });
});
