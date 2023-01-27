import React from 'react';
import { render } from '@testing-library/react';
import MorphWrapper from '../../src/components/MorphWrapper';

describe(__filename, () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<MorphWrapper />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with MorphWrapper as className', () => {
    const { getByTestId } = render(<MorphWrapper />);
    const morphWrapper = getByTestId('morph-wrap');
    expect(morphWrapper).toHaveClass('morph-wrap');
  });
});
