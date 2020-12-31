import { createSelector } from 'reselect';
import { AdminStore, Store } from '../../interfaces';

const getStore = (store: Store) => store.admin;

export const getCurrentProfilePage = createSelector([getStore], (store: AdminStore) => store.currentPage);

export const getUserSelector = createSelector([getStore], (store: AdminStore) => store.user);

export const getPostsDataSelector = createSelector([getStore], (store: AdminStore) => store.postListData);

export const getNumberOfPostsSelector = createSelector(
    [getStore],
    (store: AdminStore) => store.postListData.data.length,
);

export const getCategoriesSelector = createSelector([getStore], (store: AdminStore) => store.categories);

export const getRegionsSelector = createSelector([getStore], (store: AdminStore) => store.regions);

export const getPostSelector = createSelector([getStore], (store: AdminStore) => store.post);
