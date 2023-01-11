import { Transition } from 'framer-motion';

export interface Shape {
  path: string;
  pathAlt: string;
  scaleX: number;
  scaleY: number;
  rotate: number;
  X: number;
  Y: number;
  fill: {
    color: string;
    duration: number;
    easing: string;
  };
  animation: {
    path: {
      duration: number;
      easing: string;
      elasticity?: number;
    };
    svg: {
      duration: number;
      easing: string;
      elasticity?: number;
    };
  };
}

export enum Paths {
  defaultPath = 'defaultPath',
  altPath = 'altPath',
  pathOne = 'pathOne',
  PathOneAlt = 'PathOneAlt',
  PathTwo = 'PathTwo',
  PathTwoAlt = 'PathTwoAlt',
}

export const paths: Record<Paths, string> = {
  [Paths.defaultPath]:
    'M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
  [Paths.altPath]:
    'M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
  [Paths.pathOne]:
    'M 415.6,206.3 C 407.4,286.6 438.1,373.6 496.2,454.8 554.3,536.1 497,597.2 579.7,685.7 662.4,774.1 834.3,731.7 898.5,653.4 962.3,575 967.1,486 937.7,370 909.3,253.9 937.7,201.5 833.4,105.4 729.3,9.338 602.2,13.73 530.6,41.91 459,70.08 423.9,126.1 415.6,206.3 Z',
  [Paths.PathOneAlt]:
    'M 415.6,206.3 C 407.4,286.6 415.5,381.7 473.6,462.9 531.7,544.2 482.5,637.6 579.7,685.7 676.9,733.8 826.2,710.7 890.4,632.4 954.2,554 926.8,487.6 937.7,370 948.6,252.4 937.7,201.5 833.4,105.4 729.3,9.338 602.2,13.73 530.6,41.91 459,70.08 423.9,126.1 415.6,206.3 Z',
  [Paths.PathTwo]:
    'M 383.8,163.4 C 335.8,352.3 591.6,317.1 608.7,420.8 625.8,524.5 580.5,626 647.3,688 714,750 837.1,760.5 940.9,661.5 1044,562.3 1041,455.8 975.8,393.6 909.8,331.5 854.2,365.4 784.4,328.1 714.6,290.8 771.9,245.2 733.1,132.4 694.2,19.52 431.9,-25.48 383.8,163.4 Z',
  [Paths.PathTwoAlt]:
    'M 383.8,163.4 C 345.5,324.9 591.6,317.1 608.7,420.8 625.8,524.5 595.1,597 647.3,688 699.5,779 837.1,760.5 940.9,661.5 1044,562.3 1068,444.4 975.8,393.6 884,342.8 854.2,365.4 784.4,328.1 714.6,290.8 820.3,237.2 733.1,132.4 645.9,27.62 422.1,1.919 383.8,163.4 Z',
};

export const SHAPES: Shape[] = [
  {
    path: paths.defaultPath,
    pathAlt: paths.altPath,
    scaleX: 1.3,
    scaleY: 1.8,
    rotate: 70,
    X: 0,
    Y: -100,
    fill: {
      color: 'var(--svg-path-fill-dark-purple)',
      duration: 0.5,
      easing: 'linear',
    },
    animation: {
      path: {
        duration: 1,
        easing: 'easeInOutQuad',
      },
      svg: {
        duration: 1,
        easing: 'easeInOutQuad',
      },
    },
  },
  {
    path: paths.pathOne,
    pathAlt: paths.PathOneAlt,
    scaleX: 1.9,
    scaleY: 1,
    rotate: 0,
    X: 0,
    Y: 100,
    fill: {
      color: 'var(--svg-path-fill-orange)',
      duration: 0.5,
      easing: 'linear',
    },
    animation: {
      path: {
        duration: 1,
        easing: 'easeInOutQuad',
      },
      svg: {
        duration: 1,
        easing: 'easeInOutQuad',
      },
    },
  },
  {
    path: paths.PathTwo,
    pathAlt: paths.PathTwoAlt,
    scaleX: 1.9,
    scaleY: 1.1,
    rotate: 40,
    X: -100,
    Y: 200,
    fill: {
      color: 'var(--svg-path-fill-light-beige)',
      duration: 0.5,
      easing: 'linear',
    },
    animation: {
      path: {
        duration: 1,
        easing: 'easeInOutQuad',
      },
      svg: {
        duration: 1,
        easing: 'easeInOutQuad',
      },
    },
  },
  {
    path: paths.defaultPath,
    pathAlt: paths.altPath,
    scaleX: 1.5,
    scaleY: 2,
    rotate: -20,
    X: 0,
    Y: -50,
    fill: {
      color: 'var(--svg-path-fill-sky-blue)',
      duration: 0.5,
      easing: 'linear',
    },
    animation: {
      path: {
        duration: 1,
        easing: 'easeInOutQuad',
      },
      svg: {
        duration: 1,
        easing: 'easeInOutQuad',
      },
    },
  },
  {
    path: paths.defaultPath,
    pathAlt: paths.altPath,
    scaleX: 1.3,
    scaleY: 1,
    rotate: -70,
    X: 0,
    Y: 150,
    fill: {
      color: 'var(--svg-path-fill-teal)',
      duration: 0.5,
      easing: 'linear',
    },
    animation: {
      path: {
        duration: 1,
        easing: 'easeInOutQuad',
      },
      svg: {
        duration: 1,
        easing: 'easeInOutQuad',
      },
    },
  },
  {
    path: paths.pathOne,
    pathAlt: paths.PathOneAlt,
    scaleX: 2,
    scaleY: 1,
    rotate: 0,
    X: 0,
    Y: 100,
    fill: {
      color: 'var(--svg-path-fill-light-purple)',
      duration: 0.5,
      easing: 'linear',
    },
    animation: {
      path: {
        duration: 2,
        easing: 'easeOutElastic',
        elasticity: 400,
      },
      svg: {
        duration: 2,
        easing: 'easeOutQuad',
      },
    },
  },
];

export const svgTransition: Transition = {
  duration: 1,
  easings: 'linear',
};

export const pathTranstion: Transition = {
  duration: 1,
  easing: 'easeInOutQuad',
  elasticity: 400,
};
