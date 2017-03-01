import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import styled from 'styled-components';

const HeartIcon = styled.i`
  color: #f92672 !important;
`;
const FacebookIcon = styled.i`
  color: #3b5998 !important;
`;
const GithubIcon = styled.i`
  color: #222 !important;
`;

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <ul>
      <Step index={0}>
        <li>
          <FacebookIcon className='fa fa-facebook-square' /> Facebook + React
        </li>
      </Step>
      <Step index={1}>
        <li>
          <GithubIcon className='fa fa-github' /> <a href="https://github.com/bvaughn/">github.com/bvaughn</a>
        </li>
      </Step>
      <Step index={2}>
        <li>
          <HeartIcon className='fa fa-heart' /> performance, search, and app architecture
        </li>
      </Step>
    </ul>
  </ContentSlide>
);

slide.title = 'Who am I?';

export default slide;
