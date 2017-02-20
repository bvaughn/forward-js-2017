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
const GoogleIcon = styled.i`
  color: #F44336 !important;
`;
const TreasureDataIcon = styled.i`
  color: #ee2f4d !important;
`;

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <ul>
      <Step index={1}>
        <li>
          Front-end software engineer
        </li>
      </Step>
      <Step index={2}>
        <li>
          I've worked some cool places:
          <ul>
            <li><FacebookIcon className='fa fa-facebook-square' /> Facebook</li>
            <li><GoogleIcon className='fa fa-google' /> Google</li>
            <li><TreasureDataIcon className='fa fa-diamond' /> Treasure Data</li>
            <li>Rosetta Stone</li>
          </ul>
        </li>
      </Step>
      <Step index={3}>
        <li>
          I <HeartIcon className='fa fa-heart' /> open source (<a href="https://github.com/bvaughn/">github.com/bvaughn</a>)
        </li>
      </Step>
      <Step index={4}>
        <li>
          Passionate about performance, search, and app architecture
        </li>
      </Step>
    </ul>
  </ContentSlide>
);

slide.title = 'Who am I?';

export default slide;
