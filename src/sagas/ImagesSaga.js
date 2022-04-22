import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchImagesWorker() {
    yield new Promise(res => setTimeout(res, 1000))
    const responses = yield [1, 2, 3, 4].map(item => axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${item}&_limit=6`))
    const imagesPromises = yield Promise.all(responses)
    const arrOfPromisesImageData = imagesPromises.map((item) => item.data)
    yield put({type: 'ADD_IMAGES', payload: arrOfPromisesImageData});
}

export function* imagesWatcher() {
    yield takeEvery('ASYNC_ADD_IMAGES', fetchImagesWorker);
}