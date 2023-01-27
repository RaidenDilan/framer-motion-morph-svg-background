import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import TiltObject from '../../src/components/TiltObject';
import { act } from 'react-test-renderer';
import { CONTENTS } from '../../src/screens/Main/Main';

describe(__filename, () => {
  afterEach(cleanup);

  it('should have variables defined', () => {
    const { getByTestId } = render(
      <TiltObject content={{ ...CONTENTS[0], index: 1 }} />,
    );
    expect(getByTestId('content__title')).toBeDefined();
    expect(getByTestId('content__img')).toHaveAttribute(
      'src',
      CONTENTS[0].imageSrc,
    );
    expect(getByTestId('content__author')).toBeDefined();
    expect(getByTestId('content__desc')).toBeDefined();
    expect(getByTestId('content__link')).toBeDefined();
    expect(getByTestId('content__link')).toBeInTheDocument();
    expect(getByTestId('content__link')).toHaveTextContent('Discover');
  });

  it('should change on mouseover', () => {
    const { getByTestId, queryAllByText } = render(
      <TiltObject content={{ ...CONTENTS[0], index: 1 }} />,
    );
    fireEvent.mouseOver(getByTestId('content--layout'));
    fireEvent.mouseLeave(getByTestId('content--layout'));
  });

  it.skip('it should fire mouseEnter/mouseOver/mouseLeave events', async () => {
    const { container, getByTestId } = render(
      <TiltObject content={{ ...CONTENTS[0], index: 1 }} />,
    );
    const img = getByTestId('content__img');
    const style = getComputedStyle(img);

    const mouse = [
      { clientX: 20, clientY: 40 },
      { clientX: 10, clientY: 20 },
    ];

    await act(() => {
      fireEvent.mouseOver(container, mouse[0]);
      fireEvent.mouseMove(container, mouse[1]);
      fireEvent.mouseOut(container);
      expect(style).toBeDefined();
      // expect(style.transform).toBe('translate3d(0, 100px, 0');
    });
  });
});
