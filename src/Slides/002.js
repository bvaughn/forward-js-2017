import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <Step index={1}><p>To talk about performance.</p></Step>
    <ul>
      <Step index={2}><li>What slows React applications down?</li></Step>
      <Step index={3}><li>How can we fix?</li></Step>
      <Step index={4}><li>Share some lessons-learned</li></Step>
    </ul>
  </ContentSlide>
);

slide.title = 'Why are we here?';

export default slide;
