import { MouseEvent } from 'react';

const getMousePos = (e: MouseEvent): { x: number; y: number } => {
  let posx = 0;
  let posy = 0;

  if (!e) e = window.event as unknown as MouseEvent;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    posy =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return { x: posx, y: posy };
};

export default getMousePos;
