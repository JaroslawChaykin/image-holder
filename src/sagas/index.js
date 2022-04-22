import {all} from 'redux-saga/effects'
import { imageWatcher } from './ImageSaga';

export function* rootWatcher() {
    yield all([imageWatcher()])
}