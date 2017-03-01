import React from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import Note from '../Components/Note';
import ScuChart from '../Components/ScuChart';

const source = require('raw!../../examples/pure-component.js')

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={1} maxIndex={6}>
      <div>
        <p>React re-renders nested elements when state changes*.</p>
        <Step index={1} exact><ScuChart step={0} /></Step>
        <Step index={2} exact><ScuChart step={1} /></Step>
        <Step index={3}><ScuChart step={2} /></Step>

        <Step index={4}><h3>This is important because:</h3></Step>
        <ul>
          <Step index={5}><li>Slow for big applications</li></Step>
          <Step index={6}><li>Rendering is faster than DOM manipulation, but...</li></Step>
        </ul>
      </div>
    </Step>

    <Step index={7} maxIndex={10}>
      <div>
        <p><strong className='AnswerLabel'>Solution</strong>: Use <code>shouldComponentUpdate</code></p>
        <ul>
          <Step index={8}><li>Let React know when it's safe to skip rendering</li></Step>
          <Step index={9}><li>Children are skipped as well</li></Step>
        </ul>
        <Step index={10}><ScuChart step={3} /></Step>
      </div>
    </Step>

    <Step index={11} maxIndex={15}>
      <div>
        <p>
          <a href='https://facebook.github.io/react/docs/react-api.html#react.purecomponent'><code>PureComponent</code></a> makes this easy.
        </p>
        <ul>
          <Step index={12}><li>Compares current vs next <code>props</code> and <code>state</code></li></Step>
          <Step index={13}><li>Only re-renders if something has changed</li></Step>
        </ul>
        <Step index={14}>
          <Code value={source} />
        </Step>
        <Step index={15}>
          <Note>
            For React 15.2 and earlier use <a href='https://facebook.github.io/react/docs/shallow-compare.html'><code>shallowCompare</code></a>.
          </Note>
        </Step>
      </div>
    </Step>

    <Step index={16}>
      <div>
        <h2>Is that all?</h2>
        <ul>
          <Step index={17}>
            <li>
              Choose <code>props</code> carefully (eg <code>UserBadge</code>)

              <ul>
                <Step index={18} exact><li>🙁 <code>users</code> (array), <code>index</code> (number)</li></Step>
                <Step index={19} exact><li>🙂 <code>user</code> (object)</li></Step>
                <Step index={20}><li>😁 <code>name</code> (string), <code>email</code> (string)</li></Step>
                <Step index={21}><li>This can also simplify testing!</li></Step>
              </ul>
            </li>
          </Step>
          <Step index={22}>
            <li>
              Consider <a href='https://facebook.github.io/immutable-js/'>Immutable</a> data for props

              <ul>
                <Step index={23}><li>Slower than native objects but generally not a bottleneck</li></Step>
                <Step index={24}><li>Leads to faster, simpler change detection</li></Step>
              </ul>
            </li>
          </Step>
        </ul>
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'Avoid unnecessary renders';

export default slide;
