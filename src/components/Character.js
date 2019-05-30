import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
    <div>
      <img src={character.photoUrl}></img>
      <h4>{character.name}</h4>
    </div>
  )
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
