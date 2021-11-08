import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import globalReducer from "./reducer";

let rootReducer = combineReducers({
    global: globalReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk));