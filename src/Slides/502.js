import React from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import { AnswerLabel } from '../Components/Labels';

const sourceA = require('raw!../../examples/pass-through-props.js');
const sourceB = require('raw!../../examples/force-update.js');

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={0} maxIndex={6}>
      <div>
        <ul>
          <Step index={1}><li>All components extend <a href='https://facebook.github.io/react/docs/react-api.html#react.purecomponent'><code>PureComponent</code></a></li></Step>
          <Step index={2}><li>No components have access to the underlying array/collection</li></Step>
        </ul>
        <Step index={3}>
          <div>
            <h2>This means...</h2>
            <ul>
              <Step index={4}><li>Sorting a list will not auto-update RV components</li></Step>
              <Step index={5}><li>Changing an item within a list will not auto-update RV components</li></Step>
              <Step index={6}><li>State changes that change item sizes will not auto-update RV components</li></Step>
            </ul>
          </div>
        </Step>
      </div>
    </Step>

    <Step index={7} maxIndex={11}>
      <div>
        <p>
          <AnswerLabel>Solution</AnswerLabel>:
          Let react-virtualized know that something external has changed:
        </p>

        <Step index={8} maxIndex={9}>
          <div>
            <p>The simplest way is with pass-through properties:</p>
            <Code
              dimLines={stepIndex === 8 ? [[0,0], [2,5], [7,9]] : undefined}
              value={sourceA}
            />
          </div>
        </Step>

        <Step index={10} maxIndex={11}>
          <div>
            <p>But you can also use Api methods (eg <code>forceUpdate</code>)</p>
            <Code
              dimLines={stepIndex === 10 ? [[0,0], [6,10], [12,15]] : undefined}
              value={sourceB}
            />
          </div>
        </Step>
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'Pure components';

export default slide;
