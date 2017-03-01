import React from 'react';
import styled from 'styled-components';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';

const sourceA = require('raw!../../examples/function-children-example-2.js');
const sourceB = require('raw!../../examples/function-children-example-1.js');
const sourceC = require('raw!../../examples/function-children-example-3.js');
const sourceD = require('raw!../../examples/element-child.js');
const sourceE = require('raw!../../examples/function-child.js');

const DIM_LINES = [
  undefined,
  [[0,1], [4,10], [13,14]],
  [[0,3], [6,8], [11,14]],
  [[0,5], [9,14]]
]

const Spacer = styled.div`
  margin-top: 0.5rem;
`

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={1} maxIndex={3}>
      <div>
        <h3>Element child</h3>
        <Code value={sourceD} />
        <Step index={2}>
          <div>
            <Spacer />
            <h3>Function child</h3>
            <Code value={sourceE} />
          </div>
        </Step>
        <Step index={3}>
          <p>
            <Spacer />
            ...but why?
          </p>
        </Step>
      </div>
    </Step>

    <Step index={4} exact>
      <p>Let's say our app is localized...</p>
    </Step>

    <Step index={5} exact>
      <Code value={sourceA} />
    </Step>

    <Step index={6} exact>
      <p>Let's say we have a session...</p>
    </Step>

    <Step index={7} exact>
      <Code value={sourceB} />
    </Step>

    <Step index={8} exact>
      <p>Now we can compose them...</p>
    </Step>

    <Step index={9} maxIndex={12}>
      <Code
        dimLines={DIM_LINES[stepIndex - 9]}
        value={sourceC}
      />
    </Step>
  </ContentSlide>
);

slide.title = 'Render callbacks (aka function children)';

export default slide;
