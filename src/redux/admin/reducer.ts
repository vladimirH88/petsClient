import { AdminStore } from '../../interfaces';
import store from './store';
import { ITypes, SET_ADMIN_PAGE, GET_NOT_AGREED_POSTS, GET_REGIONS, GET_CATEGORY, GET_POST_BY_ID } from './constants';

function adminReducer(state: AdminStore = store, action: ITypes) {
    switch (action.type) {
        case SET_ADMIN_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case GET_NOT_AGREED_POSTS:
            return {
                ...state,
                postListData: action.payload,
            };
        case GET_POST_BY_ID:
            return {
                ...state,
                post: action.payload,
            };
        case GET_REGIONS:
            return {
                ...state,
                regions: action.payload,
            };
        case GET_CATEGORY:
            return {
                ...state,
                categories: action.payload,
            };
        default:
            return state;
    }
}

export default adminReducer;
