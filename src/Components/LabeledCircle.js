import classnames from 'classnames';
import React from 'react';
import './LabeledSvg.css';

export default function LabeledCircle ({
  className,
  children,
  cx,
  cy,
  hidden,
  r,
  textClassName
}) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        className={className}
      />
      <text
        x={cx}
        y={cy}
        textAnchor='middle'
        alignmentBaseline='central'
        className={classnames('SvgLabel', textClassName, {
          NotRenderedLabeledSvgText: hidden
        })}
      >
        {children}
      </text>
    </g>
  );
}