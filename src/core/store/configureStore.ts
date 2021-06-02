import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';
import { persistStore } from 'redux-persist';
import persisReducers from '../reducers/persisReducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persisReducers(rootReducer), applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
