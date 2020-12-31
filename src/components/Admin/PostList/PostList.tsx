import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ROUTES from '../../../constants/routes';
import { getPostListAction } from '../../../redux/admin/actions';

import { Store, Post as IPost } from '../../../interfaces';
import { getPostsDataSelector } from '../../../redux/admin/selectors';
import ShortPost from '../ShortPost/ShortPost';

type Props = {
    posts: IPost[];
    getPostList: () => void;
};

const PostList: React.FC<Props> = ({ posts, getPostList }) => {
    const { t } = useTranslation();

    useEffect(() => {
        getPostList();
    }, [getPostList]);

    return (
        <>
            {posts.length ? (
                posts.map((post) => (
                    <Link className="list-group-item-action" to={`${ROUTES.ADMIN_POST_BY_ID}/${post.id}`} key={post.id}>
                        <ShortPost post={post} />
                    </Link>
                ))
            ) : (
                <h2>{t('notFound')}</h2>
            )}
        </>
    );
};

const mapStateToProps = (store: Store) => ({
    posts: getPostsDataSelector(store).data,
});

const mapDispatchToProps = {
    getPostList: getPostListAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
