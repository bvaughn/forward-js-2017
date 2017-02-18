import React, { Component, PropTypes } from 'react';
import { arrayMove, SortableContainer, SortableElement } from 'react-sortable-hoc';
import { List } from 'react-virtualized';
import './DragAndDropList.css';

// Connect react-virtualized and react-sortable-hoc
const SortableList = SortableContainer(List, {
  withRef: true
});
const SortableListRow = SortableElement(({ children }) => children);

export default class DragAndDropList extends Component {
  static propTypes = {
    list: PropTypes.array
  };

  constructor (props, context) {
    super(props, context);

    this.state = {
      listIndices: props.list.map((item, index) => index)
    };

    this._onSortEnd = this._onSortEnd.bind(this)
    this._rowRenderer = this._rowRenderer.bind(this)
  }

  render () {
    const { list } = this.props;

    return (
      <SortableList
        className='List'
        height={240}
        helperClass='SortableListRowActive'
        onSortEnd={this._onSortEnd}
        overscanRowCount={2}
        rowCount={list.length}
        rowHeight={40}
        rowRenderer={this._rowRenderer}
        width={240}
      />
    );
  }

  _onSortEnd ({ newIndex, oldIndex }) {
    const { list } = this.props;

    if (newIndex === oldIndex) {
      return;
    }

    arrayMove(list, oldIndex, newIndex);

    this.forceUpdate(); // Re-render
  }

  _rowRenderer ({ index, key, style }) {
    const { list } = this.props;

    return (
      <div
        key={index}
        style={style}
      >
        <SortableListRow index={index}>
          <div className='ListRow SortableListRow'>
            {list[index].name}
          </div>
        </SortableListRow>
      </div>
    );
  }
}
