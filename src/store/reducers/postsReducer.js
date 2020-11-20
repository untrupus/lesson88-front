import {
    FETCH_POSTS_ERROR,
    FETCH_POSTS_SUCCESS,
    FETCH_POST_ERROR,
    FETCH_POST_SUCCESS,
    FETCH_COMMENTS_ERROR,
    FETCH_COMMENTS_SUCCESS
} from "../actionTypes";

const initialState = {
    posts: [],
    comments: [],
    singlePost: {},
    singlePostError: null,
    error: null,
};

const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {...state, posts: action.value};
        case FETCH_POSTS_ERROR:
            return {...state, error: action.error};
        case FETCH_POST_SUCCESS:
            return {...state, singlePost: action.value};
        case FETCH_POST_ERROR:
            return {...state, singlePostError: action.error};
        case FETCH_COMMENTS_SUCCESS:
            return {...state, comments: action.value};
        case FETCH_COMMENTS_ERROR:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default artistsReducer;