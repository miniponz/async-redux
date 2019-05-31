export const getCharactersState = state => state;
export const getCharacters = state => getCharactersState(state).list;
export const getCharactersError = state => getCharactersState(state).error;
