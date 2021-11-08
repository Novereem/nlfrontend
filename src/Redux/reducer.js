import {Actions} from "./actions";


const initialState = {
    api: undefined
}

export default function globalReducer (state = initialState, action) {
    switch (action.type) {
        case Actions.setAPI:
            return {...state, api:action.payload.api}
        default:
            return state
    }
}