import React from 'react';
import { BalanceCard } from '../BalanceCard';
import { render, screen } from '@testing-library/react';
import currency from 'currency.js';
import { toFixed } from '../../../../utils/number';

describe('<BalanceCard />', () => {
  const amount = 500;
  const title = 'Testing BalanceCard';

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(
      <BalanceCard amount={amount} title={title}>
      </BalanceCard>);

    expect(firstChild)
      .toMatchSnapshot();
  });

  it('should render a formatted amount', () => {
    render(<BalanceCard amount={amount} title={title}></BalanceCard>);

    const expectedFormatedTest = currency(toFixed(amount, 2), {
      decimal: '.',
      precision: 2
    })
      .format();
    expect(screen.getByText(expectedFormatedTest))
      .toBeInTheDocument();
  });
});
