import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Word = (props) => {
  const { word, guessedLetters } = props;

  const renderLetter = (letter, index) => {
    const letterAvailable = guessedLetters.includes(letter);

    return (
      <div key={index} className={classNames('word-letter', { letter_available: letterAvailable })}>
        { letterAvailable ? letter : '_'}
      </div>
    );
  };

  return (
    <div className="word">
      {word.split('').map(renderLetter)}
    </div>
  );
};

Word.propTypes = {
  word: PropTypes.string.isRequired,
  guessedLetters: PropTypes.array.isRequired,
};

export default Word;
