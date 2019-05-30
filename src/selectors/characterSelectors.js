export const getCharactersState = state => state.characters;
export const getCharacters = state => getCharactersState(state).list;
export const getCharactersError = state => getCharactersState(state).error;
