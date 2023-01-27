import { cleanup } from '@testing-library/react';
import extend from '../../src/utils/extend';

const MOCK_OPTIONS = {
  movement: {
    img: {
      translation: {
        x: -40,
        y: -40,
      },
    },
    title: {
      translation: {
        x: 25,
        y: 25,
      },
    },
  },
};

describe(__filename, () => {
  afterEach(cleanup);

  it('it should extend an object', () => {
    const opt = MOCK_OPTIONS;
    expect(extend({}, opt)).toEqual(MOCK_OPTIONS);
    expect(extend(opt, {})).toEqual(MOCK_OPTIONS);
    expect(
      extend(opt, {
        movement: {
          link: {
            translation: {
              x: 60,
              y: 60,
            },
          },
        },
      }),
    ).toEqual(MOCK_OPTIONS);
    expect(
      extend(
        {
          movement: {
            link: {
              translation: {
                x: 60,
                y: 60,
              },
            },
          },
        },
        opt,
      ),
    ).toEqual(MOCK_OPTIONS);
  });
});
