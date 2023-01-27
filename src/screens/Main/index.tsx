import React from 'react';
import './Main.scss';

import { CONTENTS } from './Main';
import Hidden from '../../components/Hidden';
import Content from '../../components/Content';
import TiltObject from '../../components/TiltObject';
import MorphWrapper from '../../components/MorphWrapper';

const Main = () => {
  return (
    <div className="Main">
      <Hidden />
      <MorphWrapper />
      <Content />
      {Array.from(CONTENTS).map((el, i) => (
        <TiltObject key={i} content={{ ...el, index: i }} />
      ))}
    </div>
  );
};

export default Main;
