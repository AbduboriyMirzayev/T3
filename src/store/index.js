import {createStore,combineReducers} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from './auth/reducers';


const persistConfig = {
    key: 'root',
    storage,
  }

  let rootReducer = combineReducers({
    auth:authReducer,
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer);

const createAppStore = () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return { store, persistor }
};

export default createAppStore;