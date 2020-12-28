import { Dispatch } from 'react';
import { getUserSelector, getSortingDataSelector, getFilterSelector } from '../common/selectors';
import { Store, Filter, Sorting } from '../../interfaces';
import { LimitItemsPerPage } from '../../enums/LimitItemsPerPage';
import { getPostsDataSelector } from './selectors';
import { fetchPostList, fetchPostById, fetchFavoritePostIds } from '../../api/postsApi';
import { GET_POST_LIST, GET_POST_BY_ID, SET_FILTER, SET_LIMIT_PER_PAGE, SET_SORTING, GET_FAVORITE_POST_IDS } from './constants';
import { IGetPostList, IGetPostById, ISetFilter, ISetLimitPerPage, ISetSorting, IGetFavoritePostIds } from './constants';

export const setSorting = (data: Sorting): ISetSorting => {
    return {
        type: SET_SORTING,
        payload: data,
    };
};

export const setLimitPerPage = (data: LimitItemsPerPage): ISetLimitPerPage => {
    return {
        type: SET_LIMIT_PER_PAGE,
        payload: data,
    };
};

export const getPostList = (pageNumber = 1) => {
    return (dispatch: Dispatch<IGetPostList>, getState: () => Store) => {
        const filter = getFilterSelector(getState());
        const postsData = getPostsDataSelector(getState());
        const sorting = getSortingDataSelector(getState());
        const { pageSize } = postsData;
        const { param, direction } = sorting;
        fetchPostList(param, direction, pageSize, pageNumber, filter)
            .then(res => {
                dispatch({
                    type: GET_POST_LIST,
                    payload: res.data.data,
                });
            })
            .catch(err => console.log(err));
    };
};

export const getFavoritePostIds = () => {
    return (dispatch: Dispatch<IGetFavoritePostIds>, getState: () => Store) => {
        const user = getUserSelector(getState());
        if (user && user.id) {
            fetchFavoritePostIds(user.id)
                .then(res => {
                    dispatch({
                        type: GET_FAVORITE_POST_IDS,
                        payload: res.data.data,
                    });
                })
                .catch(err => console.log(err));
        }
    };
};

export const getPostById = (id: number) => {
    return (dispatch: Dispatch<IGetPostById>) => {
        fetchPostById(id)
            .then(res => {
                dispatch({
                    type: GET_POST_BY_ID,
                    payload: res.data.data,
                });
            })
            .catch(err => console.log(err));
    };
};

export const setFilter = (filter: Filter): ISetFilter => ({
    type: SET_FILTER,
    payload: filter,
});
