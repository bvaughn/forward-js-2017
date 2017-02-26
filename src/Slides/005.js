import React from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import Note from '../Components/Note';
import ScuChart from '../Components/ScuChart';

const source = require('raw!../../examples/pure-component.js')

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={1} maxIndex={5}>
      <div>
        <p>React re-renders nested elements when state changes*.</p>
        <ScuChart scu='all' />

        <Step index={2}><h2>This is important because:</h2></Step>
        <ul>
          <Step index={3}><li>Slow for big applications</li></Step>
          <Step index={4}><li>Rendering is faster than DOM manipulation, but still not free</li></Step>
        </ul>
        <Step index={5}><h2>So how do we handle this?</h2></Step>
      </div>
    </Step>

    <Step index={6} maxIndex={9}>
      <div>
        <p><strong className='AnswerLabel'>Answer</strong>: <code>shouldComponentUpdate</code> can help!</p>
        <ul>
          <Step index={7}><li>Let React know when it's safe to skip rendering</li></Step>
          <Step index={8}><li>Children are skipped as well</li></Step>
        </ul>
        <Step index={9}><ScuChart scu='some' /></Step>
      </div>
    </Step>

    <Step index={10} maxIndex={15}>
      <div>
        <p>
          <a href='https://facebook.github.io/react/docs/react-api.html#react.purecomponent'><code>PureComponent</code></a> makes this easy.
        </p>
        <ul>
          <Step index={11}><li>Compares current vs next <code>props</code> and <code>state</code></li></Step>
          <Step index={12}><li>Only re-renders if something has changed</li></Step>
        </ul>
        <Step index={13}>
          <Code
            dimLines={
              stepIndex === 14
                ? [[0,1], [3,7]]
                : undefined
            }
            value={source}
          />
        </Step>
        <Step index={14}><span /></Step>
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
                <Step index={24}><li>Faster, simpler change detection</li></Step>
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
