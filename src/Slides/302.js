import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';
import DeferMeasurements from '../Components/DeferMeasurements';
import { AnswerLabel, QuestionLabel } from '../Components/Labels';

const Spacer = styled.div`
  margin-top: 0.5rem;
`

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <Step index={0} maxIndex={1}>
      <p>
        <QuestionLabel>Problem</QuestionLabel>: Measuring wastes cycles, especially if it requires rendering.
      </p>
    </Step>
    <Step index={1} exact>
      <p>
        <AnswerLabel>Solution</AnswerLabel>: Don't measure sizes until content is actually displayed.
      </p>
    </Step>
    <Step index={2}>
      <p>
        <QuestionLabel>Problem</QuestionLabel>: But how can we know the total height if we don't measure?
      </p>
    </Step>
    <Step index={3}>
      <p>
        <AnswerLabel>Solution</AnswerLabel>: Use estimated sizes initially and gradually adjust.
      </p>
    </Step>
    <Spacer />
    <Step index={4}>
      <DeferMeasurements />
    </Step>
  </ContentSlide>
);

slide.title = 'Does it have to measure everything up front?';

export default slide;
