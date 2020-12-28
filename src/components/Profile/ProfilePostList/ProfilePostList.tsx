import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ProfilePost from '../ProfilePost/ProfilePost';
import { Post } from '../../../interfaces';

type Props = {
    posts: Post[];
    isFavorites?: boolean;
    getPosts: () => void;
    deletePost?: (id: number) => void;
    setEditingPost?: (post: Post) => void;
    removeFromFavorites?: (postId: number) => void;
};

const ProfilePostList: React.FC<Props> = ({ posts, isFavorites = false, getPosts, deletePost, setEditingPost, removeFromFavorites }) => {
    const { t } = useTranslation();

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return (
        <>
            {posts.length ? (
                posts.map(post => (
                    <Link className="list-group-item-action" to="#" key={post.id}>
                        <ProfilePost
                            post={post}
                            isFavorite={isFavorites}
                            removeFromFavorites={removeFromFavorites}
                            setEditingPost={setEditingPost}
                            deletePost={deletePost}
                        />
                    </Link>
                ))
            ) : (
                    <h2>{t('notFound')}</h2>
                )
            }
        </>
    );
};

export default ProfilePostList;
