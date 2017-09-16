import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HangingMan = props => (
  <div className="hanging-man">
    <div className={classNames('man-part', 'body-part', 'hanging-man-leg-left', { invisible: props.errors < 6 })} />
    <div className={classNames('man-part', 'body-part', 'hanging-man-leg-right', { invisible: props.errors < 6 })} />
    <div className={classNames('man-part', 'body-part', 'hanging-man-spine', { invisible: props.errors < 6 })} />
    <div className={classNames('man-part', 'body-part', 'hanging-man-hand-left', { invisible: props.errors < 6 })} />
    <div className={classNames('man-part', 'body-part', 'hanging-man-hand-right', { invisible: props.errors < 6 })} />
    <div className={classNames('man-part', 'body-part', 'hanging-man-neck', { invisible: props.errors < 6 })} />
    <div className={classNames('man-part', 'hanging-man-face', { invisible: props.errors < 6 })}>
      <img src="/assets/images/face.png" alt="Hangman face" />
    </div>

    <div className={classNames('pole-part', 'hanging-man-rope', { invisible: props.errors < 5 })} />
    <div className={classNames('pole-part', 'hanging-man-stut', { invisible: props.errors < 4 })} />
    <div className={classNames('pole-part', 'hanging-man-top', { invisible: props.errors < 3 })} />
    <div className={classNames('pole-part', 'hanging-man-pole', { invisible: props.errors < 2 })} />
    <div className={classNames('pole-part', 'hanging-man-base', { invisible: props.errors < 1 })} />
  </div>
);

HangingMan.propTypes = {
  errors: PropTypes.number,
};

HangingMan.defaultProps = {
  errors: 0,
};

export default HangingMan;
