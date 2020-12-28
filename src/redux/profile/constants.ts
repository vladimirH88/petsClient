import { ProfilePage } from '../../enums/ProfilePage';
import { Post, User } from '../../interfaces';

export const SET_PROFILE_PAGE = 'SET_PROFILE_PAGE';
export const GET_PROFILE_POST = 'GET_PROFILE_POST';

export const GET_FAVORITES_POST = 'GET_FAVORITES_POST';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

export const CREATE_POST = 'CREATE_POST';
export const SET_EDITING_POST = 'SET_EDITING_POST';
export const EDIT_POST = 'EDIT_POST';

export const EDIT_USER = 'EDIT_USER';

export type ISetProfilePage = { type: typeof SET_PROFILE_PAGE, payload: ProfilePage };
export type IGetProfilePosts = { type: typeof GET_PROFILE_POST, payload: Post[] };

export type IAddToFavorites = { type: typeof ADD_TO_FAVORITES, payload: Post[] };
export type IRemoveFromFavorites = { type: typeof REMOVE_FROM_FAVORITES, payload: Post[] };
export type IGetFavoritesPosts = { type: typeof GET_FAVORITES_POST, payload: Post[] };

export type ICreatePost = { type: typeof CREATE_POST, payload: Post };
export type IEditPost = { type: typeof EDIT_POST, payload: Post };
export type ISetEditingPost = { type: typeof SET_EDITING_POST, payload: Post | null };

export type IEditUser = { type: typeof EDIT_USER, payload: User };

export type ITypes = ISetProfilePage
    | IGetProfilePosts
    | IAddToFavorites
    | IRemoveFromFavorites
    | IGetFavoritesPosts
    | ICreatePost
    | IEditPost
    | ISetEditingPost
    | IEditUser;
