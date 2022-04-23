import { ADD_COMMENTS, ADD_IMAGE } from '../actions';

const defaultState = {
    image: null,
    comments: null
}

const ImageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_IMAGE:
            return {...state, image: action.payload}
        case ADD_COMMENTS:
            return {...state, comments: action.payload}
        default:
            return state
    }
}
export default ImageReducer