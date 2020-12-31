import { createSelector } from 'reselect';
import { CommonStore, Store } from '../../interfaces';

const getStore = (store: Store) => store.common;

export const getUserSelector = createSelector([getStore], (store: CommonStore) => store.user);

export const getPostsDataSelector = createSelector([getStore], (store: CommonStore) => store.postListData);

export const getSortingDataSelector = createSelector([getStore], (store: CommonStore) => store.sorting);

export const getPostSelector = createSelector([getStore], (store: CommonStore) => store.post);

export const getFilterSelector = createSelector([getStore], (store: CommonStore) => store.filter);

export const getfavoritePostIdsSelector = createSelector([getStore], (store: CommonStore) => store.favotitePostIds);

export const getCategoriesSelector = createSelector([getStore], (store: CommonStore) => store.categories);

export const getRegionsSelector = createSelector([getStore], (store: CommonStore) => store.regions);
