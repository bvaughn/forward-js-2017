import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import styled from 'styled-components';
import DeferMeasurements from '../Components/DeferMeasurements';

const Spacer = styled.div`
  margin-top: 0.5rem;
`

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <ul>
      <Step index={1}><li>Yes, especially if it requires rendering.</li></Step>
      <Step index={2}><li>How can we know the scrollable size if we don't measure?</li></Step>
    </ul>
    <Spacer />
    <Step index={3}>
      <DeferMeasurements />
    </Step>
  </ContentSlide>
);

slide.title = 'Isn\'t measuring expensive?';

export default slide;
