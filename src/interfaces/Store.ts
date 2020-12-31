import { Post } from './Post';
import { User } from './User';
import { Filter } from './Filter';
import { Sorting } from './Sorting';
import { PostListData } from './PostListData';
import ProfilePage from '../enums/ProfilePage';
import AdminPage from '../enums/AdminPage';
import { SelectItem } from './SelectItem';

export interface CommonStore {
    post: Post | null;
    user: User | null;
    postListData: PostListData;
    filter: Filter;
    sorting: Sorting;
    favotitePostIds: number[];
    categories: SelectItem[];
    regions: SelectItem[];
}

export interface ProfileStore {
    post: Post | null;
    editingPost: Post | null;
    postList: Post[];
    favoritesPosts: Post[];
    profileCurrentPage: ProfilePage;
}

export interface AdminStore {
    post: Post | null;
    currentPage: AdminPage;
    postListData: PostListData;
    user: User | null;
    categories: SelectItem[];
    regions: SelectItem[];
}

export interface Store {
    common: CommonStore;
    profile: ProfileStore;
    admin: AdminStore;
}
