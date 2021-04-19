import axios from 'axios';

import actions from '../actions/characterActions'
import actionTypes from '../actionTypes'

const initialState = {
    characters: [],
    selected: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHED_CHARACTERS: {
            return {
                ...state,
                characters: [...action.payload],
            }
        }
        case actionTypes.FETCHED_CHARACTER: {
            return {
                ...state,
                selected: action.payload,
            }
        }
        case actionTypes.REMOVE_CHARACTER: {
            const characters = state.characters.filter(character => character.id != action.payload)
            return {
                ...state,
                characters
            }
        }
        case actionTypes.SELECT_CHARACTER: {
            const selected = state.characters.find(character => character.id == action.payload)
            return {
                ...state,
                selected
            }
        }
        default:
            return state
    }
}

const API_HOST = 'https://rickandmortyapi.com/api'
export async function fetchCharacters(dispatch, getState) {
    const response = await axios.get(`${API_HOST}/character`)
    dispatch(actions.fetchedCharacters(response.data.results))
}

export function fetchCharacter(id) {
    return async (dispatch, getState) => {
        const response = await axios.get(`${API_HOST}/character/${id}`)
        dispatch(actions.fetchedCharacter(response.data))
    }
}

export function removeCharacter(id) {
    return (dispatch, getState) => dispatch(actions.removeCharacter(id))
}

export function selectCharacter(id) {
    return (dispatch, getState) => dispatch(actions.selectCharacter(id))
}
