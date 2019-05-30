import reducer from './characterReducers';
import { FETCH_CHARACTERS, FETCH_CHARACTERS_ERROR } from '../actions/characterActions';

describe('characters reducer', () => {
  it('handles fetch characters action', () => {
    const initialState = {
      list: [],
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTERS,
      payload: ['sweet payload']
    });

    expect(newState).toEqual({
      list: ['sweet payload'],
      error: null
    });
  });

  it('handles fetch characters error action', () => {
    const initialState = {
      list: [],
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTERS_ERROR,
      payload: 'error'
    });

    expect(newState).toEqual({
      list: [],
      error: 'error'
    });
  });
});
