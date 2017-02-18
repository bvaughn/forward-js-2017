import React from 'react';
import { TitleSlide } from 'react-presents';

const slide = () => (
  <TitleSlide>
    <h1>{slide.title}</h1>
  </TitleSlide>
);

slide.title = 'Bonus slide: Common integration mistakes';

export default slide;
