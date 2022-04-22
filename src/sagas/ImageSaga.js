import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchImageWorker(action) {
    yield new Promise(res => setTimeout(res, 2000))
    const response = yield axios.get(`https://jsonplaceholder.typicode.com/photos/${action.payload}`);
    yield put({type: 'ADD_IMAGE', payload: response.data});
}

export function* imageWatcher() {
    yield takeEvery('ASYNC_ADD_IMAGE', fetchImageWorker);
}