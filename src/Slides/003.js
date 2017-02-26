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
      <Step index={1}><li>Most people have slow/older devices</li></Step>
      <Step index={2}><li>Slow initial load times lead to abandonment</li></Step>
      <Step index={3}>
        <li>
          <div>
            Bad framerate hurts scrolling experience.
            <Step index={4}><span> (Important for mobile UX!)</span></Step>
          </div>
        </li>
      </Step>
      <Step index={5}><li>Drains battery life (eg mobile, laptops)</li></Step>
    </ul>
  </ContentSlide>
);

slide.title = 'Why does performance matter?';

export default slide;
