import classnames from 'classnames';
import React, { Component } from 'react';
import { AutoSizer, MultiGrid } from 'react-virtualized';
import './Spreadsheet.css';

const LETTERS = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default class MySlide extends Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      cellValues: {},
      focusedColumnIndex: null,
      focusedRowIndex: null
    };

    this._cellRenderer = this._cellRenderer.bind(this);
    this._columnWidth = this._columnWidth.bind(this);
    this._setRef = this._setRef.bind(this);
  }

  componentWillUpdate (nextProps, nextState) {
    const { cellValues, focusedColumnIndex, focusedRowIndex } = this.state;

    if (
      focusedColumnIndex !== nextState.focusedColumnIndex ||
      focusedRowIndex !== nextState.focusedRowIndex
    ) {
      this._multiGrid.forceUpdate();
    } else if (cellValues !== nextState.cellValues) {
      this._multiGrid.forceUpdate();
    }
  }

  render () {
    return (
      <AutoSizer disableHeight>
        {({ width }) => (
          <MultiGrid
            cellRenderer={this._cellRenderer}
            columnWidth={this._columnWidth}
            columnCount={LETTERS.length}
            fixedColumnCount={1}
            fixedRowCount={1}
            height={300}
            ref={this._setRef}
            rowHeight={40}
            rowCount={100}
            style={{
              border: '1px solid #dadada'
            }}
            styleBottomLeftGrid={{
              backgroundColor: '#ffffff'
            }}
            styleTopLeftGrid={{
              backgroundColor: '#f3f3f3',
              borderBottom: '4px solid #bcbcbc',
              borderRight: '4px solid #bcbcbc'
            }}
            styleTopRightGrid={{
              backgroundColor: '#f3f3f3'
            }}
            width={width}
          />
        )}
      </AutoSizer>
    );
  }

  _cellRenderer ({ columnIndex, key, rowIndex, style }) {
    if (columnIndex === 0 && rowIndex === 0) {
      return <div key={key} style={style} />
    } else if (columnIndex === 0) {
      return this._cellRendererLeft({ columnIndex, key, rowIndex, style })
    } else if (rowIndex === 0) {
      return this._cellRendererTop({ columnIndex, key, rowIndex, style })
    } else {
      return this._cellRendererMain({ columnIndex, key, rowIndex, style })
    }
  }

  _cellRendererLeft ({ columnIndex, key, rowIndex, style }) {
    const { focusedRowIndex } = this.state;

    return (
      <div
        className={classnames('FixedGridCell', {
          FixedGridCellFocused: rowIndex === focusedRowIndex
        })}
        key={key}
        style={style}
      >
        {rowIndex}
      </div>
    );
  }

  _cellRendererMain ({ columnIndex, key, rowIndex, style }) {
    const { cellValues, focusedColumnIndex, focusedRowIndex } = this.state;

    const value = cellValues[key] || '';

    const isFocused = (
      columnIndex === focusedColumnIndex &&
      rowIndex === focusedRowIndex
    );

    return (
      <input
        className={classnames('MainGridCell', {
          MainGridCellFocused: isFocused
        })}
        key={key}
        onChange={(event) => {
          this.setState({
            cellValues: {
              ...cellValues,
              [key]: event.target.value
            }
          })
        }}
        onFocus={() => this.setState({
          focusedColumnIndex: columnIndex,
          focusedRowIndex: rowIndex
        })}
        placeholder={`cell ${rowIndex}, ${columnIndex}`}
        style={style}
        value={value}
      />
    );
  }

  _cellRendererTop ({ columnIndex, key, rowIndex, style }) {
    const { focusedColumnIndex } = this.state;

    return (
      <div
        className={classnames('FixedGridCell', {
          FixedGridCellFocused: columnIndex === focusedColumnIndex
        })}
        key={key}
        style={style}
      >
        {LETTERS[columnIndex]}
      </div>
    );
  }

  _columnWidth ({ index }) {
    return index === 0 ? 40 : 100;
  }

  _setRef (ref) {
    this._multiGrid = ref;
  }
}
