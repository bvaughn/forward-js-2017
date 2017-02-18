import Immutable from 'immutable';
import React, { Component, PropTypes } from 'react';
import Draggable from 'react-draggable';
import { List } from 'react-virtualized';
import SvgWrapper from './SvgWrapper';
import './ResizableRowsList.css';

export default class ResizableRowsList extends Component {
  static propTypes = {
    list: PropTypes.array
  };

  constructor (props, context) {
    super(props, context);

    this.state = {
      rowHeights: Immutable.Map()
    };

    this._rowRenderer = this._rowRenderer.bind(this)
    this._rowHeight = this._rowHeight.bind(this)
  }

  componentWillUpdate (nextProps, nextState) {
    const { rowHeights } = this.state;

    if (rowHeights !== nextState.rowHeights) {
      this._list.recomputeRowHeights(0);
    }
  }

  render () {
    const { list } = this.props;

    return (
      <List
        className='List'
        height={300}
        overscanRowCount={2}
        ref={(ref) => this._list = ref}
        rowCount={list.length}
        rowHeight={this._rowHeight}
        rowRenderer={this._rowRenderer}
        width={240}
      />
    );
  }

  _resizeRow ({ deltaY, index }) {
    const { rowHeights } = this.state;

    let rowHeight = this._rowHeight({ index });
    rowHeight = Math.max(40, Math.min(200, rowHeight + deltaY));

    this.setState({
      rowHeights: rowHeights.set(index, rowHeight)
    });
  }

  _rowHeight ({ index }) {
    const { rowHeights } = this.state;

    return rowHeights.get(index, 50);
  }

  _rowRenderer ({ index, isScrolling, key, style }) {
    const { list } = this.props;

    return (
      <div
        className='ResizableListRow'
        key={index}
        style={style}
      >
        {list[index].name}

        <Draggable
          axis='y'
          defaultClassName='DragHandle'
          defaultClassNameDragging='DragHandleActive'
          onStop={(event, data) => this._resizeRow({
            deltaY: data.y,
            index: index
          })}
          position={{
            x: 0,
            y: 0
          }}
          zIndex={999}
        >
          <div className='DragHandleIcon'>
            <SvgWrapper
              height={24}
              width={24}
              viewBoxHeight={24}
              viewBoxWidth={24}
              style={{
                fill: 'currentColor'
              }}
            >
              <defs>
                <path d='M0 0h24v24H0V0z' id='a'/>
              </defs>
              <clipPath id='b'>
                <use overflow='visible' href='#a'/>
              </clipPath>
              <path clipPath='url(#b)' d='M20 9H4v2h16V9zM4 15h16v-2H4v2z'/>
            </SvgWrapper>
          </div>
        </Draggable>
      </div>
    );
  }
}
