import classnames from 'classnames';
import times from 'lodash.times';
import React from 'react';
import CrossHatchRect from './CrossHatchRect';
import LabeledRect from './LabeledRect';
import SvgWrapper from './SvgWrapper';
import './HowDoesWindowingWork.css';

export default function HowDoesWindowingWork ({ index }) {
  const groupClassName = classnames('HowWorksGroup', {
    HowWorksGroupSkewed: index > 2
  })
  const innerGroupClassName = classnames('HowWorksHidden', {
    HowWorksVisible: index > 1
  })
  const innerLinesClassName = classnames('HowWorksInnerLine', {
    HowWorksHidden: index > 3,
    HowWorksInnerLineAnimated: index > 2
  })
  const outerGroupClassName = classnames('HowWorksOuterGroup', 'HowWorksHidden', {
    HowWorksVisible: index > 0,
    HowWorksOuterRectShifted: index > 2
  })
  const rowGroupClassName = classnames('HowWorksRowGroup', 'HowWorksHidden', {
    HowWorksVisible: index > 3,
    HowWorksScrollingLoop: index >= 5
  })
  const viewportLineClassName = classnames('HowWorksViewportLine', 'HowWorksHidden', {
    HowWorksVisible: index > 2
  })
  const scrollbarClassName = classnames('HowWorksHidden', {
    HowWorksVisible: index > 3
  })
  const thumbClassName = classnames('HowWorksScrollThumb', {
    HowWorksScrollingThumbLoop: index >= 5
  })
  const dimmerVisible = index > 3 && index < 5

  return (
    <SvgWrapper
      height={304}
      viewBoxHeight={304}
      viewBoxWidth={300}
      width={300}
    >
      <g className={groupClassName}>
        <g className={innerGroupClassName}>
          {times(10).map((i) => (
            <line key={i} x1={25} y1={2 + 30 * i} x2={125} y2={2 + 30 * i} className={innerLinesClassName} />
          ))}
          <rect x={25}  y={2}  width={100} height={300}
            className={classnames('HowWorksInnerRect', {
              HowWorksHidden: index >= 4
            })} />
        </g>
        <g className={rowGroupClassName}>
          {times(10).map((i) => (
            <LabeledRect
              key={i}
              x={25}
              y={2 + i * 30}
              width={100}
              height={30}
              className={classnames({
                HowWorksTopConditionalScrollingFill: i === 2 && index >= 5,
                HowWorksBottomConditionalScrollingFill: i === 6 && index >= 5,
                HowWorksRowNotRendered: i < 2 || i > 5,
                HowWorksRowRendered: i >= 2 && i <= 5
              })}
              textClassName={index >= 5 ? 'HowWorksHidden' : 'HowWorksVisible'}
            >
              {i >= 2 && i <= 5
                ? 'Rendered'
                : 'Not Rendered'
              }
           </LabeledRect>
          ))}
        </g>

        <g>
          <CrossHatchRect x={25} y={0} width={100} height={80} visible={dimmerVisible} />
          <CrossHatchRect x={25} y={170} width={100} height={134} visible={dimmerVisible} />
        </g>

        <g className={outerGroupClassName}>
          <g>
            <line x1={102} y1={72} x2={25} y2={112} className={viewportLineClassName} />
            <line x1={102} y1={158} x2={25} y2={198} className={viewportLineClassName} />
            <line x1={198} y1={72} x2={125} y2={112} className={viewportLineClassName} />
            <line x1={198} y1={158} x2={125} y2={198} className={viewportLineClassName} />
          </g>

          <g className={scrollbarClassName}>
            <rect x={190} y={72} width={10} height={86} className='HowWorksScrollTrack' />
            <rect x={192} y={100} width={5} rx={3} ry={3} height={15} className={thumbClassName} />
          </g>

          <LabeledRect x={100} y={70} width={100} height={90} className='HowWorksOuterRect' mono>
            &lt;ul&gt;
          </LabeledRect>
        </g>
      </g>
    </SvgWrapper>
  );
}
