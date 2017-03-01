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
          <Step index={2}><li>Calculating total size becomes more difficult</li></Step>
          <Step index={3}><li>Measuring all items hurts performance</li></Step>
        </ul>
      </div>
    </Step>

    <Step index={4} maxIndex={5}>
      <div>
        <p>First case: Size can be inferred from data</p>
        <Step index={5}>
          <img src={dropDownImage} role='presentation' width={250} />
        </Step>
      </div>
    </Step>

    <Step index={6} maxIndex={7}>
      <Code
        dimLines={stepIndex === 6 ? [] : [[3,7], [9,12]]}
        value={sourceRowHeightGetter}
      />
    </Step>

    <Step index={8} maxIndex={9}>
      <div>
        <p>Second case: Must be measured by browser</p>
        <Step index={9}>
          <img src={chatImage} role='presentation' />
        </Step>
      </div>
    </Step>

    <Step index={10} maxIndex={13}>
      <Code
        dimLines={CELL_MEASURER_LINES[stepIndex - 10]}
        value={sourceCellMeasurer}
      />
    </Step>
  </ContentSlide>
);

slide.title = 'Can we window items with varying heights?';

export default slide;
