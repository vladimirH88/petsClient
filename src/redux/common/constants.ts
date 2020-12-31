import LimitItemsPerPage from '../../enums/LimitItemsPerPage';
import { Post, Sorting, PostListData, Filter, SelectItem } from '../../interfaces';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const REGISTRATION = 'REGISTRATION';

export const GET_POST_LIST = 'GET_POST_LIST';
export const GET_POST_BY_ID = 'GET_POST_BY_ID';
export const GET_FAVORITE_POST_IDS = 'GET_FAVORITE_POST_IDS';

export const SET_SORTING = 'SET_SORTING';
export const SET_LIMIT_PER_PAGE = 'SET_LIMIT_PER_PAGE';
export const SET_FILTER = 'SET_FILTER';

export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_REGIONS = 'GET_REGIONS';

export type ILogOut = { type: typeof LOG_OUT };
export type ILogIn = { type: typeof LOG_IN; payload: { email: string; password: string } };
export type IRegistration = {
    type: typeof REGISTRATION;
    payload: { email: string; password: string; nickName: string };
};

export type IGetPostList = { type: typeof GET_POST_LIST; payload: PostListData };
export type IGetPostById = { type: typeof GET_POST_BY_ID; payload: Post };
export type IGetFavoritePostIds = { type: typeof GET_FAVORITE_POST_IDS; payload: number[] };

export type ISetFilter = { type: typeof SET_FILTER; payload: Filter };

export type ISetSorting = { type: typeof SET_SORTING; payload: Sorting };
export type ISetLimitPerPage = { type: typeof SET_LIMIT_PER_PAGE; payload: LimitItemsPerPage };

export type IGetRegions = { type: typeof GET_REGIONS; payload: SelectItem[] };
export type IGetCategories = { type: typeof GET_CATEGORY; payload: SelectItem[] };

export type ITypes =
    | ILogIn
    | ILogOut
    | IRegistration
    | IGetPostList
    | IGetPostById
    | IGetFavoritePostIds
    | ISetFilter
    | ISetSorting
    | ISetLimitPerPage
    | IGetRegions
    | IGetCategories;
