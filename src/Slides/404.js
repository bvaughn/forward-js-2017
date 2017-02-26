import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import DeferMeasurements from '../Components/DeferMeasurements';
import { AnswerLabel } from '../Components/Labels';

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={1} maxIndex={4}>
      <div>
        <h2>Why would we want to?</h2>

        <ul>
          <Step index={2}>
            <li>Scroll to unread notification in a chat application</li>
          </Step>
          <Step index={3}>
            <li>Jump to a cell in a spreadsheet</li>
          </Step>
          <Step index={4}>
            <li>Keyboard navigation in a drop-down (eg this presentation)</li>
          </Step>
        </ul>
      </div>
    </Step>

    <Step index={5}>
      <div>
        <p>
          <AnswerLabel>Solution</AnswerLabel>: The basic approach:
        </p>

        <ul>
          <Step index={6}>
            <li>
              J.I.T. measure rows before the specified index
              <Step index={7}><ul><li>No need to measure rows that come after</li></ul></Step>
            </li>
          </Step>
          <Step index={8}><li>Keep running total of measured sizes (in cache)</li></Step>
        </ul>
        <Step index={9}>
          <DeferMeasurements />
        </Step>
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'Can we progammatically jump (scroll) to an item?';

export default slide;
