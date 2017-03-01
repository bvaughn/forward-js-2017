import React from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import styled from 'styled-components';
import calendarGif from '../../public/how-is-it-used-calendar.gif';
import dropDownGif from '../../public/how-is-it-used-dropdown.gif';
import tableGif from '../../public/how-is-it-used-table.gif';
import treeGif from '../../public/how-is-it-used-tree.gif';

const ImageContainer = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  margin-top: 1rem;
  border: 1px solid #ddd;
`

const slide = () => (
  <ContentSlide>
    <h1>{slide.title}</h1>

    <Step index={0} maxIndex={5}>
      <ul>
        <Step index={1}>
          <li>Tables, lists, spreadsheets (<a href='https://github.com/bvaughn/react-virtualized'>react-virtualized</a>)</li>
        </Step>
        <Step index={2}>
          <li>Drop-down menus (<a href='https://github.com/bvaughn/react-virtualized-select'>react-virtualized-select</a>)</li>
        </Step>
        <Step index={3}>
          <li>Calendar & date-pickers (<a href='https://github.com/clauderic/react-infinite-calendar'>react-infinite-calendar</a>)</li>
        </Step>
        <Step index={4}>
          <li>Tree views (<a href='https://github.com/fritz-c/react-sortable-tree'>react-sortable-tree</a>)</li>
        </Step>
        <Step index={5}>
          <li>
            Image carousels, news feeds, chat applications, etc
          </li>
        </Step>
      </ul>
    </Step>

    <Step index={6}>
      <h3>Will the data grow?</h3>
    </Step>

    <ImageContainer>
      <Step index={1} exact>
        <Image role='presentation' src={tableGif} width={350} />
      </Step>
      <Step index={2} exact>
        <Image role='presentation' src={dropDownGif} width={200} />
      </Step>
      <Step index={3} exact>
        <Image role='presentation' src={calendarGif} width={200} />
      </Step>
      <Step index={4} exact>
        <Image role='presentation' src={treeGif} width={350} />
      </Step>
    </ImageContainer>
  </ContentSlide>
);

slide.title = 'What can windowing be used for?';

export default slide;
