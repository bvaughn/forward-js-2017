import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <Step index={1}><p>We're here to talk about performance.</p></Step>
    <ul>
      <Step index={2}><li>Huge topic; can't cover it all</li></Step>
      <Step index={3}><li>Focus on things that slow React applications down</li></Step>
      <Step index={4}><li>Talk about ways to fix them</li></Step>
    </ul>
  </ContentSlide>
);

slide.title = 'Why are we here?';

export default slide;
