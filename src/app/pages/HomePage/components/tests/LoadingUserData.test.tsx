import React from 'react';
import { LoadingUserData } from '../LoadingUserData';
import { render } from '@testing-library/react';

describe('<LoadingUserData />', () => {

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<LoadingUserData/>);

    expect(firstChild)
      .toMatchSnapshot();
  });
});
