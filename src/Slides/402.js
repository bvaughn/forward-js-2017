import React, { Component, PropTypes } from 'react';
import { Code, ContentSlide, Step } from 'react-presents';
import { AnswerLabel, QuestionLabel } from '../Components/Labels';
import Note from '../Components/Note';
import DragAndDropList from '../Components/DragAndDropList';

const source = require('raw!../../examples/drag-and-drop-key-points.js');

const DIM_LINES = [
  [[1,3], [6,27]],
  [[0,9], [13,18], [26,27]],
  [[0,20], [24,27]]
]

export default class Slide extends Component {
  static contextTypes = {
    list: PropTypes.array
  };

  static propTypes = {
    stepIndex: PropTypes.number.isRequired
  };

  static title = 'Drag-and-drop rows';

  render () {
    const { list } = this.context;
    const { stepIndex } = this.props;

    return (
      <ContentSlide>
        <h1>{Slide.title}</h1>

        <Step index={0} maxIndex={2}>
          <div>
            <Step index={0}>
              <p>
                <QuestionLabel>Question</QuestionLabel>:
                Is it possible to integrate with another library for drag-and-drop?
              </p>
            </Step>

            <Step index={1}>
              <p>
                <AnswerLabel>Answer</AnswerLabel>:
                Yes!
                Use <a href='https://github.com/clauderic/react-sortable-hoc'>react-sortable-hoc</a> with react-virtualized for drag-and-drop.
              </p>
            </Step>

            <Step index={2}>
              <div>
                <DragAndDropList list={list} />
                <Note>Click and drag rows above</Note>
              </div>
            </Step>
          </div>
        </Step>

        <Step index={3} maxIndex={6}>
          <Code
            dimLines={DIM_LINES[stepIndex - 3]}
            value={source}
          />
        </Step>
      </ContentSlide>
    );
  }
}
