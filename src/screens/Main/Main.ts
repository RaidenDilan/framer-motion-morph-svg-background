import img1 from '../../assets/images/1.jpg';
import img4 from '../../assets/images/4.jpg';
import img3 from '../../assets/images/3.jpg';
import img2 from '../../assets/images/2.jpg';
import img5 from '../../assets/images/5.jpg';

export interface Content {
  imageSrc: string;
  title: string;
  content__author: string;
  content__desc: string;
}

export const tiltObjContents: Content[] = [
  {
    imageSrc: img3,
    title: 'found',
    content__author: 'Jane Westhall',
    content__desc: "Lost or found? That's the question today.",
  },
  {
    imageSrc: img4,
    title: 'bunch',
    content__author: 'Nikimo Westlane',
    content__desc: 'The neverending quest, once and forever.',
  },
  {
    imageSrc: img1,
    title: 'revert',
    content__author: 'Gregory Mourisha',
    content__desc: 'Finding the heart when paradise is lost.',
  },
  {
    imageSrc: img2,
    title: 'east',
    content__author: 'Walter Mastricht',
    content__desc: 'The outer bounds of the world, from within.',
  },
  {
    imageSrc: img5,
    title: 'frank',
    content__author: 'Frank Cherry',
    content__desc: "Frank's work and nothing more.",
  },
];
