
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./reducers/RootReducer";
import Statuses from "./dictionaries/actions/Statuses";

let preloadedState = {
    data: {
        general: {
            version: '0.1.0',
            year: 2023
        }
    },
    offers: {
        status: Statuses.idle,
        processes: {
            fetchOne: {
                status: Statuses.idle
            }
        },
        elements: {}
    }
};

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
);

const store = createStore(RootReducer, preloadedState, composedEnhancer);

export default store;