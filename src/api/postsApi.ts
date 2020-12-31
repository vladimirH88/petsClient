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
    GET_CATEGORIES_LIST,
    GET_REGIONS_LIST,
} from '../constants/apiConstants';

export const fetchPostList = (
    param: string,
    direction: string,
    pageSize: number,
    pageNumber: number,
    filter: Filter,
) => {
    // const filterQuery: string = Object.entries(filter)
    //     .map((item): string => item[1].map((value: string): string => `&${item[0]}=${value}`).join(''))
    //     .join('');
    const filterAsArray: [string, string[]][] = Object.entries(filter);
    const params = filterAsArray.map((item): string =>
        item[1].map((value: string): string => `&${item[0]}=${value}`).join(''),
    );
    const filterQuery = params.join('');
    return axios.get(
        `${POST_LIST}?param=${param}&direction=${direction}&pageSize=${pageSize}&pageNumber=${pageNumber}${filterQuery}`,
    );
};

export const fetchPostById = (id: number) => axios.get(`${POST_BY_ID}?id=${id}`);

export const fetchProfilePostList = (userId: number, isActive: boolean) =>
    axios.get(`${GET_PROFILE_POSTS}?id=${userId}&isActive=${!!isActive}`);

export const addToFavorites = (userId: number, postId: number) => axios.post(ADD_TO_FAVIRITES, { userId, postId });

export const removeFromFavorites = (userId: number, postId: number) =>
    axios.delete(`${REMOVE_FROM_FAVORITES}?userId=${userId}&postId=${postId}`);

export const fetchFavoritesPosts = (userId: number) => axios.get(`${GET_FAVORITES_POSTS}?userId=${userId}`);

export const fetchFavoritePostIds = (userId: number) => axios.get(`${GET_FAVORITES_POSTS_IDS}?userId=${userId}`);

export const createNewPost = (post: Post) => axios.post(CREATE_POST, { post });

export const editPost = (post: Post) => axios.put(UPDATE_POST, { post });

export const deletePostById = (postId: number) => axios.delete(`${DELETE_POST}?postId=${postId}`);

export const fetchCategory = () => axios.get(GET_CATEGORIES_LIST);

export const fetchRegions = () => axios.get(GET_REGIONS_LIST);
