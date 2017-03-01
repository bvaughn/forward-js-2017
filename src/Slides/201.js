import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import styled from 'styled-components';
import MarioSvg from '../Components/MarioSvg';
import kindleImage from '../../public/kindle.jpg';
import occlusionImage from '../../public/occlusion-culling.jpg';

const OcclusionImage = styled.img`
  width: 300px;
  max-width: 100%;
  height: auto;
`

const KindleImage = styled.img`
  width: 250px;
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

    <Step index={0} maxIndex={2}>
      <div>
        <ul>
          <Step index={1}><li>Technique known as "windowing".</li></Step>
          <Step index={2}><li>Analog example: <strike>books</strike> Kindle</li></Step>
        </ul>

        <Step index={2} exact>
          <KindleImage
            role='presentation'
            src={kindleImage}
          />
        </Step>
      </div>
    </Step>

    <Step index={3} maxIndex={7}>
      <div>
        <p>Video games do this ('Occlusion Culling')</p>

        <Step index={3} exact>
          <Spacer>
            <MarioSvg />
          </Spacer>
        </Step>

        <ul>
          <Step index={4}><li>Given a perspective of a user/camera</li></Step>
          <Step index={5}><li>Which objects are in the direction being viewed?</li></Step>
          <Step index={6}><li>Are any of them obscurred by other items (eg walls)?</li></Step>
        </ul>

        <Step index={7}>
          <OcclusionImage
            role='presentation'
            src={occlusionImage}
          />
        </Step>
      </div>
    </Step>

    <Step index={8} maxIndex={11}>
      <div>
        <p>Websites and mobile apps do this as well ("windowing")</p>

        <ul>
          <Step index={9}><li>Given a small, scrollable list (eg <code>&lt;ul&gt;</code>, <code>UITableView</code>)</li></Step>
          <Step index={10}><li>And a huge set of items (eg <code>&lt;li&gt;</code>, <code>UITableViewCell</code>)</li></Step>
          <Step index={11}><li>Which items are visible?</li></Step>
        </ul>
      </div>
    </Step>
  </ContentSlide>
);

slide.title = 'Only create elements the user can see'

export default slide;
