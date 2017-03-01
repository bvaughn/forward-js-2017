import React, { PropTypes } from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import { AnswerLabel, QuestionLabel } from '../Components/Labels';
import Note from '../Components/Note';
import Spreadsheet from '../Components/Spreadsheet';

const sourceGrids = require('raw!../../examples/multi-grid.js');
const sourceRenderer = require('raw!../../examples/multi-grid-renderers.js');

const GRID_DIM_LINES = [
  undefined,
  [[0,5], [8,14]]
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

      <Step index={0} maxIndex={1}>
        <div>
          <p>
            Create sticky rows or columns (eg spreadsheet) with <code>MultiGrid</code>.
          </p>

          <Step index={1}>
            <div>
              <Spreadsheet list={list} />

              <Note>Scroll around; click to edit a cell above.</Note>
            </div>
          </Step>
        </div>
      </Step>

      <Step index={2} maxIndex={3}>
        <Code
          dimLines={GRID_DIM_LINES[stepIndex - 2]}
          value={sourceGrids}
        />
      </Step>

      <Step index={4} maxIndex={6}>
        <Code
          dimLines={RENDERER_DIM_LINES[stepIndex - 4]}
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
