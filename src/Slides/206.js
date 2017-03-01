import React from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';

const sourcePlain = require('raw!../../examples/perf-comparison-plain.js');
const sourceNonVirtualized = require('raw!../../examples/perf-comparison-non-virtualized.js');
const sourceVirtualized = require('raw!../../examples/perf-comparison-virtualized.js');

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <Step index={0} exact>
      <div>
        <h2>Rendering a list with React</h2>
        <Code value={sourcePlain} />
      </div>
    </Step>
    <Step index={1} exact>
      <div>
        <h2>Rendering a list with React</h2>
        <Code
          dimLines={[[0,9], [15,17]]}
          value={sourcePlain}
        />
      </div>
    </Step>
    <Step index={2} exact>
      <div>
        <h2>Rendering a list with React</h2>
        <Code
          dimLines={[[0,1], [9,17], [19,21]]}
          value={sourceNonVirtualized}
        />
      </div>
    </Step>
    <Step index={3} exact>
      <div>
        <h2>Rendering a list with react-virtualized</h2>
        <Code value={sourceVirtualized} />
      </div>
    </Step>
    <Step index={4} exact>
      <div>
        <h2>Rendering a list with react-virtualized</h2>
        <Code
          dimLines={[[0,1], [11,14], [22,23]]}
          value={sourceVirtualized}
        />
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'How complicated is it to use windowing?';

export default slide;
