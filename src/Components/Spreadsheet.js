import classnames from 'classnames';
import React, { Component } from 'react';
import { AutoSizer, Grid, ScrollSync } from 'react-virtualized';
import './Spreadsheet.css';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default class MySlide extends Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      cellValues: {},
      focusedColumnIndex: null,
      focusedRowIndex: null
    };

    this._cellRendererLeft = this._cellRendererLeft.bind(this);
    this._cellRendererMain = this._cellRendererMain.bind(this);
    this._cellRendererTop = this._cellRendererTop.bind(this);
  }

  componentWillUpdate (nextProps, nextState) {
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
    const { focusedColumnIndex, focusedRowIndex } = this.state;

    return (
      <ScrollSync>
        {({ onScroll, scrollLeft, scrollTop }) => (
          <AutoSizer disableHeight>
            {({ width }) => (
              <div
                className='GridContainer'
                style={{ width }}
              >
                <div className='TopLeftCell'></div>
                <Grid
                  cellRenderer={this._cellRendererLeft}
                  className='LeftGrid'
                  columnCount={1}
                  columnWidth={50}
                  height={275}
                  ref={(ref) => this._leftGrid = ref}
                  rowCount={100}
                  rowHeight={40}
                  scrollTop={scrollTop}
                  width={50}
                />
                <Grid
                  cellRenderer={this._cellRendererTop}
                  className='TopGrid'
                  columnCount={LETTERS.length}
                  columnWidth={100}
                  height={40}
                  ref={(ref) => this._topGrid = ref}
                  rowCount={1}
                  rowHeight={40}
                  scrollLeft={scrollLeft}
                  width={width - 50}
                />
                <Grid
                  cellRenderer={this._cellRendererMain}
                  className='MainGrid'
                  columnWidth={100}
                  columnCount={LETTERS.length}
                  height={275}
                  onScroll={onScroll}
                  ref={(ref) => this._mainGrid = ref}
                  rowHeight={40}
                  rowCount={100}
                  scrollToColumn={focusedColumnIndex}
                  scrollToRow={focusedRowIndex}
                  width={width - 50}
                />
              </div>
            )}
          </AutoSizer>
        )}
      </ScrollSync>
    );
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
}
