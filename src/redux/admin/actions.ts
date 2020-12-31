import { Dispatch } from 'react';

import AdminPage from '../../enums/AdminPage';
import {
    SET_ADMIN_PAGE,
    GET_NOT_AGREED_POSTS,
    GET_CATEGORY,
    GET_REGIONS,
    GET_POST_BY_ID,
    ISetAdminPage,
    IGetPosts,
    IGetCategory,
    IGetRegions,
    IGetPostById,
} from './constants';

import { Store } from '../../interfaces';
import { fetchPostList, fetchCategories, fetchRegions, fetchPostById } from '../../api/adminApi';
import { getUserSelector, getPostsDataSelector } from './selectors';

export const setCurrentPageAction = (data: AdminPage): ISetAdminPage => ({
    type: SET_ADMIN_PAGE,
    payload: data,
});

export const getPostListAction = (pageNumber = 1) => (dispatch: Dispatch<IGetPosts>, getState: () => Store) => {
    const user = getUserSelector(getState());
    const postsData = getPostsDataSelector(getState());
    const { pageSize } = postsData;
    if (user && user.id) {
        fetchPostList(pageSize, pageNumber)
            .then((res) => {
                dispatch({
                    type: GET_NOT_AGREED_POSTS,
                    payload: res.data,
                });
            })
            .catch((err) => console.log(err));
    }
};

export const getPostByIdAction = (id: number) => (dispatch: Dispatch<IGetPostById>) => {
    fetchPostById(id)
        .then((res) => {
            dispatch({
                type: GET_POST_BY_ID,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};

export const getCategoryListAction = () => (dispatch: Dispatch<IGetCategory>) => {
    fetchCategories()
        .then((res) => {
            dispatch({
                type: GET_CATEGORY,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};

export const getRegionListAction = () => (dispatch: Dispatch<IGetRegions>) => {
    fetchRegions()
        .then((res) => {
            dispatch({
                type: GET_REGIONS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};
