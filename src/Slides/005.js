import React from 'react';
import { Code, ContentSlide, Step } from 'react-presents';
import ScuChart from '../Components/ScuChart';

const source = require('raw!../../examples/shallow-compare.js')

const slide = ({ stepIndex }) => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={1} maxIndex={5}>
      <div>
        <p>React recursively renders elements when state changes*.</p>
        <ScuChart scu='all' />

        <Step index={2}><h2>This is important because:</h2></Step>
        <ul>
          <Step index={3}><li>Slow for big applications</li></Step>
          <Step index={4}><li>Virtual DOM is faster than DOM, but still not free</li></Step>
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

    <Step index={10} maxIndex={14}>
      <div>
        <p>
          <a href='https://facebook.github.io/react/docs/shallow-compare.html'><code>shallowCompare</code></a> util makes this easy.
        </p>
        <ul>
          <Step index={11}><li>Compares current vs next <code>props</code> and <code>state</code></li></Step>
          <Step index={12}><li>Only re-renders if something has changed</li></Step>
        </ul>
        <Step index={13}>
          <Code
            dimLines={
              stepIndex === 14
                ? [[0,0], [2,3], [7,11]]
                : undefined
            }
            value={source}
          />
        </Step>
        <Step index={14}><span /></Step>
      </div>
    </Step>

    <Step index={15}>
      <div>
        <h2>Is that all?</h2>
        <ul>
          <Step index={16}><li><a href='https://facebook.github.io/immutable-js/'>Immutable</a> data speeds up comparisons</li></Step>
          <Step index={17}>
            <li>
              Choose <code>props</code> carefully <Step index={21}><span>(also helps with testing!)</span></Step>

              <ul>
                <Step index={18}><li><i className='fa fa-frown-o' /> <code>users</code>, <code>index</code></li></Step>
                <Step index={19}><li><i className='fa fa-smile-o' /> <code>user</code></li></Step>
                <Step index={20}><li><i className='fa fa-smile-o' /><i className='fa fa-smile-o' /> <code>name</code>, <code>email</code></li></Step>
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
