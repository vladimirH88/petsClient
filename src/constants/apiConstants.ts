export const LOG_IN = 'login';
export const LOG_OUT = 'logout';
export const REGISTRATION = 'registration';
export const REFRESH_TOKEN = 'refresh';

export const PUBLIC = 'public';
export const PRIVATE = 'private';

export const POST_LIST = `${PUBLIC}/getPostList`;
export const POST_BY_ID = `${PUBLIC}/getPostById`;

export const CREATE_POST = `${PRIVATE}/createPost`;
export const GET_PROFILE_POSTS = `${PRIVATE}/getProfilePosts`;
export const UPDATE_POST = `${PRIVATE}/updatePost`;
export const DELETE_POST = `${PRIVATE}/delete`;
export const ADD_TO_FAVIRITES = `${PRIVATE}/addToFavorites`;
export const REMOVE_FROM_FAVORITES = `${PRIVATE}/removeFromFavorites`;
export const GET_FAVORITES_POSTS = `${PRIVATE}/getFavoritePosts`;
export const GET_FAVORITES_POSTS_IDS = `${PRIVATE}/getFavoritePostIds`;

export const UPDATE_USER = `${PRIVATE}/updateUser`;
