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
      <Step index={1}><li>Yes! but...</li></Step>
    </ul>
    <Spacer />
    <Step index={2}>
      <DeferMeasurements />
    </Step>
  </ContentSlide>
);

slide.title = 'Is measuring expensive?';

export default slide;
