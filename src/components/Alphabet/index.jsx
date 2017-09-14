import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from 'lodash';

const Alphabet = props => {
  const renderLetter = (letterIndex) => {
    const letter = String.fromCharCode(97 + letterIndex);

    return (
      <div
        key={letter}
        className={classNames('letter', { guessed: props.guessedLetters.includes(letter) })}>
        {letter}
      </div>
    );
  };


  return (
    <div className="alphabet">
      {_.range(26).map(renderLetter)}
    </div>
  );
}

Alphabet.propTypes = {
  guessedLetters: PropTypes.array,
};

Alphabet.defaultProps = {
  guessedLetters: [],
};

export default Alphabet;
