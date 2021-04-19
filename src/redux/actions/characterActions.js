import actionTypes from '../actionTypes';

export default {
  fetchedCharacters: (characters)=> ({
    type: actionTypes.FETCHED_CHARACTERS,
    payload: characters
  }),
  fetchedCharacter: (character)=> ({
    type: actionTypes.FETCHED_CHARACTER,
    payload: character
  }),
  removeCharacter: (id) => ({
    type: actionTypes.REMOVE_CHARACTER,
    payload: id
  }),
  selectCharacter: (id) => ({
    type: actionTypes.SELECT_CHARACTER,
    payload: id
  }),
  updateCharacter: (character) => ({
    type: actionTypes.UPDATE_CHARACTER,
    payload: character
  }),
}
