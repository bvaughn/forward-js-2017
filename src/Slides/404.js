import React, { PropTypes } from 'react';
import { Code, ContentSlide, Step } from 'react-presents';
import { AnswerLabel, QuestionLabel } from '../Components/Labels';
import Note from '../Components/Note';
import Spreadsheet from '../Components/Spreadsheet';

const sourceGrids = require('raw!../../examples/scroll-sync-grid.js');
const sourceRenderer = require('raw!../../examples/scroll-sync-renderers.js');

const GRID_DIM_LINES = [
  undefined,
  [[0,1], [4,22], [24,26], [29,30]],
  [[0,1], [4,9], [11,16], [18,26], [29,30]]
];

const RENDERER_DIM_LINES = [
  undefined,
  [[0,1], [4,6], [8,8], [10,11]],
  [[0,3], [7,7], [9,11]]
];

const slide = ({ stepIndex }, { list }) => {
  return (
    <ContentSlide>
      <h1>{slide.title}</h1>

      <Step index={0} maxIndex={2}>
        <div>
          <p>
            <QuestionLabel>Question</QuestionLabel>: Is it possible to create sticky rows or columns? (eg spreadsheet)
          </p>

          <Step index={1}>
            <p>
              <AnswerLabel>Answer</AnswerLabel>: Yes! Use <code>ScrollSync</code>.
            </p>
          </Step>

          <Step index={2}>
            <div>
              <Spreadsheet list={list} />

              <Note>Scroll around; click to edit a cell above.</Note>
            </div>
          </Step>
        </div>
      </Step>

      <Step index={3} maxIndex={5}>
        <Code
          dimLines={GRID_DIM_LINES[stepIndex - 3]}
          value={sourceGrids}
        />
      </Step>

      <Step index={6} maxIndex={8}>
        <Code
          dimLines={RENDERER_DIM_LINES[stepIndex - 6]}
          value={sourceRenderer}
        />
      </Step>
    </ContentSlide>
  );
}

slide.contextTypes = {
  list: PropTypes.array.isRequired
};

slide.title = 'Sticky rows & columns';

export default slide;
