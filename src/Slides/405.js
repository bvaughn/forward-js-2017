import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
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
              DOM element size limits (eg Chrome 33.5M px, IE 1.5M px)
            </p>
          </Step>
          <ul>
            <Step index={2}><li>Browser won't render past</li></Step>
            <Step index={3}><li>Can't scroll past</li></Step>
            <Step index={4}><li>Layout gets wonky</li></Step>
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

      <Step index={6} maxIndex={9}>
        <div>
          <Step index={7}><p>Solution: compression</p></Step>
          <Step index={8}>
            <ScaledList scaled={stepIndex > 8} />
          </Step>
        </div>
      </Step>
    </ContentSlide>
  );
}

slide.title = 'Will we run into browser limitations?';

export default slide;
