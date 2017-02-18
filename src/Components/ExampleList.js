import React, { Component, PropTypes } from 'react';
import { ListRow, ListRowActive, RowName, RowNumber, RowStack, RowSummary, VirtualList } from './StyledListElements';
import '../shared-list-styles.css';

export default class ExampleList extends Component {
  static contextTypes = {
    list: PropTypes.array
  };

  static propTypes = {
    scrollToAlignment: PropTypes.string,
    scrollToIndex: PropTypes.number
  };

  render () {
    const { list } = this.context;
    const { scrollToAlignment, scrollToIndex } = this.props;

    return (
      <VirtualList
        height={240}
        overscanRowCount={2}
        rowCount={list.length}
        rowHeight={40}
        rowRenderer={({ index, key, style }) => {
          const RowComponent = index === scrollToIndex
            ? ListRowActive
            : ListRow

          return (
            <RowComponent
              key={index}
              style={style}
            >
              <RowNumber
                style={{
                  backgroundColor: list[index].color
                }}
              >
                {list[index].name.substr(0, 1)}
              </RowNumber>
              <RowStack>
                <RowName>{list[index].name}</RowName>
                <RowSummary>This is row {index}</RowSummary>
              </RowStack>
            </RowComponent>
          )
        }}
        scrollToAlignment={scrollToAlignment}
        scrollToIndex={scrollToIndex}
        width={240}
      />
    );
  }
}
