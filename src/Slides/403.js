import React, { PropTypes } from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import { AnswerLabel, QuestionLabel } from '../Components/Labels';
import ResizableRowsList from '../Components/ResizableRowsList';

const source = require('raw!../../examples/resizable-cells-key-points.js');

const DIM_LINES = [
  [[1,10], [17,29]]
]

const slide = ({ stepIndex }, { list }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={0} maxIndex={2}>
      <div>
        <p>
          <QuestionLabel>Question</QuestionLabel>:
          Can rows and columns be resizable?
        </p>

        <Step index={1}>
          <p>
            <AnswerLabel>Answer</AnswerLabel>:
            Yes!
            Use <a href='https://github.com/mzabriskie/react-draggable/'>react-draggable</a> with react-virtualized for resizable rows.
          </p>
        </Step>

        <Step exactMatch index={2}>
          <ResizableRowsList list={list} />
        </Step>
      </div>
    </Step>

    <Step index={3} maxIndex={4}>
      <Code
        dimLines={DIM_LINES[stepIndex - 3]}
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
