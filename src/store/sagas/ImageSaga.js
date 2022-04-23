import { put, takeEvery, call, delay } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_IMAGE, ASYNC_ADD_COMMENTS, ASYNC_ADD_IMAGE, ADD_COMMENTS } from '../actions';

function* fetchImageWorker(action) {
    yield put({type: ADD_IMAGE, payload: null});
    // yield delay(500)
    const {data} = yield call(axios.get, `https://jsonplaceholder.typicode.com/photos/${action.payload}`);
    yield put({type: ADD_IMAGE, payload: data});
    yield call(fetchCommentsWorker, data.id);
}

function* fetchCommentsWorker(action) {
    yield put({type: ADD_COMMENTS, payload: null});
    const { data } = yield call(axios.get, `https://jsonplaceholder.typicode.com/comments?postId=${action}`);
    if(data.length === 0) {
        yield put({type: ADD_COMMENTS, payload: null});
    } else {
        yield put({type: ADD_COMMENTS, payload: data});
    }
}

export function* imageWatcher() {
    yield takeEvery(ASYNC_ADD_IMAGE, fetchImageWorker);
}