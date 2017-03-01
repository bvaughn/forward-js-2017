import React from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';

const sourceNonVirtualized = require('raw!../../examples/perf-comparison-non-virtualized.js');
const sourceVirtualized = require('raw!../../examples/perf-comparison-virtualized.js');

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>
    <Step index={0} exact>
      <div>
        <h2>Rendering a list with React</h2>
        <Code value={sourceNonVirtualized} />
      </div>
    </Step>
    <Step index={1} exact>
      <div>
        <h2>Rendering a list with React</h2>
        <Code
          dimLines={[[0,17], [19,21]]}
          value={sourceNonVirtualized}
        />
      </div>
    </Step>
    <Step index={2} exact>
      <div>
        <h2>Rendering a list with React</h2>
        <Code
          dimLines={[[0,1], [9,21]]}
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
          dimLines={[[0,18], [20,23]]}
          value={sourceVirtualized}
        />
      </div>
    </Step>
    <Step index={5} exact>
      <div>
        <h2>Rendering a list with react-virtualized</h2>
        <Code
          dimLines={[[0,1], [11,23]]}
          value={sourceVirtualized}
        />
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'How complicated is it to use windowing?';

export default slide;
