import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class HangingMan extends Component {
  static propTypes = {
    errors: PropTypes.number,
    onFailure: PropTypes.func,
  };

  static defaultProps = {
    errors: 0,
    onFailure: null,
  };

  componentDidUpdate(prevProps) {
    const { errors, onFailure } = this.props;

    if (prevProps.errors !== errors && errors >= 6 && onFailure) {
      onFailure();
    }
  }

  render() {
    const { errors } = this.props;

    return (
      <div className="hanging-man">
        <div className={classNames('man-part', 'body-part', 'hanging-man-leg-left', { invisible: errors < 6 })} />
        <div className={classNames('man-part', 'body-part', 'hanging-man-leg-right', { invisible: errors < 6 })} />
        <div className={classNames('man-part', 'body-part', 'hanging-man-spine', { invisible: errors < 6 })} />
        <div className={classNames('man-part', 'body-part', 'hanging-man-hand-left', { invisible: errors < 6 })} />
        <div className={classNames('man-part', 'body-part', 'hanging-man-hand-right', { invisible: errors < 6 })} />
        <div className={classNames('man-part', 'body-part', 'hanging-man-neck', { invisible: errors < 6 })} />
        <div className={classNames('man-part', 'hanging-man-face', { invisible: errors < 6 })}>
          <img src="/assets/images/face.png" alt="Hangman face" />
        </div>

        <div className={classNames('pole-part', 'hanging-man-rope', { invisible: errors < 5 })} />
        <div className={classNames('pole-part', 'hanging-man-stut', { invisible: errors < 4 })} />
        <div className={classNames('pole-part', 'hanging-man-top', { invisible: errors < 3 })} />
        <div className={classNames('pole-part', 'hanging-man-pole', { invisible: errors < 2 })} />
        <div className={classNames('pole-part', 'hanging-man-base', { invisible: errors < 1 })} />
      </div>
    );
  }
}

export default HangingMan;
