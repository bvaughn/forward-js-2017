import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import styled from 'styled-components';
import image from '../../public/cache-all-the-things.png';

const Image = styled.img`
  margin-left: 0.5rem;
`;

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={1} maxIndex={3}>
      <div>
        <ul>
          <Step index={1}><li>Measurements?</li></Step>
          <Step index={2}><li>Cells?</li></Step>
          <Step index={3}>
            <li>
              <Image
                height={57}
                role='presentation'
                src={image}
                width={92}
              />
            </li>
          </Step>
        </ul>
      </div>
    </Step>

    <Step index={4}>
      <div>
        <p>
          Stateful views are tricky.
        </p>

        <ul>
          <Step index={5}>
            <li>Cache while scrolling</li>
          </Step>
          <Step index={6}>
            <li>Clear cache after</li>
          </Step>
        </ul>
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'What can be cached?';

export default slide;
