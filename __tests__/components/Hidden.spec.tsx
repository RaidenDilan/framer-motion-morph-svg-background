import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Hidden from '../../src/components/Hidden';

describe(__filename, () => {
  afterEach(cleanup);

  it('should render without crashing', () => {
    const { asFragment } = render(<Hidden />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with Hidden as className', () => {
    const { getByTestId } = render(<Hidden />);
    const hidden = getByTestId('Hidden');
    expect(hidden).toHaveClass('Hidden');
  });
});
