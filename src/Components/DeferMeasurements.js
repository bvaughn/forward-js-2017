import classnames from 'classnames';
import React from 'react';
import CrossHatchRect from '../Components/CrossHatchRect';
import LabeledRect from '../Components/LabeledRect';
import SvgWrapper from '../Components/SvgWrapper';

const BOXES = [
  [2, 40],
  [42, 20],
  [62, 35],
  [97, 30],
  [127, 20],
  [147, 40],
  [187, 40],
  [227, 40]
]

export default function DeferMeasurements () {
  return (
    <SvgWrapper
      height={275}
      viewBoxHeight={275}
      viewBoxWidth={300}
      width={300}
    >
      <g className='HowWorksGroup HowWorksGroupSkewed'>
        <g className='HowWorksRowGroup'>
          {BOXES.map(([y, height], index) => (
            <LabeledRect
              key={index}
              x={25}
              y={y}
              width={100}
              height={height}
              className={classnames({
                HowWorksRowNotRendered: index < 2,
                HowWorksRowEstimated: index > 5,
                HowWorksRowRendered: index >= 2 && index <= 5
              })}
            >
              {index < 2 && 'Not rendered'}
              {index >= 2 && index <= 5 && 'Rendered'}
              {index > 5 && 'Estimated'}
           </LabeledRect>
          ))}
        </g>

        <g>
          <CrossHatchRect x={25} y={0} width={100} height={80} fill='url(#diagonalHatch)' visible />
          <CrossHatchRect x={25} y={170} width={100} height={134} fill='url(#diagonalHatch)' visible />
        </g>

        <g className='HowWorksVisible HowWorksOuterRectShifted'>
          <g>
            <line x1={102} y1={72} x2={25} y2={112} className='HowWorksViewportLine' />
            <line x1={102} y1={158} x2={25} y2={198} className='HowWorksViewportLine' />
            <line x1={198} y1={72} x2={125} y2={112} className='HowWorksViewportLine' />
            <line x1={198} y1={158} x2={125} y2={198} className='HowWorksViewportLine' />
          </g>

          <rect x={190} y={72} width={10} height={86} className='HowWorksScrollTrack' />
          <rect x={192} y={100} width={5} rx={3} ry={3} height={15} className='HowWorksScrollThumb' />

          <LabeledRect x={100} y={70} width={100} height={90} className='HowWorksOuterRect' mono>
            &lt;ul&gt;
          </LabeledRect>
        </g>
      </g>
    </SvgWrapper>
  );
}