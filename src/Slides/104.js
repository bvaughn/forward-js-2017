import now from 'performance-now';
import React, { Component, PropTypes } from 'react';
import { ContentSlide } from 'react-presents';
import Note from '../Components/Note';
import { List, ListRow, ListWithBorderRadius, RowName, RowNumber, RowStack, RowSummary } from '../Components/StyledListElements';

export default class Slide extends Component {
  static contextTypes = {
    list: PropTypes.array
  };

  static title = 'How much can windowing improve performance?';

  constructor (props, context) {
    super(props, context);

    this.state = {
      initializationTime: 0,
      initialized: false,
      useBorderRadius: false
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
    const { list } = this.context;
    const { initializationTime, initialized, useBorderRadius } = this.state;

    const ListComponent = useBorderRadius
      ? ListWithBorderRadius
      : List;

    return (
      <ContentSlide>
        <h1>{Slide.title}</h1>
        <h2>Rendering a big list with React</h2>
        {initialized || (
          <button onClick={() => this.setState({ initialized: true })}>
            Create List
          </button>
        )}
        {initialized && (
          <div>
            {initializationTime === 0 && (
              <Note type='warning'>
                Measuring ...
              </Note>
            )}
            {initializationTime > 0 && (
              <Note type='warning'>
                Created list in {Math.round(initializationTime) / 1e3} seconds
              </Note>
            )}

            <ListComponent>
              {list.map((item, index) => (
                <ListRow key={index}>
                  <RowNumber
                    style={{
                      backgroundColor: item.color
                    }}
                  >
                    {item.name.substr(0, 1)}
                  </RowNumber>
                  <RowStack>
                    <RowName>{item.name}</RowName>
                    <RowSummary>This is row {index}</RowSummary>
                  </RowStack>
                </ListRow>
              ))}
            </ListComponent>

            <Note>
              Scrolling performance poor if repaints are triggered
            </Note>

            <p>
              <label>
                <input
                  checked={useBorderRadius}
                  onChange={() => this.setState({
                    useBorderRadius: this._checkbox.checked
                  })}
                  ref={(ref) => this._checkbox = ref}
                  type='checkbox'
                /> Trigger repaints on scroll?
              </label>
            </p>
          </div>
        )}
      </ContentSlide>
    );
  }
}
