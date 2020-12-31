import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import s from './ShortPost.module.css';
import { Post } from '../../interfaces';

type Props = {
    post: Post;
    isFavorite: boolean;
    isAuthorized: boolean;
    onAddToFavorites: (postId: number) => void;
    onRemoveFromFavorites: (postId: number) => void;
};

const ShortPost: React.FC<Props> = ({ post, isFavorite, isAuthorized, onAddToFavorites, onRemoveFromFavorites }) => {
    const { t } = useTranslation();
    const [favorite, setFavorite] = useState(isFavorite);

    const favoriteHandler = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            if (!isAuthorized) {
                return alert(t('post.userIsNotAuthorized'));
            }
            e.currentTarget.classList.toggle('text-success');
            if (favorite) {
                onRemoveFromFavorites(post.id);
                return setFavorite(false);
            }
            onAddToFavorites(post.id);
            return setFavorite(true);
        },
        [isAuthorized, favorite, t, setFavorite, onAddToFavorites, onRemoveFromFavorites, post.id],
    );

    return (
        <div className={`${s.card} card my-3 w-100`}>
            <div className="d-md-flex border no-gutters">
                {/* <img className={`card-img ${s.card_img} col-md-2 border-right`} src={post.image ? post.image : "https://kknd26.ru/images/no_photo.png"} alt="foto" /> */}
                <img
                    className={`card-img ${s.card_img} col-md-2 border-right`}
                    src="https://kknd26.ru/images/no_photo.png"
                    alt="foto"
                />
                <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center border-bottom">
                        <h6 className={`${s.briefDescription} ml-3 mb-0`}>{post.briefDescription}</h6>
                        <h6 className="price mr-3  mb-0">
                            {post.price ? `${t('post.price', { price: post.price })}` : `${t('post.free')}`}
                            <i
                                role="button"
                                tabIndex={0}
                                className={`fa fa-star py pr-0 ml-2 ${isFavorite ? 'text-success' : ''}`}
                                onClick={favoriteHandler}
                            />
                        </h6>
                    </div>
                    <div className="d-md-flex justify-content-between">
                        <div className={`${s.params}`}>
                            <div className={`${s.category} ml-3`}>
                                {t('post.category')}
                                <span className="mx-1">{post.category}</span>
                            </div>
                            <div className={`${s.city} ml-3`}>
                                {t('post.city')}
                                <span className="mx-1">{post.city}</span>
                            </div>
                        </div>
                        <div className={`${s.card_text}`}>
                            <p className={`card-text mx-3 float-right ${s.card_text}`}>{post.description}</p>
                        </div>
                    </div>
                    <div className="text-muted d-flex justify-content-between align-items-center border-top mt-3">
                        <small className="ml-3">
                            {t('post.views')} {post.numberOfViews}
                        </small>
                        <small className="mr-3">
                            {t('post.filingDate')} {new Date(post.filingDate).toLocaleString()}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortPost;
