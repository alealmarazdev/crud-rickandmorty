import axios from 'axios';

import actions from '../actions/characterActions'
import actionTypes from '../actionTypes'

const initialState = {
    characters: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHED_CHARACTERS: {
            return {
                ...state,
                characters: [...action.payload],
            }
        }
        default:
            return state
    }
}

export async function fetchCharacters(dispatch, getState) {
    const response = await axios.get('https://rickandmortyapi.com/api/character')
    dispatch(actions.fetchedCharacters(response.data.results))
}
