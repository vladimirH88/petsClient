import React, { useMemo, useEffect } from 'react';
import { connect } from 'react-redux';

import Header from '../../Header/Header';
import ProfilePostList from '../ProfilePostList/ProfilePostList';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import ProfileCreatePost from '../ProfileCreatePost/ProfileCreatePost';
import ProfileMessage from '../ProfileMessage/ProfileMessage';
import ProfileSettings from '../ProfileSettings/ProfileSettings';

import ProfilePage from '../../../enums/ProfilePage';
import { Post, Store, User } from '../../../interfaces';
import { getUserSelector } from '../../../redux/common/selectors';
import { getProfilePostsAction, getFavoritesPostsAction, setEditingPostAction } from '../../../redux/profile/actions';
import {
    getCurrentProfilePage,
    getProfilePostsSelector,
    geFavoritesPostsSelector,
} from '../../../redux/profile/selectors';

type Props = {
    user: User | null;
    posts: Post[];
    favoritesPosts: Post[];
    currentPage: ProfilePage;
    deletePost: (id: number) => void;
    setEditingPost: (post: Post) => void;
    getProfilePosts: (isActive: boolean) => void;
    getFavoritesPosts: () => void;
};

const ProfileMain: React.FC<Props> = ({
    user,
    posts,
    favoritesPosts,
    currentPage,
    deletePost,
    setEditingPost,
    getProfilePosts,
    getFavoritesPosts,
}) => {
    const currentPageRender = useMemo(() => {
        switch (currentPage) {
            case ProfilePage.POST_LIST: {
                return <ProfilePostList posts={posts} getPosts={getProfilePosts} setEditingPost={setEditingPost} />;
            }
            case ProfilePage.MESSAGES: {
                return <ProfileMessage />;
            }
            case ProfilePage.CREATE_POST: {
                return <ProfileCreatePost />;
            }
            case ProfilePage.FAVORITES: {
                return <ProfilePostList user={user} isFavorites posts={favoritesPosts} getPosts={getFavoritesPosts} />;
            }
            case ProfilePage.SETTINGS: {
                return <ProfileSettings />;
            }
            default: {
                return <></>;
            }
        }
    }, [user, posts, favoritesPosts, currentPage, getFavoritesPosts, getProfilePosts, setEditingPost]);

    useEffect(() => {
        if (!user) {
            window.location.replace('/');
        }
    }, [user]);

    return (
        <>
            <Header />
            <div className="row d-md-flex mx-0 mt-5">
                <div className="col-md-3">
                    <ProfileMenu />
                </div>
                <div className="col-md-8 mt-4 pt-3">{currentPageRender}</div>
            </div>
        </>
    );
};

const mapStateToProps = (store: Store) => ({
    user: getUserSelector(store),
    posts: getProfilePostsSelector(store),
    currentPage: getCurrentProfilePage(store),
    favoritesPosts: geFavoritesPostsSelector(store),
});

const mapDispatchToProps = {
    setEditingPost: setEditingPostAction,
    getProfilePosts: getProfilePostsAction,
    getFavoritesPosts: getFavoritesPostsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMain);
