const defaultState = {
    images: null
}

const ImagesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_IMAGES":
            return {...state, images: action.payload}
        default:
            return state
    }
}
export default ImagesReducer