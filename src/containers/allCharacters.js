import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Characters from '../components/Characters';
import { getCharacters, getCharactersError } from '../selectors/characterSelectors';
import { fetchCharacters } from '../actions/characterActions';

class AllCharacters extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired,
    error: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { characters } = this.props;
    return <Characters characters={characters} />;
  }
}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  error: getCharactersError(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
