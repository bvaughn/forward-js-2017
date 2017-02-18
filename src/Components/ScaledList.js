import classnames from 'classnames';
import times from 'lodash.times';
import React from 'react';
import './ScaledList.css';

export default ({ scaled = false }) => (
  <div>
    <div className={classnames('TopGroup', {
      TopGroupScaled: scaled
    })}>
      {times(3).map((index) => (
        <div className='UnscaledListItem' key={index} />
      ))}
    </div>

    <div className={classnames('MiddleGroup', {
      MiddleGroupScaled: scaled
    })}>
      {times(4).map((index) => (
        <div className='UnscaledListItemActive' key={index} />
      ))}

      <div className='OuterScrollContainer' />
    </div>

    <div className={classnames('BottomGroup', {
      BottomGroupScaled: scaled
    })}>
      {times(5).map((index) => (
        <div className='UnscaledListItem' key={index} />
      ))}
    </div>
  </div>
);
