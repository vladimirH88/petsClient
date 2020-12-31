const BASE_URL = 'http://localhost:3000';

export const LOG_IN = `${BASE_URL}/login`;
export const LOG_OUT = `${BASE_URL}/logout`;
export const REGISTRATION = `${BASE_URL}/registration`;
export const REFRESH_TOKEN = `${BASE_URL}/refresh`;

export const PUBLIC = `${BASE_URL}/public`;
export const POST_LIST = `${PUBLIC}/getPostList`;
export const POST_BY_ID = `${PUBLIC}/getPostById`;
export const GET_CATEGORIES_LIST = `${PUBLIC}/getCategories`;
export const GET_REGIONS_LIST = `${PUBLIC}/getRegions`;

export const PRIVATE = `${BASE_URL}/private`;
export const CREATE_POST = `${PRIVATE}/createPost`;
export const GET_PROFILE_POSTS = `${PRIVATE}/getProfilePosts`;
export const UPDATE_POST = `${PRIVATE}/updatePost`;
export const DELETE_POST = `${PRIVATE}/delete`;
export const ADD_TO_FAVIRITES = `${PRIVATE}/addToFavorites`;
export const REMOVE_FROM_FAVORITES = `${PRIVATE}/removeFromFavorites`;
export const GET_FAVORITES_POSTS = `${PRIVATE}/getFavoritePosts`;
export const GET_FAVORITES_POSTS_IDS = `${PRIVATE}/getFavoritePostIds`;
export const UPDATE_USER = `${PRIVATE}/updateUser`;

export const ADMIN = `${BASE_URL}/admin`;
export const GET_POSTS = `${ADMIN}/getNotAgreedPosts`;
export const GET_CATEGORIES = `${ADMIN}/getCategories`;
export const ADD_CATEGORY = `${ADMIN}/addCategory`;
export const DELETE_CATEGORY = `${ADMIN}/deleteCategory`;
export const UPDATE_CATEGORY = `${ADMIN}/updateCategory`;
export const GET_REGIONS = `${ADMIN}/getRegions`;
export const ADD_REGION = `${ADMIN}/addRegion`;
export const DELETE_REGION = `${ADMIN}/deleteRegion`;
export const UPDATE_REGION = `${ADMIN}/updateRegion`;
export const GET_POST_BY_ID = `${ADMIN}/getNotAgreedPostById`;
export const APPROVE_POST = `${ADMIN}/approvePost`;
