import classnames from 'classnames';
import React from 'react';
import './LabeledSvg.css';

export default function LabeledRect ({
  children,
  className,
  height,
  hidden,
  mono,
  textClassName,
  x,
  width,
  y
}) {
  textClassName = classnames('LabeledSvgText', textClassName, {
    LabeledSvgTextMono: mono,
    NotRenderedLabeledSvgText: hidden
  })
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        className={className}
      />
      <text
        x={x + width / 2}
        y={y + height / 2}
        textAnchor='middle'
        alignmentBaseline='central'
        className={textClassName}
      >
        {children}
      </text>
    </g>
  );
}