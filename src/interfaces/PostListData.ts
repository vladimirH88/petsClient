import { Post } from './Post';

export interface PostListData {
    data: Post[];
    pageSize: number;
    pageNumber: number;
    totalItems: number;
}
