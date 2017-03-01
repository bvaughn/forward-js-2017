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
            Small DOM element (eg <code>&lt;ul&gt;</code>)
          </div>
        </MaybeLI>
        <MaybeLI index={2} stepIndex={stepIndex}>
          <div>
            Items
          </div>
        </MaybeLI>
        <MaybeLI index={3} stepIndex={stepIndex}>
          <div>
            Big DOM element for scrolling
          </div>
        </MaybeLI>
        <MaybeLI index={4} stepIndex={stepIndex}>
          <div>
            Absolutely positioned visible rows
          </div>
        </MaybeLI>
      </ul>
      <Step index={5}><span/></Step>
      <HowDoesWindowingWork index={stepIndex} />
    </ContentSlide>
  );
}

slide.contextTypes = {
  slide: PropTypes.any
};
slide.title = title;

export default slide;
