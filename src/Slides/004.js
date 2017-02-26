import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import styled from 'styled-components';

const SectionCheck = styled.i`
  margin-left: 0.5rem;
  color: #C0E0D0 !important;
`

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={1}>
      <h2>
        Browser <Step index={5}><SectionCheck className='fa fa-check' /></Step>
      </h2>
    </Step>

    <Step index={1} maxIndex={4}>
      <ul>
        <Step index={2}><li>Creating lots of DOM elements</li></Step>
        <Step index={3}><li>Repaints / reflows</li></Step>
        <Step index={4}><li>Garbage collection</li></Step>
      </ul>
    </Step>

    <Step index={5}>
      <h2>
        React <Step index={9}><SectionCheck className='fa fa-check' /></Step>
      </h2>
    </Step>
    <Step index={5} maxIndex={8}>
      <ul>
        <Step index={6}><li>Creating lots of Elements</li></Step>
        <Step index={7}><li>Unnecessary renders</li></Step>
        <Step index={8}><li>Accidentally using development build of React 🤡</li></Step>
      </ul>
    </Step>

    <Step index={9}><h2>How can we address these?</h2></Step>
  </ContentSlide>
);

slide.title = 'Sources of slowness in React apps';

export default slide;
