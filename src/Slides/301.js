import React from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import chatImage from '../../public/non-uniform-heights-chat.png';
import dropDownImage from '../../public/non-uniform-heights-drop-down.png';

const sourceRowHeightGetter = require('raw!../../examples/dynamic-row-height-getter.js');
const sourceCellMeasurer = require('raw!../../examples/dynamic-cell-measurer.js');

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

    <Step index={4} maxIndex={6}>
      <div>
        <p>Two basic cases:</p>
        <ul>
          <Step index={5}><li>Size can be inferred from the data (eg drop-down rows &amp; headers)</li></Step>
          <Step index={6}><li>Size must be measured by the browser (eg chat messages)</li></Step>
        </ul>
        <Step index={5} exact>
          <img src={dropDownImage} role='presentation' width={250} />
        </Step>
        <Step index={6} exact>
          <img src={chatImage} role='presentation' />
        </Step>
      </div>
    </Step>

    <Step index={7} maxIndex={10}>
      <div>
        <p>If size can be inferred from the data...</p>

        <Step index={8}>
          <p><strong className='AnswerLabel'>Solution</strong>: Use a function property!</p>
        </Step>

        <Step index={9}>
          <Code
            dimLines={stepIndex === 9 ? [[3,7], [9,12]] : []}
            value={sourceRowHeightGetter}
          />
        </Step>
      </div>
    </Step>

    <Step index={11} maxIndex={14}>
      <div>
        <p>If size must be measured by the browser...</p>

        <Step index={12}>
          <p><strong className='AnswerLabel'>Solution</strong>: Use a HOC (<code>CellMeasurer</code>)</p>
        </Step>

        <Step index={13}>
          <Code
            dimLines={stepIndex === 13 ? [[0,1], [4,4], [6,7], [10,11]] : []}
            value={sourceCellMeasurer}
          />
        </Step>
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'Can it handle items with varying heights?';

export default slide;
