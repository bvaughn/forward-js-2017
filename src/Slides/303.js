import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';
import { AnswerLabel, QuestionLabel } from '../Components/Labels';
import image from '../../public/cache-all-the-things.png';

const Image = styled.img`
  margin-left: 0.5rem;
`;

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={1}>
      <p>
        <AnswerLabel>Answer</AnswerLabel>: No! Cache all measurements!
      </p>
    </Step>

    <div className='Spacer' />

    <Step index={2}>
      <p>
        <QuestionLabel>Question</QuestionLabel>: Can we cache more than this? <Step index={3}><span>Can we cache the rows themselves?</span></Step>
      </p>
    </Step>

    <Step index={4}>
      <Image
        height={57}
        role='presentation'
        src={image}
        width={92}
      />
    </Step>

    <Step index={5}>
      <p>
        <AnswerLabel>Answer</AnswerLabel>: Yes, but it's tricky.
      </p>
    </Step>

    <ul>
      <Step index={6}>
        <li>Cache rendered rows while scrolling</li>
      </Step>
      <Step index={7}>
        <li>Clear cache when scrolling stops</li>
      </Step>
    </ul>
  </ContentSlide>
);

slide.title = 'Does it have to measure everything up front?';

export default slide;
