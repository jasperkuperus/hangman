import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';
import HangingMan from '../HangingMan';
import Alphabet from '../Alphabet';

class Hangman extends Component {
  static propTypes = {
    word: PropTypes.string.isRequired,
    onSuccess: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = this.createInitialState(props.word);

    this.keyListener = this.keyListener.bind(this);
    this.renderLetter = this.renderLetter.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyListener);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyListener);
  }

  componentDidUpdate() {
    if (this.state.word !== this.props.word) {
      this.setState(this.createInitialState(this.props.word));
    }
  }

  createInitialState(word) {
    return {
      word,
      letters: word.split('').map(letter => letter.toLowerCase()),
      guesses: [],
    };
  }

  keyListener(event) {
    const { letters } = this.state;

    if (event.keyCode >= 65 && event.keyCode <= 90) {
      const newGuesses = this.state.guesses.concat([event.key.toLowerCase()]);
      this.setState({ guesses: newGuesses });

      if (_.difference(letters, newGuesses).length === 0) {
        this.props.onSuccess();
      }
    }
  }

  renderLetter(letter, index) {
    const { guesses } = this.state;
    const letterAvailable = guesses.includes(letter);

    return (
      <div key={index} className={classNames('word-letter', { letter_available: letterAvailable })}>
        { letterAvailable ? letter : '_'}
      </div>
    );
  }

  calculateErrors() {
    return _.difference(this.state.guesses, this.state.letters).length;
  }

  render() {
    const word = this.props.word.toLowerCase();
    const { guesses } = this.state;

    return (
      <div className="hangman">
        <HangingMan errors={this.calculateErrors()} />

        {/* FIXME: This to its own component! */}
        <div className="letters">
          {word.split('').map(this.renderLetter)}
        </div>

        <Alphabet
          guessedLetters={guesses}
        />
      </div>
    );
  }
}

export default Hangman;
