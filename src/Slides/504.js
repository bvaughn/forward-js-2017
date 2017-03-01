import React, { PropTypes } from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import DemoCollection from '../Components/DemoCollection';

const source = require('raw!../../examples/collection.js');

const DIM_LINES = [
  [[0,21]],
  [[10,30]],
  [[0,10], [21,30]]
]

const slide = ({ stepIndex }, { list }) => {
  return (
    <ContentSlide>
      <h1>{slide.title}</h1>

      <Step index={0} maxIndex={1}>
        <div>
          <p>
            For more complex layouts (eg Pinterest layout, Gantt chart) use <code>Collection</code>.
          </p>

          <Step index={1}>
            <DemoCollection list={list} />
          </Step>
        </div>
      </Step>

      <Step index={2} maxIndex={4}>
        <Code
          dimLines={DIM_LINES[stepIndex - 2]}
          value={source}
        />
      </Step>
    </ContentSlide>
  );
}

slide.contextTypes = {
  list: PropTypes.array.isRequired
};

slide.title = 'Collection demo';

export default slide;
