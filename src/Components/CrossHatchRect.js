import classnames from 'classnames';
import React from 'react';
import './CrossHatchRect.css';

export default function CrossHatchRect ({ className, x, y, width, height, visible }) {
  className = classnames('CrossHatchRectHidden', className, {
    CrossHatchRectVisible: visible
  })

  return (
    <g>
      <defs>
        <pattern
          id='crossHatchRectPattern'
          width='10'
          height='10'
          patternTransform='rotate(45 0 0)'
          patternUnits='userSpaceOnUse'
        >
          <line
            x1='0'
            y1='0'
            x2='0'
            y2='10'
            className='CrossHatchRectPattern'
          />
        </pattern>
      </defs>

      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        className={className}
        fill='url(#crossHatchRectPattern)'
      />
    </g>
  );
}