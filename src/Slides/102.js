import React from 'react';
import { Code, Step } from 'react-presents';
import styled from 'styled-components';
import ContentSlide from '../Presentation/ContentSlide';
import ScuChart from '../Components/ScuChart';

const Spacer = styled.div`
  margin-top: 0.5rem;
`

const sourceA = require('raw!../../examples/pure-component.js');
const sourceB = require('raw!../../examples/shallow-compare.js');

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={0} exact><ScuChart step={0} /></Step>
    <Step index={1} exact><ScuChart step={1} /></Step>
    <Step index={2} maxIndex={3}><ScuChart step={2} /></Step>
    <Step index={4} exact><ScuChart step={3} /></Step>

    <Step index={3} maxIndex={4}><div><Spacer/> Use <code>shouldComponentUpdate</code></div></Step>

    <Step index={5} maxIndex={8}>
      <div>
        <p>
          React 15.3+ use <a href='https://facebook.github.io/react/docs/react-api.html#react.purecomponent'><code>PureComponent</code></a>
        </p>
        <ul>
          <Step index={6}><li>Compares current <code>props</code> and <code>state</code> to next</li></Step>
          <Step index={7}><li>Only render when changes</li></Step>
        </ul>
        <Step index={8}>
          <Code value={sourceA} />
        </Step>
      </div>
    </Step>

    <Step index={9}>
      <div>
        <p>
          React &lt; 15.3 use <a href='https://facebook.github.io/react/docs/shallow-compare.html'><code>shallowCompare</code></a>
        </p>
        <Step index={10}>
          <Code value={sourceB} />
        </Step>
      </div>
    </Step>

  </ContentSlide>
);

slide.title = 'Avoid unnecessary renders';

export default slide;
