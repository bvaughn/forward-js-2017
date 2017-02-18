import React from 'react';
import { Code, ContentSlide, Step } from 'react-presents';

const source = require('raw!../../examples/forgotten-styles.js')

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <p>Most common mistake: forgot to set the <code>style</code>.</p>
    <Step index={1}>
      <Code
        highlightLines={[[3,3], [12,15]]}
        value={source}
      />
    </Step>
  </ContentSlide>
);

slide.title = 'Styles';

export default slide;
