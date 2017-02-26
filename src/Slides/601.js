import React from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import warningImage from '../../public/v9-dev-mode-style-warning.png';

const source = require('raw!../../examples/forgotten-styles.js')

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <Step index={0} maxIndex={1}>
      <p>Most common mistake: forgot to set the <code>style</code>.</p>
    </Step>
    <Step index={1} exact>
      <Code
        highlightLines={[[3,3], [12,15]]}
        value={source}
      />
    </Step>
    <Step index={2}>
      <div>
        <p>Version 9 now logs dev warning for this!</p>
        <p>
          <img
            role="presentation"
            src={warningImage}
          />
        </p>
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'Styles';

export default slide;
