import classnames from 'classnames';
import times from 'lodash.times';
import React from 'react';
import Row from './AnimatedListRow';
import './AnimatedList.css';

// Assumes 10 total rows; renders 11 to allow for partial visibility of first and last row
// Assumes 30px row height, 1 overscan, 2 hidden rows, 4 visible rows (10 total rows)
export default function AnimatedListList ({
  className = '',
  direction = 0,
  iteration = 0,
  offset = 0,
  overscanCount = 2
}) {
  const visibleRows = [];
  for (let index = 0; index < 11; index++) {
    const rowTop = index * 30 + offset;
    const rowBottom = rowTop + 30;

    // 90..210 allows enough room for 4 fully visible rows (5 with partials)
    if (!(rowBottom <= 100 || rowTop >= 200)) {
      visibleRows.push(index);
    }
  }

  const overscanRows = [];
  const firstVisibleRow = visibleRows[0];
  const lastVisibleRow = visibleRows[visibleRows.length - 1];
  switch (direction) {
    case -1: // Scrolling up
      for (let i = 1; i <= overscanCount; i++) {
        overscanRows.push(firstVisibleRow - i);
      }
      break;
    case 1: // Scrolling down
      for (let i = 1; i <= overscanCount; i++) {
        overscanRows.push(lastVisibleRow + i);
      }
      break;
    default: // Resting
      for (let i = 1; i <= overscanCount / 2; i++) {
        overscanRows.push(firstVisibleRow - i);
        overscanRows.push(lastVisibleRow + i);
      }
      break;
  }

  return (
    <div className={classnames('AnimatedList', className)}>
      <div
        className='Positioned'
        style={{
          transform: `translateY(${offset}px)`
        }}
      >
        {times(11).map((index) => {
          const isVisibleRow = visibleRows.includes(index);
          const isOverscanRow = overscanRows.includes(index);
          const isInvisibleRow = !isVisibleRow && !isOverscanRow;

          let label;
          if (isOverscanRow) {
            label = 'rendered (overscan)';
          } else if (isInvisibleRow) {
            label = 'not rendered';
          } else {
            label = 'rendered';
          }

          return (
            <Row
              direction={direction}
              invisible={isInvisibleRow}
              iteration={iteration}
              key={index}
              label={label}
              overscan={isOverscanRow}
            />
          )
        })}
      </div>

      <div className='AnimatedListDimmerTop' />
      <div className='AnimatedListDimmerBottom' />

      <div className='InnerFrame' />
    </div>
  );
}
