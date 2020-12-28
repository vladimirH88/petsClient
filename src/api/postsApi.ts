import axios from 'axios';
import { Filter, Post } from '../interfaces';
import {
    CREATE_POST,
    UPDATE_POST,
    POST_LIST,
    POST_BY_ID,
    DELETE_POST,
    GET_PROFILE_POSTS,
    GET_FAVORITES_POSTS,
    ADD_TO_FAVIRITES,
    REMOVE_FROM_FAVORITES,
    GET_FAVORITES_POSTS_IDS,
} from '../constants/apiConstants';

export const fetchPostList = (param: string, direction: string, pageSize: number, pageNumber: number, filter: Filter) => {
    const filterQuery = Object.entries(filter)
        .map(item => item[1]
            .map((param: string) => `&${item[0]}=${param}`)
            .join(''))
        .join('');
    return axios.get(`${POST_LIST}?param=${param}&direction=${direction}&pageSize=${pageSize}&pageNumber=${pageNumber}${filterQuery}`);
};

export const fetchPostById = (id: number) => {
    return axios.get(`${POST_BY_ID}?id=${id}`);
};

export const fetchProfilePostList = (userId: number) => {
    return axios.get(`${GET_PROFILE_POSTS}?id=${userId}`);
};

export const addToFavorites = (userId: number, postId: number) => {
    return axios.post(ADD_TO_FAVIRITES, { userId, postId });
};

export const removeFromFavorites = (userId: number, postId: number) => {
    return axios.delete(`${REMOVE_FROM_FAVORITES}?userId=${userId}&postId=${postId}`);
};

export const fetchFavoritesPosts = (userId: number) => {
    return axios.get(`${GET_FAVORITES_POSTS}?userId=${userId}`);
};

export const fetchFavoritePostIds = (userId: number) => {
    return axios.get(`${GET_FAVORITES_POSTS_IDS}?userId=${userId}`);
};

export const createNewPost = (post: Post) => {
    return axios.post(CREATE_POST, { post });
};

export const updatePost = (post: Post) => {
    return axios.put(UPDATE_POST, { post });
};

export const deletePostById = (postId: number) => {
    return axios.delete(`${DELETE_POST}?postId=${postId}`);
};
