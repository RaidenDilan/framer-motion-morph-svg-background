import React, { MouseEvent } from 'react';
import { cleanup } from '@testing-library/react';
import getMousePos from '../../src/utils/getMousePos';

describe(__filename, () => {
  afterEach(cleanup);

  const event = {
    bubbles: true,
    cancelable: true,
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
  } as MouseEvent;

  it('it should return default mouse cursor position', () => {
    expect(getMousePos(event)).toBeDefined();
    expect(getMousePos(event)).toEqual({ x: 0, y: 0 });
  });

  it('it should return correct mouse cursor position', () => {
    const e = { ...event, pageX: -40, pageY: -40, clientX: -40, clientY: -40 };
    expect(getMousePos(e)).toBeDefined();
    expect(getMousePos(e)).toEqual({ x: -40, y: -40 });
  });
});
