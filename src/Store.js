
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./reducers/RootReducer";
import Statuses from "./dictionaries/actions/Statuses";
import Variables from "./dictionaries/actions/Variables";

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
        categoriesStatus: Statuses.idle,
        elements: {},
        categories: {},
    },
    user: {
        me: {
            token: sessionStorage.getItem(Variables.SESSION_STORAGE_API_TOKEN_KEY)
        }
    }
};

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
);

const store = createStore(RootReducer, preloadedState, composedEnhancer);

export default store;