import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Code, Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import { List } from 'react-virtualized';
import styled from 'styled-components';
import { AnswerLabel, QuestionLabel } from '../Components/Labels';
import Note from '../Components/Note';
import image from '../../public/profile-picture.jpg';

const source = require('raw!../../examples/is-scrolling-cell-renderer.js').trim();

const Image = styled.img`
  width: 60px;
  height: 60px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin-right: 0.5rem;
`

const ImageTinter = styled.div`
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const ImagePlaceholder = styled.div`
  width: 60px;
  height: 60px;
  background-color: #aaa;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
`

const ImageListRowText = styled.span`
  font-size: 1rem;
`

export default class Slide extends Component {
  static contextTypes = {
    list: PropTypes.array
  };

  static title = 'What about elements that are really complex?';

  render () {
    const { list } = this.context;

    return (
      <ContentSlide>
        <h1>{Slide.title}</h1>

        <Step index={0} maxIndex={3}>
          <div>
            <Step index={1}><p><QuestionLabel>Question</QuestionLabel>: What if a row contains a lot of content?</p></Step>
            <ul>
              <Step index={2}><li>Complex <code>&lt;canvas&gt;</code> or <code>&lt;svg&gt;</code> (heavy layout)</li></Step>
              <Step index={3}><li>Images (trigger network requests)</li></Step>
            </ul>
          </div>
        </Step>

        <Step index={4} maxIndex={5}>
          <div>
            <p><AnswerLabel>Solution</AnswerLabel>: Render less while scrolling.</p>

            <Step index={5}>
              <Code value={source} />
            </Step>
          </div>
        </Step>

        <Step index={6}>
          <div>
            <List
              className='List'
              height={300}
              overscanRowCount={2}
              rowCount={list.length}
              rowHeight={80}
              rowRenderer={({ index, isScrolling, key, style }) => (
                <div
                  className={classnames('ListRow', {
                    ListRowEven: index % 2 === 0,
                    ListScrolling: isScrolling
                  })}
                  key={index}
                  style={style}
                >
                  {isScrolling && (
                    <ImagePlaceholder />
                  )}
                  {!isScrolling && (
                    <ImageContainer>
                      <Image
                        role='presentation'
                        src={image}
                      />
                      <ImageTinter
                        style={{
                          background: hexToRgba(list[index].color, 0.35)
                        }}
                      />
                    </ImageContainer>
                  )}
                  <ImageListRowText>
                    {list[index].name}
                  </ImageListRowText>
                </div>
              )}
              width={240}
            />

            <Note>
              Scroll to see row renderer changes.
            </Note>
          </div>
        </Step>
      </ContentSlide>
    );
  }
}

function hexToRgba(hex, alpha) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
