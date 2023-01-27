import React, { useEffect } from 'react';
import './MorphWrapper.scss';
import imagesLoaded from 'imagesloaded';
import scrollMonitor from 'scrollmonitor';
import { motion, useAnimationControls } from 'framer-motion';
import { paths, pathTranstion, SHAPES, svgTransition } from './MorphWrapper';

const MorphWrapper = () => {
  const svgControls = useAnimationControls();
  const pathControls = useAnimationControls();

  let currentStep: number;
  let elements: Element[];
  let elementsTotal: number;
  let footer: HTMLDivElement | null;

  const initMorphLoop = (pos = 0) => {
    pathControls.stop();
    pathControls.start({
      fill: SHAPES[pos].fill.color,
      d: [SHAPES[pos].path, SHAPES[pos].pathAlt],
      transition: {
        duration: 1.5,
        easings: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    });
  };

  const initMorph = () => {
    svgControls.stop();
    svgControls.set({
      scaleX: SHAPES[0].scaleX,
      scaleY: SHAPES[0].scaleY,
      rotate: SHAPES[0].rotate + 'deg',
      x: SHAPES[0].X + 'px',
      y: SHAPES[0].Y + 'px',
      transition: {
        duration: 1,
        easings: 'linear',
      },
    });
    initMorphLoop();
  };

  const createScrollWatcher = () => {
    elements.forEach((_, pos) => {
      const scrollElementToWatch = (
        pos ? elements[pos] : footer
      ) as HTMLDivElement;
      const scrollOffset = -300;
      pos = pos ? pos : elementsTotal;
      const watcher = scrollMonitor.create(scrollElementToWatch, scrollOffset);

      watcher.enterViewport(() => {
        currentStep = pos;
        pathControls.start({
          d: SHAPES[pos].path,
          fill: SHAPES[pos].fill.color,
        });
        svgControls.start({
          scaleX: SHAPES[pos].scaleX,
          scaleY: SHAPES[pos].scaleY,
          x: SHAPES[pos].X + 'px',
          y: SHAPES[pos].Y + 'px',
          rotate: SHAPES[pos].rotate + 'deg',
        });
      }, false);
      watcher.exitViewport(() => {
        const index = !watcher.isAboveViewport ? pos - 1 : pos + 1;
        if (index <= elementsTotal && currentStep !== index) {
          currentStep = index;
          pathControls.start({
            d: SHAPES[index].path,
            fill: SHAPES[index].fill.color,
          });
          svgControls.start({
            scaleX: SHAPES[index].scaleX,
            scaleY: SHAPES[index].scaleY,
            x: SHAPES[index].X + 'px',
            y: SHAPES[index].Y + 'px',
            rotate: SHAPES[index].rotate + 'deg',
          });
        }
      }, false);
    });
  };

  useEffect(() => {
    footer = document.querySelector('.content--related');
    elements = Array.from(document.querySelectorAll('.content-wrap'));
    elementsTotal = elements.length;
    imagesLoaded(document.body, () => {
      initMorph();
      createScrollWatcher();
      document.body.classList.remove('loading');
    });
  }, []);

  return (
    <div className="morph-wrap" data-testid="morph-wrap">
      <motion.svg
        className="morph"
        width="1400"
        height="770"
        viewBox="0 0 1400 770"
        animate={svgControls}
        transition={svgTransition}
        onAnimationComplete={() => initMorphLoop(currentStep)}
      >
        <motion.path
          d={paths.defaultPath}
          animate={pathControls}
          transition={pathTranstion}
          onAnimationComplete={() => initMorphLoop(currentStep)}
        />
      </motion.svg>
    </div>
  );
};

export default MorphWrapper;
