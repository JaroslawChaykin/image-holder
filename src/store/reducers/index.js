import { combineReducers } from 'redux';
import ImagesReducer from './imagesReducer';
import ImageReducer from './ImageReducer';

export const rootReducer = combineReducers({
    images: ImagesReducer,
    image: ImageReducer
})