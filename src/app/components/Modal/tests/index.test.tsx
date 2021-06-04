import React from 'react';
import { Modal } from '../index';
import { render } from '@testing-library/react';

describe('<Modal />', () => {
  const onClose = jest.fn();
  const maxWidth = 'md';
  const isOpen = true;
  const showDividers = false;
  const title = 'Testing Modal';
  const children = <><h1>Test</h1></>;
  const actionElements = <>
    <button>Action 1</button>
    <button>Actions 2</button>
  </>;

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(
      <Modal onClose={onClose}
             maxWidth={maxWidth}
             open={isOpen}
             showDividers={showDividers}
             title={title}
             actionElements={actionElements}>
        {children}
      </Modal>);

    expect(firstChild)
      .toMatchSnapshot();
  });
});
