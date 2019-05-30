import { FETCH_CHARACTERS, FETCH_CHARACTERS_ERROR } from '../actions/characterActions';

const initialState = {
  list: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTERS:
      return { ...state, error: null, list: action.payload };
    case FETCH_CHARACTERS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
