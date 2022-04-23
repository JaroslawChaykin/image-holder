import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from './sagas';
import { rootReducer } from './reducers';

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__  ?  window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
))

sagaMiddleware.run(rootWatcher)
