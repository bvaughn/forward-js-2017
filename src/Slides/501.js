import React, { Component } from 'react';
import { Step } from 'react-presents';
import ContentSlide from '../Presentation/ContentSlide';
import { Radio, RadioGroup } from 'react-radio-group';
import ExampleList from '../Components/ExampleList';

export default class Slide extends Component {
  static title = 'Scrolling to a row via props';

  constructor (props, context) {
    super(props, context);

    this.state = {
      scrollToAlignment: 'auto',
      scrollToIndex: 0
    };
  }

  render () {
    const { scrollToAlignment, scrollToIndex } = this.state;

    return (
      <ContentSlide>
        <h1>{Slide.title}</h1>

        <p>Controlled by 2 simple properties:</p>

        <ul>
          <Step index={1}>
            <li>
              <code>scrollToAlignment</code> <RadioGroup
                Component='span'
                name='scrollToAlignment'
                onChange={(scrollToAlignment) => this.setState({ scrollToAlignment })}
                selectedValue={scrollToAlignment}
              >
                <Radio value='auto' /> "auto" (default)
                <Radio value='center' /> "center"
                <Radio value='end' /> "end"
                <Radio value='start' /> "start"
              </RadioGroup>
            </li>
          </Step>

          <Step index={2}>
            <li>
              <code>scrollToIndex</code> <input
                onChange={() => this.setState({
                  scrollToIndex: parseInt(this._input.value, 10)
                })}
                ref={(ref) => this._input = ref}
                type='number'
                value={scrollToIndex}
              />
            </li>
          </Step>
        </ul>

        <Step index={3}>
          <ExampleList
            scrollToAlignment={scrollToAlignment}
            scrollToIndex={scrollToIndex}
          />
        </Step>
      </ContentSlide>
    );
  }
}
