import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import image from '../../public/computer-guy.png';

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <Step index={0} exact>
      <img
        height={144}
        role='presentation'
        src={image}
        width='auto'
      />
    </Step>
    <ul>
      <Step index={1}><li>Older hardware</li></Step>
      <Step index={2}><li>Load times</li></Step>
      <Step index={3}><li>Scrolling UX for mobile</li></Step>
      <Step index={4}><li>Battery life</li></Step>
    </ul>
  </ContentSlide>
);

slide.title = 'Why does performance matter?';

export default slide;
