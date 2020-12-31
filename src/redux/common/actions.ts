import { Dispatch } from 'react';
import { getUserSelector, getSortingDataSelector, getFilterSelector, getPostsDataSelector } from './selectors';
import { Store, Filter, Sorting } from '../../interfaces';
import LimitItemsPerPage from '../../enums/LimitItemsPerPage';

import { fetchPostList, fetchPostById, fetchFavoritePostIds, fetchCategory, fetchRegions } from '../../api/postsApi';
import {
    GET_POST_LIST,
    GET_POST_BY_ID,
    SET_FILTER,
    SET_LIMIT_PER_PAGE,
    SET_SORTING,
    GET_FAVORITE_POST_IDS,
    GET_CATEGORY,
    GET_REGIONS,
    IGetPostList,
    IGetPostById,
    ISetFilter,
    ISetLimitPerPage,
    ISetSorting,
    IGetFavoritePostIds,
    IGetCategories,
    IGetRegions,
} from './constants';

export const setSortingAction = (data: Sorting): ISetSorting => ({
    type: SET_SORTING,
    payload: data,
});

export const setLimitPerPageAction = (data: LimitItemsPerPage): ISetLimitPerPage => ({
    type: SET_LIMIT_PER_PAGE,
    payload: data,
});

export const getPostListAction = (pageNumber = 1) => (dispatch: Dispatch<IGetPostList>, getState: () => Store) => {
    const filter = getFilterSelector(getState());
    const postsData = getPostsDataSelector(getState());
    const sorting = getSortingDataSelector(getState());
    const { pageSize } = postsData;
    const { param, direction } = sorting;
    fetchPostList(param, direction, pageSize, pageNumber, filter)
        .then((res) => {
            dispatch({
                type: GET_POST_LIST,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};

export const getCategoryListAction = () => (dispatch: Dispatch<IGetCategories>) => {
    fetchCategory()
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

export const getFavoritePostIdsAction = () => (dispatch: Dispatch<IGetFavoritePostIds>, getState: () => Store) => {
    const user = getUserSelector(getState());
    if (user && user.id) {
        fetchFavoritePostIds(user.id)
            .then((res) => {
                dispatch({
                    type: GET_FAVORITE_POST_IDS,
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

export const setFilterAction = (filter: Filter): ISetFilter => ({
    type: SET_FILTER,
    payload: filter,
});
