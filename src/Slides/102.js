import React from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import Note from '../Components/Note';
import ScuChart from '../Components/ScuChart';

const source = require('raw!../../examples/pure-component.js')

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={1} maxIndex={3}>
      <div>
        <p>React re-renders nested elements when state changes*.</p>
        <Step index={1} exact><ScuChart step={0} /></Step>
        <Step index={2} exact><ScuChart step={1} /></Step>
        <Step index={3}><ScuChart step={2} /></Step>
      </div>
    </Step>

    <Step index={4} maxIndex={7}>
      <div>
        <p><strong className='AnswerLabel'>Solution</strong>: Use <code>shouldComponentUpdate</code></p>
        <ul>
          <Step index={5}><li>Let React know when it's safe to skip rendering</li></Step>
          <Step index={6}><li>Children are skipped as well</li></Step>
        </ul>
        <Step index={7}><ScuChart step={3} /></Step>
      </div>
    </Step>

    <Step index={8} maxIndex={12}>
      <div>
        <p>
          <a href='https://facebook.github.io/react/docs/react-api.html#react.purecomponent'><code>PureComponent</code></a> makes this easy.
        </p>
        <ul>
          <Step index={9}><li>Compares current vs next <code>props</code> and <code>state</code></li></Step>
          <Step index={10}><li>Only re-renders if something has changed</li></Step>
        </ul>
        <Step index={11}>
          <Code value={source} />
        </Step>
        <Step index={12}>
          <Note>
            For React 15.2 and earlier use <a href='https://facebook.github.io/react/docs/shallow-compare.html'><code>shallowCompare</code></a>.
          </Note>
        </Step>
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'Avoid unnecessary renders';

export default slide;
