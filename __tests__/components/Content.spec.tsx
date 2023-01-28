import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react';
import Content from '../../src/components/Content';

describe(__filename, () => {
  let wrapper: RenderResult;

  beforeEach(() => {
    wrapper = render(<Content />);
  });

  afterEach(cleanup);

  it('should render without crashing', () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  it('should render with Content as className', () => {
    const content = wrapper.getByTestId('Content');
    expect(content).toHaveClass('content content--fixed');
  });

  it('should render codrops header title', async () => {
    const codropsHeaderTitle = wrapper.getByTestId('codrops-header__title');
    expect(codropsHeaderTitle).toHaveClass('codrops-header__title');
  });

  it('should render pater elements', () => {
    const paterImg = wrapper.getByTestId('pater__img');
    const paterTitle = wrapper.getByTestId('pater__title');
    const paterDesc = wrapper.getByTestId('pater__desc');

    expect(paterImg).toHaveClass('pater__img');
    expect(paterImg).toHaveAttribute('data-testid', 'pater__img');
    expect(paterImg).toHaveAttribute('alt', 'HelloSign API');

    expect(paterTitle).toHaveClass('pater__title');
    expect(paterTitle).toHaveTextContent('2x Faster Integration Time');

    expect(paterDesc).toHaveClass('pater__desc');
    expect(paterDesc).toHaveTextContent(
      'Embed contracts and agreements into your site or app with a few lines of code.',
    );
  });

  it('should render demo elements', async () => {
    const demoOne = wrapper.getByTestId('demo-1');
    const demoTwo = wrapper.getByTestId('demo-2');
    const demoThree = wrapper.getByTestId('demo-3');

    expect(demoOne).toHaveClass('demo');
    expect(demoTwo).toHaveClass('demo');
    expect(demoThree).toHaveClass('demo');
  });

  it('should render deco title', () => {
    const decoTitle = wrapper.getByTestId('deco__title');
    expect(decoTitle).toHaveClass('deco deco--title');
    expect(decoTitle).toHaveTextContent('2017 Westland Exhibition Center');
  });
});
