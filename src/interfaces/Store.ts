import { Post } from './Post';
import { User } from './User';
import { Filter } from './Filter';
import { Sorting } from './Sorting';
import { PostListData } from './PostListData';
import { ProfilePage } from '../enums/ProfilePage';

export interface CommonStore {
    post: Post | null;
    user: User | null;
    postListData: PostListData;
    filter: Filter;
    sorting: Sorting;
    favotitePostIds: number[];
};

export interface ProfileStore {
    post: Post | null;
    editingPost: Post | null;
    postList: Post[];
    favoritesPosts: Post[];
    profileCurrentPage: ProfilePage;
};

export interface Store {
    common: CommonStore;
    profile: ProfileStore;
};