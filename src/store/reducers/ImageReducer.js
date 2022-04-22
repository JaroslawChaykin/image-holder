const defaultState = {
    image: {}
}

const ImageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_IMAGE":
            return {...state, image: action.payload}
        default:
            return state
    }
}
export default ImageReducer