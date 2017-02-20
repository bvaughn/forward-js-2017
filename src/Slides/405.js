import React, { PropTypes } from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import { AnswerLabel, QuestionLabel } from '../Components/Labels';
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

      <Step index={0} maxIndex={2}>
        <div>
          <p><QuestionLabel>Question</QuestionLabel>: What if your data is more...random? (eg Pinterest layout, Gantt chart)</p>

          <Step index={1}>
            <p>
              <AnswerLabel>Answer</AnswerLabel>: Use <code>Collection</code>.
            </p>
          </Step>

          <Step index={2}>
            <DemoCollection list={list} />
          </Step>
        </div>
      </Step>

      <Step index={3} maxIndex={5}>
        <Code
          dimLines={DIM_LINES[stepIndex - 3]}
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
