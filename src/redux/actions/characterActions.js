import actionTypes from '../actionTypes';

export default {
  fetchedCharacters: (characters)=> ({
    type: actionTypes.FETCHED_CHARACTERS,
    payload: characters
  }),
  removeCharacter: (id) => ({
    type: actionTypes.REMOVE_CHARACTER,
    payload: id
  }),
}
