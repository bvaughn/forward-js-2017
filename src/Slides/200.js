import React from 'react';
import { TitleSlide } from 'react-presents';

const slide = () => (
  <TitleSlide>
    <h1>{slide.title} <i className='fa fa-github' /></h1>
    <h2><a href='https://github.com/bvaughn/react-virtualized'>github.com/bvaughn/react-virtualized</a></h2>
  </TitleSlide>
);

slide.title = 'react-virtualized'

export default slide;
