import ProfilePage from '../../enums/ProfilePage';

const store = {
    post: null,
    editingPost: null,
    postList: [],
    favoritesPosts: [],
    profileCurrentPage: ProfilePage.POST_LIST,
};

export default store;
