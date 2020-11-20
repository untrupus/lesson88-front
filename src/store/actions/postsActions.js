import {push} from "connected-react-router";
import {
    FETCH_POSTS_ERROR,
    FETCH_POSTS_SUCCESS,
    ADD_POST_ERROR,
    ADD_COMMENT_SUCCESS,
    FETCH_POST_ERROR,
    FETCH_POST_SUCCESS,
    FETCH_COMMENTS_ERROR,
    FETCH_COMMENTS_SUCCESS
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

const addPostError = error => {
    return {type: ADD_POST_ERROR, error};
};

export const addPost = (data) => {
    return async (dispatch, getState) => {
        const headers = {
            "Authorization": getState().users.user && getState().users.user.user.token
        };
        try {
            await axiosAPI.post('/posts', data, {headers});
            dispatch(addPostError(null));
            dispatch(push("/"));
        } catch (e) {
            dispatch(addPostError(e.response.data));
        }
    };
};

const fetchPostSuccess = value => {
    return {type: FETCH_POST_SUCCESS, value};
};

const fetchPostError = error => {
    return {type: FETCH_POST_ERROR, error};
};

export const fetchPost = (id) => {
    return async dispatch => {
        try {
            const response = await axiosAPI.get("posts/" + id);
            dispatch(fetchPostSuccess(response.data));
        } catch (e) {
            dispatch(fetchPostError(e));
        }
    };
};

const fetchCommentsSuccess = value => {
    return {type: FETCH_COMMENTS_SUCCESS, value};
};

const fetchCommentsError = error => {
    return {type: FETCH_COMMENTS_ERROR, error};
};

export const fetchComments = (id) => {
    return async dispatch => {
        try {
            const response = await axiosAPI.get("comments?post=" + id);
            dispatch(fetchCommentsSuccess(response.data));
        } catch (e) {
            dispatch(fetchCommentsError(e));
        }
    };
};

const addCommentSuccess = (value) => {
  return {type: ADD_COMMENT_SUCCESS, value};
};

export const addComment = (data) => {
    return async (dispatch, getState) => {
        const headers = {
            "Authorization": getState().users.user && getState().users.user.user.token
        };
        try {
            const response = await axiosAPI.post('/comments', data, {headers});
            dispatch(addCommentSuccess(response.data));
        } catch (e) {
            dispatch(addPostError(e));
        }
    };
};

