import React from 'react';
import TitleSlide from '../Presentation/TitleSlide';

const slide = () => (
  <TitleSlide>
    <h1>{slide.title}</h1>
  </TitleSlide>
);

slide.title = 'What about too many DOM elements, GC, etc?'

export default slide;
