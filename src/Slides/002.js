import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <Step index={1}><p>We're here to talk about performance.</p></Step>
    <ul>
      <Step index={2}><li>Focus on things that slow React applications down</li></Step>
      <Step index={3}><li>Talk about ways to fix them</li></Step>
      <Step index={4}><li>Share some challenges and lessons-learned</li></Step>
    </ul>
  </ContentSlide>
);

slide.title = 'Why are we here?';

export default slide;
