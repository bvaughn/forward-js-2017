import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import { AnswerLabel, QuestionLabel } from '../Components/Labels';
import ScaledList from '../Components/ScaledList';
import image from '../../public/browser-limits-cutoff.png';

const slide = ({ stepIndex }) => {
  return (
    <ContentSlide>
      <h1>{slide.title}</h1>

      <Step index={1} maxIndex={5}>
        <div>
          <Step index={1}>
            <p>
              <QuestionLabel>Problem</QuestionLabel>:
              (eg Chrome 33.5M px, IE 1.5M px)
            </p>
          </Step>
          <ul>
            <Step index={2}><li>Browser won't render items past this point</li></Step>
            <Step index={3}><li>You can't scroll past it either</li></Step>
            <Step index={4}><li>Layout gets wonky as you approach the threshold</li></Step>
          </ul>
          <Step index={5}>
            <img
              height={300}
              role='presentation' 
              src={image}
              width={332}
            />
          </Step>
        </div>
      </Step>

      <Step index={6} maxIndex={11}>
        <div>
          <h2>So how can we beat this?</h2>
          <Step index={7}><p><AnswerLabel>Solution</AnswerLabel>: Compress things.</p></Step>
          <ul>
            <Step index={8}><li>Scale/compress positions of hidden rows</li></Step>
            <Step index={9}><li>Render visible rows normally</li></Step>
          </ul>
          <Step index={10}>
            <ScaledList scaled={stepIndex > 10} />
          </Step>
        </div>
      </Step>
    </ContentSlide>
  );
}

slide.title = 'Did you know about DOM element size constraints?';

export default slide;
