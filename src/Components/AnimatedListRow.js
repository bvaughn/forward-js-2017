import cn from 'classnames';
import React, { Component, PropTypes } from 'react';
import './AnimatedListRow.css';

export default class AnimatedListRow extends Component {
  static propTypes = {
    direction: PropTypes.number.isRequired,
    invisible: PropTypes.bool.isRequired,
    iteration: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    overscan: PropTypes.bool.isRequired
  };

  componentWillUpdate (nextProps, nextState) {
    const { direction, invisible, iteration, overscan } = this.props;

    if (iteration !== nextProps.iteration) {
        this._transitionClass = null
    } else if (direction !== 0) {
      if (invisible && !nextProps.invisible) {
        this._transitionClass = 'TransitionToVisible'
      } else if (!overscan && nextProps.overscan) {
        this._transitionClass = 'TransitionToOverscan'
      }
    }
  }

  render () {
    const { invisible, label, overscan } = this.props;

    const className = cn('AnimatedListRow', this._transitionClass, {
      'AnimatedList--Invisible': invisible,
      'AnimatedList--Overscan': overscan
    });

    return (
      <div className={className}>
        {label}
      </div>
    );
  }
}
