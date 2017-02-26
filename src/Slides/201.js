import React from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';

const sourceA = require('raw!../../examples/function-children-example-1.js');
const sourceB = require('raw!../../examples/function-children-example-2.js');
const sourceC = require('raw!../../examples/function-children-example-3.js');

const DIM_LINES = [
  undefined,
  [[0,1], [4,10], [13,14]],
  [[0,3], [6,8], [11,14]],
  [[0,5], [9,14]]
]

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <p>Very powerful pattern!</p>

    <Step index={1} maxIndex={3}>
      <ul>
        <li>Allows you to mix-and-match components</li>
        <Step index={2}>
          <li>Which enables more modular (maintainable) code</li>
        </Step>
        <Step index={3}>
          <li>An alternative to <code>context</code> (React docs: "use sparingly")</li>
        </Step>
      </ul>
    </Step>

    <Step index={4} exact>
      <Code value={sourceA} />
    </Step>

    <Step index={5} exact>
      <Code value={sourceB} />
    </Step>

    <Step index={6} maxIndex={9}>
      <Code
        dimLines={DIM_LINES[stepIndex - 6]}
        value={sourceC}
      />
    </Step>
  </ContentSlide>
);

slide.title = 'Function children (aka render callbacks)';

export default slide;
