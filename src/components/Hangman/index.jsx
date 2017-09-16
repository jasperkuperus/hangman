import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import HangingMan from '../HangingMan';
import Alphabet from '../Alphabet';
import Word from '../Word';

class Hangman extends Component {
  static propTypes = {
    word: PropTypes.string.isRequired,
    showWordOnFailure: PropTypes.bool,
    onSuccess: PropTypes.func,
    onFailure: PropTypes.func,
  };

  static defaultProps = {
    showWordOnFailure: true,
    onSuccess: null,
    onFailure: null,
  };

  constructor(props) {
    super(props);

    this.state = this.createInitialState(props.word);

    this.keyListener = this.keyListener.bind(this);
    this.handleFailure = this.handleFailure.bind(this);
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
      failure: false,
      letters: word.split('').map(letter => letter.toLowerCase()),
      guesses: [],
    };
  }

  keyListener(event) {
    const { letters, guesses } = this.state;
    const key = event.key.toLowerCase();

    if (event.keyCode >= 65 && event.keyCode <= 90 && !guesses.includes(key)) {
      const newGuesses = guesses.concat([key]);
      this.setState({ guesses: newGuesses });

      if (_.difference(letters, newGuesses).length === 0 && this.props.onSuccess) {
        this.props.onSuccess();
      }
    }
  }

  handleFailure() {
    if (this.props.onFailure) {
      this.props.onFailure();
    }

    this.setState({ failure: true });
  }

  calculateErrors() {
    return _.difference(this.state.guesses, this.state.letters).length;
  }

  render() {
    const word = this.props.word.toLowerCase();
    const { guesses, failure } = this.state;
    const { showWordOnFailure } = this.props;

    return (
      <div className="hangman">
        <HangingMan
          errors={this.calculateErrors()}
          onFailure={this.handleFailure}
        />

        <Word
          word={word}
          show={failure && showWordOnFailure}
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
