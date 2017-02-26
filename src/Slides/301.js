import React from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import Note from '../Components/Note';

const source = require('raw!../../examples/row-renderer.js');

const DIM_LINES = [
  undefined,
  [[0,1], [3,4], [6,6], [8,9]],
  [[1,3], [5,9]]
]

const slide = ({ stepIndex }) => (
    <ContentSlide>
      <h1>{slide.title}</h1>
      <p>At its core react-virtualized only requires 2 things:</p>
      <Step index={1}>
        <ul>
          <li>Item count (eg <code>array.length</code>, Immutable <code>collection.size</code>)</li>
          <Step index={2}>
            <li>An item renderer</li>
          </Step>
        </ul>
      </Step>
      <Step index={2}>
        <Code
          dimLines={DIM_LINES[stepIndex - 2]}
          value={source}
        />
      </Step>
      <Step index={3}>
        <Note>You can return any DOM element</Note>
      </Step>
      <Step index={4}>
        <Note>You can modify or override the style</Note>
      </Step>
    </ContentSlide>
);

slide.title = 'The data model';

export default slide;
