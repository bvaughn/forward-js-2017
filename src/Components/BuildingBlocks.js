import classnames from 'classnames';
import React from 'react';
import BuildingBlocksSvgWrapper from './BuildingBlocksSvgWrapper';
import LabeledCircle from './LabeledCircle';
import LabeledRect from './LabeledRect';
import './BuildingBlocks.css';

const LIST_ROW_OFFSETS = [10, 60, 110, 160, 210, 260, 310, 360]

export function ListSvg (props) {
  return (
    <BuildingBlocksSvgWrapper
      {...props}
      height={405}
      viewBoxHeight={405}
      viewBoxWidth={280}
      width={280}
    >
      {LIST_ROW_OFFSETS.map((yOffset, index) => (
        <LabeledRect
          key={yOffset}
          x={10}
          y={yOffset}
          width={260}
          height={45}
          className={classnames({
            svgListRow: index < 6,
            svgListRowNotRendered: index >= 6
          })}
        >
          {index < 6
            ? 'Row'
            : 'Hidden'
          }
        </LabeledRect>
      ))}
      <rect x={0} y={274} width={280} height={131} className='svgNotRenderedDimmer' />
    </BuildingBlocksSvgWrapper>
  );
}

const TABLE_COLUMN_TUPLES = [[10, 128], [143, 127]]

export function TableSvg (props) {
  return (
    <BuildingBlocksSvgWrapper
      {...props}
      height={405}
      viewBoxHeight={405}
      viewBoxWidth={280}
      width={280}
    >
      {LIST_ROW_OFFSETS.map((yOffset, index) => (
        TABLE_COLUMN_TUPLES.map(([xOffset, width]) => (
          <LabeledRect
            key={`${xOffset}${yOffset}`}
            x={xOffset}
            y={yOffset}
            width={width}
            height={45}
            className={classnames({
              svgTableHeader: index === 0,
              svgTableColumn: index < 6,
              svgTableColumnNotRendered: index >= 6
            })}
          >
            {index === 0 && 'Header'}
            {index > 0 && index < 6 && 'Column'}
            {index >= 6 && 'Hidden'}
          </LabeledRect>
       ))
      ))}
      <rect x={0} y={274} width={280} height={131} className='svgNotRenderedDimmer' />
    </BuildingBlocksSvgWrapper>
  );
}


const GRID_BOX_OFFSETS = [10, 105, 200]
const HIDDEN_GRID_BOX_OFFSETS = [[295, 10], [295, 105], [295, 200], [10, 295], [105, 295], [200, 295], [295, 295]]

export function GridSvg (props) {
  return (
    <BuildingBlocksSvgWrapper
      {...props}
      height={385}
      viewBoxHeight={385}
      viewBoxWidth={385}
      width={385}
    >
      {GRID_BOX_OFFSETS.map((xOffset, xIndex) => (
        GRID_BOX_OFFSETS.map((yOffset, yIndex) => (
          <LabeledRect
            key={`${xOffset}${yOffset}`}
            x={xOffset}
            y={yOffset}
            width={90}
            height={90}
            className='svgGridBox'
          >
            Cell
         </LabeledRect>
        ))
      ))}
      {HIDDEN_GRID_BOX_OFFSETS.map(([xOffset, yOffset], index) => (
        <LabeledRect
          key={index}
          x={xOffset}
          y={yOffset}
          width={90}
          height={90}
          className='svgGridBoxNotRendered'
        >
          Hidden
       </LabeledRect>
      ))}
      <rect x={274} y={0} width={111} height={274} className='svgNotRenderedDimmer' />
      <rect x={0} y={274} width={385} height={111} className='svgNotRenderedDimmer' />
    </BuildingBlocksSvgWrapper>
  );
}

export function CollectionSvg (props) {
  return (
    <BuildingBlocksSvgWrapper
      {...props}
      height={371}
      viewBoxHeight={371}
      viewBoxWidth={380}
      width={380}
    >
      <LabeledCircle
        cx={70}
        cy={70}
        r={50}
        className='svgCollectionBox'
      >
        Rendered
      </LabeledCircle>
      <LabeledRect
        x={135}
        y={105}
        width={100}
        height={80}
        className='svgCollectionBox'
      >
        Rendered
      </LabeledRect>
      <LabeledRect
        x={20}
        y={210}
        width={240}
        height={50}
        className='svgCollectionBox'
      >
        Rendered
      </LabeledRect>
      <LabeledRect
        x={155}
        y={20}
        width={140}
        height={50}
        className='svgCollectionBox'
      >
        Rendered
      </LabeledRect>
      <LabeledCircle
        cx={340}
        cy={200}
        r={40}
        className='svgCollectionBoxNotRendered'
      >
        Hidden
      </LabeledCircle>
      <LabeledRect
        x={50}
        y={300}
        width={100}
        height={65}
        className='svgCollectionBoxNotRendered'
      >
        Hidden
      </LabeledRect>
      <rect x={274} y={0} width={111} height={274} className='svgNotRenderedDimmer' />
      <rect x={0} y={274} width={385} height={111} className='svgNotRenderedDimmer' />
    </BuildingBlocksSvgWrapper>
  );
}
