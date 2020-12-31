import { combineReducers } from 'redux';
import commonReducer from './common/reducer';
import profileReducer from './profile/reducer';
import adminReducer from './admin/reducer';

export const rootReducer = combineReducers({
    common: commonReducer,
    profile: profileReducer,
    admin: adminReducer,
});
