import { CommonStore } from '../../interfaces';
import store from './store';
import {
    ITypes,
    GET_POST_LIST,
    LOG_IN,
    LOG_OUT,
    GET_POST_BY_ID,
    SET_FILTER,
    SET_SORTING,
    GET_CATEGORY,
    SET_LIMIT_PER_PAGE,
    GET_FAVORITE_POST_IDS,
    GET_REGIONS,
} from './constants';

function commonReducer(state: CommonStore = store, action: ITypes) {
    switch (action.type) {
        case SET_SORTING:
            return {
                ...state,
                sorting: action.payload,
            };
        case SET_LIMIT_PER_PAGE:
            return {
                ...state,
                postListData: {
                    ...state.postListData,
                    pageSize: action.payload,
                },
            };
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            };
        case GET_POST_BY_ID:
            return {
                ...state,
                post: action.payload,
            };
        case GET_POST_LIST:
            return {
                ...state,
                postListData: action.payload,
            };
        case GET_FAVORITE_POST_IDS:
            return {
                ...state,
                favotitePostIds: action.payload,
            };
        case LOG_IN:
            return {
                ...state,
                user: action.payload,
            };
        case LOG_OUT:
            return {
                ...state,
                user: null,
            };
        case GET_CATEGORY: {
            return {
                ...state,
                categories: action.payload,
            };
        }
        case GET_REGIONS: {
            return {
                ...state,
                regions: action.payload,
            };
        }
        default:
            return state;
    }
}

export default commonReducer;
