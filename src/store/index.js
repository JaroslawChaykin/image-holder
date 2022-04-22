import {createStore, combineReducers} from 'redux'
import ImagesReducer from './reducers/imagesReducer';
import ImageReducer from './reducers/ImageReducer';

const rootReducer = combineReducers({
    images: ImagesReducer,
    image: ImageReducer
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(rootReducer, devTools)
