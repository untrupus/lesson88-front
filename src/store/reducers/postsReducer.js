import {
    FETCH_POSTS_ERROR,
    FETCH_POSTS_SUCCESS,

} from "../actionTypes";

const initialState = {
    posts: [],
    comments: [],
    error: null,
};

const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {...state, posts: action.value};
        case FETCH_POSTS_ERROR:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default artistsReducer;