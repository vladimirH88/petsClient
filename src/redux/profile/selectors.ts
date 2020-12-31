import { createSelector } from 'reselect';
import { ProfileStore, Store } from '../../interfaces';

const getStore = (store: Store) => store.profile;

export const getCurrentProfilePage = createSelector([getStore], (store: ProfileStore) => store.profileCurrentPage);

export const getProfilePostsSelector = createSelector([getStore], (store: ProfileStore) => store.postList);

export const geFavoritesPostsSelector = createSelector([getStore], (store: ProfileStore) => store.favoritesPosts);

export const geEditingPostsSelector = createSelector([getStore], (store: ProfileStore) => store.editingPost);
