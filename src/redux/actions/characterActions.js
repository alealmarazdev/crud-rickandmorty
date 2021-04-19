import actionTypes from '../actionTypes';

export default {
  fetchedCharacters: (characters)=> ({
    type: actionTypes.FETCHED_CHARACTERS,
    payload: characters
  }),
}
