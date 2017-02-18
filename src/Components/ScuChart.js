import React from 'react';
import LabeledCircle from './LabeledCircle';
import SvgWrapper from './SvgWrapper';
import './ScuChart.css';

function Circle ({ label = 'div', scu = false, ...rest }) {
  const className = scu
    ? 'scuTrue'
    : 'scuFalse';

  return (
    <LabeledCircle
      className={className}
      textClassName='scuText'
      r={20}
      {...rest}
    >
      {label}
    </LabeledCircle>
  );
}

// SVG coordinates
const y0 = 25;
const y1 = 75;
const y3 = 150;
const xRoot = 150;
const xL1a = 75;
const xL1b = 225;
const xL2a = 25;
const xL2b = 125;
const xL2c = 175;
const xL2d = 275;

export default function Chart ({ scu }) {
  const maybeMarker = scu === 'all'
    ? 'url(#arrow)'
    : undefined
  const maybeClassName = scu === 'all'
    ? 'scuAnimatedLine'
    : 'scuFrozenLine'
  const maybeScu = scu === 'all'
    ? true
    : false

  return (
    <SvgWrapper
      height={175}
      width={300}
      viewBoxHeight={175}
      viewBoxWidth={300}
    >
      <defs>
        <marker id='arrow' markerWidth='6' markerHeight='6' refX='25' refY='3' orient='auto' markerUnits='strokeWidth'>
          <path d='M0,0 L0,6 L6,3 z' className='scuArrow' />
        </marker>
      </defs>

      <line x1={xRoot} y1={y0} x2={xL1a} y2={y1} markerEnd='url(#arrow)' className='scuAnimatedLine' />
      <line x1={xRoot} y1={y0} x2={xL1b} y2={y1} markerEnd='url(#arrow)' className='scuAnimatedLine' />
      <line x1={xL1a}  y1={y1} x2={xL2a} y2={y3} markerEnd={maybeMarker} className={maybeClassName} />
      <line x1={xL1a}  y1={y1} x2={xL2b} y2={y3} markerEnd={maybeMarker} className={maybeClassName} />
      <line x1={xL1b}  y1={y1} x2={xL2c} y2={y3} markerEnd='url(#arrow)' className='scuAnimatedLine' />
      <line x1={xL1b}  y1={y1} x2={xL2d} y2={y3} markerEnd='url(#arrow)' className='scuAnimatedLine' />

      <Circle cx={xRoot} cy={y0} label='div' scu={true} />
      <Circle cx={xL1a}  cy={y1} label='ul'  scu={maybeScu} />
      <Circle cx={xL2a}  cy={y3} label='li'  scu={maybeScu} />
      <Circle cx={xL2b}  cy={y3} label='li'  scu={maybeScu} />
      <Circle cx={xL1b}  cy={y1} label='div' scu={true} />
      <Circle cx={xL2c}  cy={y3} label='p'   scu={true} />
      <Circle cx={xL2d}  cy={y3} label='p'   scu={maybeScu} />
    </SvgWrapper>
  );
}