import {Actions} from "./actions";


const initialState = {
    api: undefined,
    apiTut: undefined
}

export default function globalReducer (state = initialState, action) {
    switch (action.type) {
        case Actions.setAPI:
            return {...state, api:action.payload.api}
        case Actions.setAPITUT:
            return {...state, apiTut:action.payload.apiTut}
        default:
            return state
    }
}