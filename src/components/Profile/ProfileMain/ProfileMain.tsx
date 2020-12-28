import React, { useMemo, useEffect } from 'react';
import { connect } from 'react-redux';

import Header from '../../Header/Header';
import ProfilePostList from '../ProfilePostList/ProfilePostList';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import ProfileCreatePost from '../ProfileCreatePost/ProfileCreatePost';
import ProfileMessage from '../ProfileMessage/ProfileMessage';
import ProfileSettings from '../ProfileSettings/ProfileSettings';

import { ProfilePage } from '../../../enums/ProfilePage';
import { Post, Store, User } from '../../../interfaces';
import { getUserSelector } from '../../../redux/common/selectors';
import { getProfilePosts, getFavoritesPosts, removePostFromFavorites, setEditingPost, deletePost } from '../../../redux/profile/actions';
import { getCurrentProfilePage, getProfilePostsSelector, geFavoritesPostsSelector } from '../../../redux/profile/selectors';

type Props = {
    user: User | null;
    posts: Post[];
    favoritesPosts: Post[];
    currentPage: ProfilePage,
    deletePost: (id: number) => void;
    setEditingPost: (post: Post) => void;
    getProfilePosts: () => void;
    getFavoritesPosts: () => void;
    removePostFromFavorites?: (postId: number) => void;
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
    removePostFromFavorites
}) => {

    const currentPageRender = useMemo(() => {
        switch (currentPage) {
            case ProfilePage.POST_LIST: {
                return (
                    <ProfilePostList
                        posts={posts}
                        deletePost={deletePost}
                        getPosts={getProfilePosts}
                        setEditingPost={setEditingPost}
                    />
                )
            }
            case ProfilePage.MESSAGES: {
                return <ProfileMessage />
            }
            case ProfilePage.CREATE_POST: {
                return <ProfileCreatePost />
            }
            case ProfilePage.FAVORITES: {
                return (
                    <ProfilePostList
                        isFavorites={true}
                        posts={favoritesPosts}
                        getPosts={getFavoritesPosts}
                        removeFromFavorites={removePostFromFavorites}
                    />
                )
            }
            case ProfilePage.SETTINGS: {
                return <ProfileSettings />
            }
            default: {
                return <></>
            }
        }
    }, [posts, favoritesPosts, currentPage, getProfilePosts]);

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
                <div className="col-md-8 mt-4 pt-3">
                    {currentPageRender}
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (store: Store) => {
    return {
        user: getUserSelector(store),
        posts: getProfilePostsSelector(store),
        currentPage: getCurrentProfilePage(store),
        favoritesPosts: geFavoritesPostsSelector(store),
    }
};

const mapDispatchToProps = {
    setEditingPost,
    getProfilePosts,
    deletePost,
    getFavoritesPosts,
    removePostFromFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMain);
