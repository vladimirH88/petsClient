import { Post } from './Post';
import { LimitItemsPerPage } from '../enums/LimitItemsPerPage';

export interface PostListData {
    data: Post[],
    pageSize: number;
    pageNumber: number;
    totalItems: number;
};
