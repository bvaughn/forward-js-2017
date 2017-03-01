import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <ul>
      <Step index={1}><li>Smaller and faster</li></Step>
      <Step index={2}><li>Instructions on <a href='https://facebook.github.io/react/docs/installation.html#development-and-production-versions'>React installation page</a></li></Step>
    </ul>
  </ContentSlide>
);

slide.title = 'Use the production build of React';

export default slide;
