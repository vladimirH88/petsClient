import { ProfileStore } from '../../interfaces';
import { store } from './store';
import {
    ITypes,
    SET_PROFILE_PAGE,
    GET_PROFILE_POST,
    GET_FAVORITES_POST,
    SET_EDITING_POST,
} from './constants';

export function profileReducer(state: ProfileStore = store, action: ITypes) {
    switch (action.type) {
        case SET_EDITING_POST:
            return {
                ...state,
                editingPost: action.payload,
            }
        case SET_PROFILE_PAGE:
            return {
                ...state,
                profileCurrentPage: action.payload,
            }
        case GET_FAVORITES_POST:
            return {
                ...state,
                favoritesPosts: action.payload,
            }
        case GET_PROFILE_POST: {
            return {
                ...state,
                postList: action.payload,
            }
        }
        default:
            return state;
    };
};
