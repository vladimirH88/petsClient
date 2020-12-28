import { LimitItemsPerPage } from '../../enums/LimitItemsPerPage';
import { SortParam, SortDirection } from '../../enums/Sorting';
import { Filter, Sorting } from '../../interfaces';

const user = localStorage.getItem('user');

const initialFilter: Filter = {
    region: [],
    category: [],
};

const initialSorting: Sorting = {
    param: SortParam.FILING_DATA,
    direction: SortDirection.DESC,
};

export const store = {
    post: null,
    user: user ? JSON.parse(user) : null,
    postListData: {
        data: [],
        pageSize: LimitItemsPerPage.L10,
        pageNumber: 1,
        totalItems: 0,
    },
    filter: initialFilter,
    sorting: initialSorting,
    favotitePostIds: [],
};
