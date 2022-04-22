import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ImagesReducer from './reducers/imagesReducer';
import ImageReducer from './reducers/ImageReducer';
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../sagas';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    images: ImagesReducer,
    image: ImageReducer
})

export const store = createStore(rootReducer, compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__  ?  window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
))

sagaMiddleware.run(rootWatcher)
