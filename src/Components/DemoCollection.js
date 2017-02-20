import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { AutoSizer, Collection } from 'react-virtualized';
import './DemoCollection.css';

export default class MySlide extends Component {
  static propTypes = {
    list: PropTypes.array
  };

  constructor (props, context) {
    super(props, context);

    this._cellRenderer = this._cellRenderer.bind(this);
    this._cellSizeAndPositionGetter = this._cellSizeAndPositionGetter.bind(this);
  }

  componentWillUpdate (nextProps, nextState) {
    // HACK Weird React bug where this.state === null
    // Seems to happen when component is about to unmount.
    // Going to just hack around it for now...
    if (!this.state) {
      return;
    }

    const { cellValues, focusedColumnIndex, focusedRowIndex } = this.state;

    if (
      focusedColumnIndex !== nextState.focusedColumnIndex ||
      focusedRowIndex !== nextState.focusedRowIndex
    ) {
      this._leftGrid.forceUpdate();
      this._mainGrid.forceUpdate();
      this._topGrid.forceUpdate();
    } else if (cellValues !== nextState.cellValues) {
      this._mainGrid.forceUpdate();
    }
  }

  render () {
    const { list } = this.props;

    return (
      <AutoSizer disableHeight>
        {({ width }) => (
          <Collection
            cellCount={Math.max(5000, list.length)}
            cellRenderer={this._cellRenderer}
            cellSizeAndPositionGetter={this._cellSizeAndPositionGetter}
            className='Collection'
            height={300}
            width={width}
          />
        )}
      </AutoSizer>
    )
  }

  _cellRenderer ({ index, key, style }) {
    const { list } = this.props;

    const datum = list[index];

    // Customize style
    style.backgroundColor = datum.color;

    return (
      <div
        className={classnames('CollectionCell', {
          'CollectionCellCircle': index % 2 === 0
        })}
        key={key}
        style={style}
      >
        {index}
      </div>
    )
  }

  _cellSizeAndPositionGetter ({ index }) {
    const { list } = this.props;

    const datum = list[index];

    return {
      height: datum.size,
      width: datum.size,
      x: datum.left,
      y: datum.top
    }
  }
}
