import React from 'react';
import TitleSlide from '../Presentation/TitleSlide';

const slide = () => (
  <TitleSlide>
    <h1>{slide.title}</h1>
  </TitleSlide>
);

slide.title = 'Function children (aka render callbacks)'

export default slide;
