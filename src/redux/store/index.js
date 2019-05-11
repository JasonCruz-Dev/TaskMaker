import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel1
}
const persistedReducer = persistReducer(persistConfig, reducers)
// const store = createStore(
//     reducers,
//     {},
//     compose(applyMiddleware(thunk))
// );
export default () => {
    let store = createStore(persistedReducer, {}, compose(applyMiddleware(thunk)));
    let persistor = persistStore(store);
    return { store, persistor }
}

// export default store;