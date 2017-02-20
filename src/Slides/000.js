import React from 'react';
import TitleSlide from '../Presentation/TitleSlide';
import styled from 'styled-components';

const Container = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Spacer = styled.span`
  width: 3rem;
`;

const Icon = styled.i`
  font-size: 2rem !important;
  line-height: 2rem !important;
  margin: 0 0.5rem;
  color: #ccc;
`;

const slide = () => (
  <TitleSlide>
    <h1>{slide.title}</h1>
    <h2>
      <a href='https://www.github.com/bvaughn/forward-js-2017'>github.com/bvaughn/forward-js-2017</a>
    </h2>
    <Container>
      <Icon className='fa fa-github' /> <a href='https://www.github.com/bvaughn'>@bvaughn</a>
      <Spacer />
      <Icon className='fa fa-twitter' /> <a href='https://www.twitter.com/brian_d_vaughn'>@brian_d_vaughn</a>
    </Container>
  </TitleSlide>
);

slide.title = 'Creating more efficient React views with windowing'

export default slide;
