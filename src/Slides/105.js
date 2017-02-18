import now from 'performance-now';
import numeral from 'numeral';
import React, { Component, PropTypes } from 'react';
import { ContentSlide } from 'react-presents';
import ExampleList from '../Components/ExampleList';
import Note from '../Components/Note';

export default class Slide extends Component {
  static contextTypes = {
    list: PropTypes.array
  };

  static title = 'How much can windowing improve performance?';

  constructor (props, context) {
    super(props, context);

    this.state = {
      formattedListSize: numeral(context.list.length).format(),
      initializationTime: 0,
      initialized: false
    };
  }

  componentDidUpdate (prevProps, prevState) {
    const { initialized } = this.state;

    if (initialized && !prevState.initialized) {
      window.requestIdleCallback(() => {
        this.setState({
          initializationTime: now() - this._initializationStartedAt
        });
      });
    }
  }

  componentWillUpdate (nextProps, nextState) {
    const { initialized } = this.state;

    if (nextState.initialized && !initialized) {
      this._initializationStartedAt = now();
    }
  }

  render () {
    const { formattedListSize, initializationTime, initialized } = this.state;

    return (
      <ContentSlide>
        <h1>{Slide.title}</h1>
        <h2>Rendering the same list with windowing</h2>
        {initialized || (
          <button onClick={() => this.setState({ initialized: true })}>
            Create List
          </button>
        )}
        {initialized && (
          <div>
            {initializationTime === 0 && (
              <Note>
                Creating List ...
              </Note>
            )}
            {initializationTime > 0 && (
              <Note type='warning'>
                Created list in {Math.round(initializationTime) / 1e3} seconds ({formattedListSize} items)
              </Note>
            )}

            <ExampleList />

            <Note>
              Open the browser Timeline view and scroll
            </Note>
          </div>
        )}
      </ContentSlide>
    );
  }
}
