import React, { PropTypes } from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import styled from 'styled-components';
import HowDoesWindowingWork from '../Components/HowDoesWindowingWork';

const HiddenLi = styled.li`
  opacity: 0;
`;

function MaybeLI ({ children, index, stepIndex }) {
  return stepIndex >= index
    ? (
      <li>{children}</li>
    ) : (
      <HiddenLi>{children}</HiddenLi>
    );
}

const title = 'How does windowing work?';

const slide = ({ stepIndex }, { slide }) => {
  slide.setNumSteps(6);

  return (
    <ContentSlide>
      <h1>{title}</h1>

      <ul>
        <MaybeLI index={1} stepIndex={stepIndex}>
          <div>
            DOM element for presenting data (eg <code>&lt;ul&gt;</code>, 180px tall)
          </div>
        </MaybeLI>
        <MaybeLI index={2} stepIndex={stepIndex}>
          <div>
            Set of items (eg 10 items, each 60px tall)
          </div>
        </MaybeLI>
        <MaybeLI index={3} stepIndex={stepIndex}>
          <div>
            Big DOM element for scrolling (eg 600px tall)
          </div>
        </MaybeLI>
        <MaybeLI index={4} stepIndex={stepIndex}>
          <div>
            Absolutely positioned rendered items <Step index={5}><span>(change based on scroll offset)</span></Step>
          </div>
        </MaybeLI>
      </ul>
      <HowDoesWindowingWork index={stepIndex} />
    </ContentSlide>
  );
}

slide.contextTypes = {
  slide: PropTypes.any
};
slide.title = title;

export default slide;
