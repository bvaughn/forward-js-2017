import React, { PropTypes } from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import ResizableRowsList from '../Components/ResizableRowsList';

const source = require('raw!../../examples/resizable-cells-key-points.js');

const DIM_LINES = [
  [[1,10], [17,29]]
]

const slide = ({ stepIndex }, { list }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={0} maxIndex={1}>
      <div>
        <p>
          Use <a href='https://github.com/mzabriskie/react-draggable/'>react-draggable</a> with react-virtualized for resizable rows.
        </p>

        <Step exactMatch index={1}>
          <ResizableRowsList list={list} />
        </Step>
      </div>
    </Step>

    <Step index={2} maxIndex={3}>
      <Code
        dimLines={DIM_LINES[stepIndex - 2]}
        value={source}
      />
    </Step>
  </ContentSlide>
);

slide.contextTypes = {
  list: PropTypes.array.isRequired
};

slide.title = 'Resizable rows';

export default slide;
