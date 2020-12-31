import AdminPage from '../../enums/AdminPage';
import LimitItemsPerPage from '../../enums/LimitItemsPerPage';

const user = localStorage.getItem('user');

const store = {
    currentPage: AdminPage.POSTS,
    post: null,
    postListData: {
        data: [],
        pageSize: LimitItemsPerPage.L10,
        pageNumber: 1,
        totalItems: 0,
    },
    user: user ? JSON.parse(user) : null,
    categories: [],
    regions: [],
};

export default store;
