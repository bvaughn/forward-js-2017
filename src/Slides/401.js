import React from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import chatImage from '../../public/non-uniform-heights-chat.png';
import dropDownImage from '../../public/non-uniform-heights-drop-down.png';

const sourceRowHeightGetter = require('raw!../../examples/dynamic-row-height-getter.js');
const sourceCellMeasurer = require('raw!../../examples/dynamic-cell-measurer.js');

const CELL_MEASURER_LINES = [
  [],
  [[0,1], [3,10], [12,27]],
  [[0,3], [11,11], [13,21], [23,27]],
  [[1,4], [6,19], [22,27]]
]

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={1} maxIndex={3}>
      <div>
        <p>This introduces a couple of challenges:</p>
        <ul>
          <Step index={2}><li>Total size calculation</li></Step>
          <Step index={3}><li>Performance</li></Step>
        </ul>
      </div>
    </Step>

    <Step index={4} exact>
      <div>
        <p>eg Size can be inferred from data</p>
        <img src={dropDownImage} role='presentation' width={250} />
      </div>
    </Step>

    <Step index={5} maxIndex={6}>
      <Code
        dimLines={stepIndex === 5 ? [] : [[3,7], [9,12]]}
        value={sourceRowHeightGetter}
      />
    </Step>

    <Step index={7} exact>
      <div>
        <p>eg Must be measured by browser</p>
        <img src={chatImage} role='presentation' />
      </div>
    </Step>

    <Step index={8} maxIndex={11}>
      <Code
        dimLines={CELL_MEASURER_LINES[stepIndex - 8]}
        value={sourceCellMeasurer}
      />
    </Step>
  </ContentSlide>
);

slide.title = 'What about variable sized content?';

export default slide;
