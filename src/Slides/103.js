import React from 'react';
import { Step } from 'react-presents';
import styled from 'styled-components';
import ContentSlide from '../Presentation/ContentSlide';

const Badge = styled.span`
  padding: 6px 8px;
  background-color: #4285f4;
  color: #fff;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
  border-radius: 4px;
`

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <ul>
      <Step index={1}>
        <div>
          <p>
            User badge:&nbsp;
            <Badge>Brian Vaughn <small>(brian.david.vaughn@gmail.com)</small></Badge>
          </p>

          <ul>
            <Step index={2} exact><li>🙁 <code>users</code> (array), <code>index</code> (number)</li></Step>
            <Step index={3} exact><li>🙂 <code>user</code> (object)</li></Step>
            <Step index={4}><li>😁 <code>name</code> (string), <code>email</code> (string)</li></Step>
            <Step index={5}><li>Simplifies testing!</li></Step>
          </ul>
        </div>
      </Step>
      <Step index={6}>
        <li>
          <a href='https://facebook.github.io/immutable-js/'>Immutable</a> data

          <ul>
            <Step index={7}><li>Mutation creates new instance</li></Step>
            <Step index={8}><li>Faster change detection</li></Step>
          </ul>
        </li>
      </Step>
    </ul>
  </ContentSlide>
);

slide.title = 'Choose props carefully';

export default slide;
