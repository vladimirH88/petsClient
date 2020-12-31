import { Dispatch } from 'react';
import { Store, Post, User } from '../../interfaces';
import ProfilePage from '../../enums/ProfilePage';
import { getUserSelector } from '../common/selectors';
import updateUser from '../../api/userApi';
import { fetchProfilePostList, fetchFavoritesPosts } from '../../api/postsApi';
import {
    SET_PROFILE_PAGE,
    GET_PROFILE_POST,
    GET_FAVORITES_POST,
    SET_EDITING_POST,
    EDIT_USER,
    ISetProfilePage,
    IGetProfilePosts,
    IGetFavoritesPosts,
    ISetEditingPost,
    IEditUser,
} from './constants';

export const setCurrentProfilePageAction = (data: ProfilePage): ISetProfilePage => ({
    type: SET_PROFILE_PAGE,
    payload: data,
});

export const editUserAction = (user: User) => (dispatch: Dispatch<IEditUser>) => {
    updateUser(user)
        .then((res) => {
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: EDIT_USER,
                payload: res.data,
            });
        })
        .catch((err) => console.error(err));
};

export const getProfilePostsAction = (isActive = true) => (
    dispatch: Dispatch<IGetProfilePosts>,
    getState: () => Store,
) => {
    const user = getUserSelector(getState());
    if (user && user.id) {
        fetchProfilePostList(user.id, isActive)
            .then((res) => {
                dispatch({
                    type: GET_PROFILE_POST,
                    payload: res.data,
                });
            })
            .catch((err) => console.error(err));
    }
};

export const setEditingPostAction = (data: Post | null) => (dispatch: Dispatch<ISetEditingPost | ISetProfilePage>) => {
    if (data) {
        dispatch({
            type: SET_PROFILE_PAGE,
            payload: ProfilePage.CREATE_POST,
        });
    }
    dispatch({
        type: SET_EDITING_POST,
        payload: data,
    });
};

export const getFavoritesPostsAction = () => (dispatch: Dispatch<IGetFavoritesPosts>, getState: () => Store) => {
    const user = getUserSelector(getState());
    if (user && user.id) {
        fetchFavoritesPosts(user.id)
            .then((res) => {
                dispatch({
                    type: GET_FAVORITES_POST,
                    payload: res.data,
                });
            })
            .catch((err) => console.error(err));
    }
};
