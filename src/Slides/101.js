import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import styled from 'styled-components';
import MarioSvg from '../Components/MarioSvg';
import booksImage from '../../public/books.jpg';
import occlusionImage from '../../public/occlusion-culling.jpg';

const OcclusionImage = styled.img`
  width: 300px;
  max-width: 100%;
  height: auto;
`

const BooksImage = styled.img`
  width: 270px;
  max-width: 100%;
  height: auto;
  margin-left: 2.5rem;
`

const Spacer = styled.div`
  margin-top: 0.5rem;
`

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={0} maxIndex={4}>
      <div>
        <ul>
          <Step index={1}><li>Technique known as "windowing".</li></Step>
          <Step index={2}><li>Simple to describe but complex to implement.</li></Step>
          <Step index={3}>
            <li>
              Analog example: books
              <Step index={4}><span>, Star Wars opening credits</span></Step>
            </li>
          </Step>
        </ul>

        <Step index={3} exact>
          <BooksImage
            role='presentation'
            src={booksImage}
          />
        </Step>
      </div>
    </Step>

    <Step index={5} maxIndex={9}>
      <div>
        <p>Video games do this ('Occlusion Culling')</p>

        <Step index={5} exact>
          <Spacer>
            <MarioSvg />
          </Spacer>
        </Step>

        <ul>
          <Step index={6}><li>Given a perspective of a user/camera</li></Step>
          <Step index={7}><li>Which objects are in the direction being viewed</li></Step>
          <Step index={8}><li>Which ones aren't obscurred by other items (eg walls)</li></Step>
        </ul>

        <Step index={9}>
          <OcclusionImage
            role='presentation'
            src={occlusionImage}
          />
        </Step>
      </div>
    </Step>

    <Step index={10} maxIndex={14}>
      <div>
        <p>Websites and mobile apps do this as well ("windowing")</p>

        <ul>
          <Step index={11}><li>Given a small list (eg <code>&lt;ul&gt;</code>, <code>UITableView</code>)</li></Step>
          <Step index={12}><li>And a huge set of items (eg <code>&lt;li&gt;</code>, <code>UITableViewCell</code>)</li></Step>
          <Step index={13}><li>And a scroll position</li></Step>
          <Step index={14}><li>Which items are visible?</li></Step>
        </ul>
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'Only display visible data'

export default slide;
