import {all} from 'redux-saga/effects'
import { imageWatcher } from './ImageSaga';
import { imagesWatcher } from './ImagesSaga';

export function* rootWatcher() {
    yield all([imageWatcher(), imagesWatcher()])
}