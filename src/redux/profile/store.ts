import { ProfilePage } from '../../enums/ProfilePage';

export const store = {
    post: null,
    editingPost: null,
    postList: [],
    favoritesPosts: [],
    profileCurrentPage: ProfilePage.POST_LIST,
};
