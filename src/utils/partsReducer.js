import { actionTypes } from "./actionTypes";

export const INITIAL_STATE = {
    loading: false,
    parts: '',
    error: false
};

export const partsReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FETCH_START:
            return {
                ...state,
                loading: true

            }
        case actionTypes.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                parts: action.payload
            }
        case actionTypes.FETCH_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
};