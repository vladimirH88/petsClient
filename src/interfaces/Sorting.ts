import { SortDirection, SortParam } from '../enums/Sorting';

export interface Sorting {
    param: SortParam;
    direction: SortDirection;
}
