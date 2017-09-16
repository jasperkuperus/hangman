import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HangingMan = props => (
  <div className="hanging-man">
    <div className={classNames('hanging-man-part', 'hanging-man-rope', { invisible: props.errors < 5 })} />
    <div className={classNames('hanging-man-part', 'hanging-man-stut', { invisible: props.errors < 4 })} />
    <div className={classNames('hanging-man-part', 'hanging-man-top', { invisible: props.errors < 3 })} />
    <div className={classNames('hanging-man-part', 'hanging-man-pole', { invisible: props.errors < 2 })} />
    <div className={classNames('hanging-man-part', 'hanging-man-base', { invisible: props.errors < 1 })} />
  </div>
);

HangingMan.propTypes = {
  errors: PropTypes.number,
};

HangingMan.defaultProps = {
  errors: 0,
};

export default HangingMan;
