export interface MovementProps {
  movement: {
    img: { translation: { x: number; y: number } };
    title: { translation: { x: number; y: number } };
  };
}

export interface TiltObjectProps {
  content: {
    index: number;
    imageSrc: string;
    title: string;
    content__author: string;
    content__desc: string;
  };
  options?: MovementProps;
}

export interface TiltObjectState {
  options: MovementProps;
}
