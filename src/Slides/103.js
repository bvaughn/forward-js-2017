import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <ul>
      <Step index={1}>
        <li>
          eg <code>UserBadge</code>

          <ul>
            <Step index={2} exact><li>🙁 <code>users</code> (array), <code>index</code> (number)</li></Step>
            <Step index={3} exact><li>🙂 <code>user</code> (object)</li></Step>
            <Step index={4}><li>😁 <code>name</code> (string), <code>email</code> (string)</li></Step>
            <Step index={5}><li>This can also simplify testing!</li></Step>
          </ul>
        </li>
      </Step>
      <Step index={6}>
        <li>
          Consider <a href='https://facebook.github.io/immutable-js/'>Immutable</a> data for props

          <ul>
            <Step index={7}><li>Mutation creates new instance</li></Step>
            <Step index={8}><li>Slower than native objects but generally not a bottleneck</li></Step>
            <Step index={9}><li>Faster, simpler change detection</li></Step>
          </ul>
        </li>
      </Step>
    </ul>
  </ContentSlide>
);

slide.title = 'Choose props carefully';

export default slide;
