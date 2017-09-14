import React, { Component } from 'react';
import Hangman from '../Hangman';

const words = ['Jorrit', 'Afgestudeerd', 'Held'];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wordIndex: 0,
      success: false,
    };

    this.handleSuccess = this.handleSuccess.bind(this);
  }

  handleSuccess() {
    this.setState({ success: true });

    setTimeout(() => {
      const newIndex = (this.state.wordIndex + 1) % words.length;
      this.setState({ wordIndex: newIndex, success: false });
    }, 1000);
  }

  render() {
    return (
      <div className="app-container">
        <div className="hangman-container">
          <Hangman
            word={words[this.state.wordIndex]}
            onSuccess={this.handleSuccess}
          />
        </div>
      </div>
    );
  }
}

export default App;
