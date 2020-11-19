import {
    FETCH_POSTS_ERROR,
    FETCH_POSTS_SUCCESS,

} from "../actionTypes";

import axiosAPI from "../../axiosAPI";

const fetchPostsSuccess = value => {
    return {type: FETCH_POSTS_SUCCESS, value};
};

const fetchPostsError = error => {
    return {type: FETCH_POSTS_ERROR, error};
};

export const fetchPosts = () => {
    return async dispatch => {
        try {
            const response = await axiosAPI.get("posts");
            dispatch(fetchPostsSuccess(response.data));
        } catch (e) {
            dispatch(fetchPostsError(e));
        }
    };
};