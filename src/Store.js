
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./reducers/RootReducer";

let preloadedState = {
    data: {
        general: {
            version: '0.1.0',
            year: 2023
        }
    }
};

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
);

const store = createStore(RootReducer, preloadedState, composedEnhancer);

export default store;