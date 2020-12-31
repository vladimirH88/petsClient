import { SortDirection, SortParam } from '../enums/Sorting';

const sortingParamsList = [
    {
        id: '1',
        name: 'Cначала новые',
        value: {
            param: SortParam.FILING_DATA,
            direction: SortDirection.DESC,
        },
    },
    {
        id: '2',
        name: 'Cначала старые',
        value: {
            param: SortParam.FILING_DATA,
            direction: SortDirection.ASC,
        },
    },
    {
        id: '3',
        name: 'Cначала дешёвые',
        value: {
            param: SortParam.PRICE,
            direction: SortDirection.ASC,
        },
    },
    {
        id: '4',
        name: 'Cначала дорогие',
        value: {
            param: SortParam.PRICE,
            direction: SortDirection.DESC,
        },
    },
];

export default sortingParamsList;
