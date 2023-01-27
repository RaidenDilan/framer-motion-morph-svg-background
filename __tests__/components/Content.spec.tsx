import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Content from '../../src/components/Content';

describe(__filename, () => {
  afterEach(cleanup);

  it('should render without crashing', () => {
    const { asFragment } = render(<Content />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with Content as className', () => {
    const { getByTestId } = render(<Content />);
    const content = getByTestId('Content');
    expect(content).toHaveClass('content content--fixed');
  });

  it('should render child elements', () => {
    const { getByTestId } = render(<Content />);
    const codropsHeaderTitle = getByTestId('codrops-header__title');
    expect(codropsHeaderTitle).toHaveClass('codrops-header__title');

    const demoOne = getByTestId('demo-1');
    expect(demoOne).toHaveClass('demo');

    const demoTwo = getByTestId('demo-2');
    expect(demoTwo).toHaveClass('demo');

    const demoThree = getByTestId('demo-3');
    expect(demoThree).toHaveClass('demo');

    const paterImg = getByTestId('pater__img');
    expect(paterImg).toHaveClass('pater__img');
    expect(paterImg).toHaveAttribute('data-testid', 'pater__img');
    expect(paterImg).toHaveAttribute('alt', 'HelloSign API');

    const paterTitle = getByTestId('pater__title');
    expect(paterTitle).toHaveClass('pater__title');
    expect(paterTitle).toHaveTextContent('2x Faster Integration Time');

    const paterDesc = getByTestId('pater__desc');
    expect(paterDesc).toHaveClass('pater__desc');
    expect(paterDesc).toHaveTextContent(
      'Embed contracts and agreements into your site or app with a few lines of code.',
    );

    const decoTitle = getByTestId('deco__title');
    expect(decoTitle).toHaveClass('deco deco--title');
    expect(decoTitle).toHaveTextContent('2017 Westland Exhibition Center');
  });
});
