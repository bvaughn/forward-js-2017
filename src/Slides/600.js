import React from 'react';
import { TitleSlide } from 'react-presents';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.i`
  font-size: 2rem !important;
  line-height: 2rem !important;
  margin: 0 0.5rem;
  color: #777872;
`;

const Spacer = styled.div`
  width: 3rem;
`;

const slide = () => (
  <TitleSlide>
    <h1>{slide.title}</h1>
    <p>
      slides @ <a href='https://www.github.com/bvaughn/forward-js-2017'>github.com/bvaughn/forward-js-2017</a>
    </p>
    <Container>
      <Icon className='fa fa-github' /> <a href='https://www.github.com/bvaughn'>@bvaughn</a>
      <Spacer />
      <Icon className='fa fa-twitter' /> <a href='https://www.twitter.com/brian_d_vaughn'>@brian_d_vaughn</a>
    </Container>
  </TitleSlide>
);

slide.title = 'Questions?'

export default slide;
