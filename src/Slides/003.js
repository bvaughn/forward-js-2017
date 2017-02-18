import React from 'react';
import { ContentSlide, Step } from 'react-presents';
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
      <Step index={1}><li>Most people have older hardware</li></Step>
      <Step index={2}><li>Performance impacts framerate</li></Step>
      <Step index={3}><li>Smooth scrolling is an important factor in mobile UX</li></Step>
      <Step index={4}><li>Battery life (eg mobile, laptops)</li></Step>
      <Step index={5}><li>Abandonment rate</li></Step>
    </ul>
  </ContentSlide>
);

slide.title = 'Why does performance matter?';

export default slide;
