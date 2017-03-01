import React from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';

const sourceA = require('raw!../../examples/function-children-example-2.js');
const sourceB = require('raw!../../examples/function-children-example-1.js');
const sourceC = require('raw!../../examples/function-children-example-3.js');
const sourceD = require('raw!../../examples/function-child.js');

const DIM_LINES = [
  undefined,
  [[0,1], [4,10], [13,14]],
  [[0,3], [6,8], [11,14]],
  [[0,5], [9,14]]
]

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={1} exact>
      <Code value={sourceD} />
    </Step>

    <Step index={2} exact>
      <p>Let's say our app is localized...</p>
    </Step>

    <Step index={3} exact>
      <Code value={sourceA} />
    </Step>

    <Step index={4} exact>
      <p>Let's say we have a session...</p>
    </Step>

    <Step index={5} exact>
      <Code value={sourceB} />
    </Step>

    <Step index={6} exact>
      <p>Now we can compose them...</p>
    </Step>

    <Step index={7} maxIndex={10}>
      <Code
        dimLines={DIM_LINES[stepIndex - 7]}
        value={sourceC}
      />
    </Step>
  </ContentSlide>
);

slide.title = 'Render callbacks (aka function children)';

export default slide;
