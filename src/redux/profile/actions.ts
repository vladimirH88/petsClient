import { Dispatch } from 'react';
import { Store, Post, User } from '../../interfaces';
import { ProfilePage } from '../../enums/ProfilePage';
import { getUserSelector } from '../common/selectors';
import { updateUser } from '../../api/userApi';
import { fetchProfilePostList, fetchFavoritesPosts, removeFromFavorites, addToFavorites, createNewPost, updatePost, deletePostById } from '../../api/postsApi';
import { SET_PROFILE_PAGE, GET_PROFILE_POST, GET_FAVORITES_POST, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, CREATE_POST, EDIT_POST, SET_EDITING_POST, EDIT_USER } from './constants';
import { ISetProfilePage, IGetProfilePosts, IGetFavoritesPosts, IAddToFavorites, IRemoveFromFavorites, ICreatePost, IEditPost, ISetEditingPost, IEditUser } from './constants';

export const setCurrentProfilePage = (data: ProfilePage): ISetProfilePage => {
    return {
        type: SET_PROFILE_PAGE,
        payload: data,
    };
};

export const editUser = (user: User) => {
    return (dispatch: Dispatch<IEditUser>) => {
        updateUser(user)
            .then(res => {
                localStorage.setItem('user', JSON.stringify(user));
                dispatch({
                    type: EDIT_USER,
                    payload: res.data.data,
                });
            })
            .catch(err => console.log(err));
    };
};

export const deletePost = (id: number) => {
    return (dispatch: Dispatch<any>) => {
        deletePostById(id)
            .then(() => {
                dispatch(getProfilePosts());
            })
    };
};

export const setEditingPost = (data: Post | null) => {
    return (dispatch: Dispatch<ISetEditingPost | ISetProfilePage>) => {
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
};

export const createPost = (post: Post) => {
    return (dispatch: Dispatch<ICreatePost>) => {
        createNewPost(post)
            .then(res => {
                dispatch({
                    type: CREATE_POST,
                    payload: res.data.data,
                });
            })
            .catch(err => console.log(err));
    };
};

export const editPost = (post: Post) => {
    return (dispatch: Dispatch<IEditPost>) => {
        updatePost(post)
            .then(res => {
                dispatch({
                    type: EDIT_POST,
                    payload: res.data.data,
                });
            })
            .catch(err => console.log(err));
    };
};

export const getProfilePosts = () => {
    return (dispatch: Dispatch<IGetProfilePosts>, getState: () => Store) => {
        const user = getUserSelector(getState());
        if (user && user.id) {
            fetchProfilePostList(user.id)
                .then(res => {
                    dispatch({
                        type: GET_PROFILE_POST,
                        payload: res.data.data,
                    });
                })
                .catch(err => console.log(err));
        }
    };
};

export const getFavoritesPosts = () => {
    return (dispatch: Dispatch<IGetFavoritesPosts>, getState: () => Store) => {
        const user = getUserSelector(getState());
        if (user && user.id) {
            fetchFavoritesPosts(user.id)
                .then(res => {
                    dispatch({
                        type: GET_FAVORITES_POST,
                        payload: res.data.data,
                    });
                })
                .catch(err => console.log(err));
        }
    };
};

export const addPostToFavorites = (postId: number) => {
    return (dispatch: Dispatch<IAddToFavorites>, getState: () => Store) => {
        const user = getUserSelector(getState());
        if (user && user.id) {
            addToFavorites(user.id, postId)
                .then(res => {
                    dispatch({
                        type: ADD_TO_FAVORITES,
                        payload: res.data.data,
                    });
                })
                .catch(err => console.log(err));
        }
    };
};

export const removePostFromFavorites = (postId: number) => {
    return (dispatch: Dispatch<IRemoveFromFavorites>, getState: () => Store) => {
        const user = getUserSelector(getState());
        if (user && user.id) {
            removeFromFavorites(user!.id, postId)
                .then(res => {
                    dispatch({
                        type: REMOVE_FROM_FAVORITES,
                        payload: res.data.data,
                    });
                })
                .catch(err => console.log(err));
        }
    };
};
