import {createStore,combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger';

import authReducer from './auth/reducers';


let rootReducer = combineReducers({
    auth:authReducer,
})

let store = createStore(rootReducer,applyMiddleware(logger));


export default store;

