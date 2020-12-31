import AdminPage from '../../enums/AdminPage';
import { Post, SelectItem } from '../../interfaces';

export const SET_ADMIN_PAGE = 'SET_ADMIN_PAGE';
export const GET_NOT_AGREED_POSTS = 'GET_NOT_AGREED_POSTS';
export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_REGIONS = 'GET_REGIONS';
export const GET_POST_BY_ID = 'GET_POST_BY_ID';

export type ISetAdminPage = { type: typeof SET_ADMIN_PAGE; payload: AdminPage };
export type IGetPosts = { type: typeof GET_NOT_AGREED_POSTS; payload: Post[] };
export type IGetCategory = { type: typeof GET_CATEGORY; payload: SelectItem[] };
export type IGetRegions = { type: typeof GET_REGIONS; payload: SelectItem[] };
export type IGetPostById = { type: typeof GET_POST_BY_ID; payload: Post };

export type ITypes = ISetAdminPage | IGetPosts | IGetPostById | IGetCategory | IGetRegions;
