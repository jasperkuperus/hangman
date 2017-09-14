import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import HangingMan from '../HangingMan';
import Alphabet from '../Alphabet';
import Word from '../Word';

class Hangman extends Component {
  static propTypes = {
    word: PropTypes.string.isRequired,
    onSuccess: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = this.createInitialState(props.word);

    this.keyListener = this.keyListener.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyListener);
  }

  componentDidUpdate() {
    if (this.state.word !== this.props.word) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(this.createInitialState(this.props.word));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyListener);
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

  calculateErrors() {
    return _.difference(this.state.guesses, this.state.letters).length;
  }

  render() {
    const word = this.props.word.toLowerCase();
    const { guesses } = this.state;

    return (
      <div className="hangman">
        <HangingMan errors={this.calculateErrors()} />

        <Word
          word={word}
          guessedLetters={guesses}
        />

        <Alphabet
          guessedLetters={guesses}
        />
      </div>
    );
  }
}

export default Hangman;
