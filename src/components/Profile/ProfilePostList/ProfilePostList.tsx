import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { removeFromFavorites, deletePostById } from '../../../api/postsApi';
import ProfilePost from '../ProfilePost/ProfilePost';
import { Post, User } from '../../../interfaces';
import ROUTES from '../../../constants/routes';

type Props = {
    user?: User | null;
    posts: Post[];
    isFavorites?: boolean;
    getPosts: (isActive: boolean) => void;
    setEditingPost?: (post: Post) => void;
};

enum activeTabs {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}

const ProfilePostList: React.FC<Props> = ({ user, posts, isFavorites = false, getPosts, setEditingPost }) => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(activeTabs.ACTIVE);

    const onRemoveFromFavorites = useCallback(
        (postId: number) => {
            if (user) {
                void removeFromFavorites(user.id, postId);
            }
        },
        [user],
    );

    useEffect(() => {
        if (activeTab === activeTabs.ACTIVE) {
            getPosts(true);
            return;
        }
        getPosts(false);
    }, [activeTab, getPosts]);

    return (
        <>
            {!isFavorites ? (
                <div className="d-flex justify-content-center">
                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className={`btn btn-secondary ${activeTab === activeTabs.ACTIVE ? 'active' : ''}`}
                            onClick={() => setActiveTab(activeTabs.ACTIVE)}
                        >
                            {t('profile.postList.published')}
                        </button>
                        <button
                            type="button"
                            className={`btn btn-secondary ${activeTab === activeTabs.INACTIVE ? 'active' : ''}`}
                            onClick={() => setActiveTab(activeTabs.INACTIVE)}
                        >
                            {t('profile.postList.moderation')}
                        </button>
                    </div>
                </div>
            ) : (
                    <></>
                )}
            {posts.length ? (
                posts.map((post) => (
                    <Link className="list-group-item-action" to={ROUTES.PROFILE} key={post.id}>
                        <ProfilePost
                            post={post}
                            isFavorite={isFavorites}
                            onRemoveFromFavorites={onRemoveFromFavorites}
                            setEditingPost={setEditingPost}
                            deletePost={deletePostById}
                        />
                    </Link>
                ))
            ) : (
                    <h2>{t('notFound')}</h2>
                )}
        </>
    );
};

export default ProfilePostList;
