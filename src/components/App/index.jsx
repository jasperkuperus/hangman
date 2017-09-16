import React, { Component } from 'react';
import Hangman from '../Hangman';
import words from '../../words';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wordIndex: 0,
      done: false,
      success: false,
      failure: false,
    };

    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleFailure = this.handleFailure.bind(this);
    this.keyListener = this.keyListener.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyListener);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyListener);
  }

  keyListener(event) {
    const { failure, success, done } = this.state;

    // When pressing space, go for next word
    if ((failure || success || done) && event.keyCode === 32) {
      this.nextWord();
    }
  }

  handleSuccess() {
    this.setState({ success: true });
  }

  handleFailure() {
    this.setState({ failure: true });
  }

  nextWord() {
    const { done, wordIndex } = this.state;

    if (!done && wordIndex + 1 >= words.length) {
      this.setState({ done: true });
    } else {
      this.setState({
        done: false,
        success: false,
        failure: false,
        wordIndex: (wordIndex + 1) % words.length,
      });
    }
  }

  render() {
    const { done, success, failure } = this.state;

    return (
      <div className="app-container">
        {!done &&
          <div className="hangman-container">
            <Hangman
              word={words[this.state.wordIndex]}
              onSuccess={this.handleSuccess}
              onFailure={this.handleFailure}
            />

            {(success || failure) &&
              <div className="space-to-continue">
                Press space to continue...
              </div>
            }
          </div>
        }

        {done &&
          <div className="game-done">
            <h1>Yay</h1>
            <h2>Game done!</h2>

            <div className="space-to-continue">
              Again? Press space to continue...
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App;
