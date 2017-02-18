import React from 'react';

export default function SvgWrapper ({ viewBoxHeight, viewBoxWidth, ...rest }) {
  return (
    <svg
      {...rest}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio='xMinYMax meet'
    />
  );
}

