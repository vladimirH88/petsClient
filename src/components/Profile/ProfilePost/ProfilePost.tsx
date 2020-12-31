import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Post } from '../../../interfaces';
import s from './ProfilePost.module.css';

type Props = {
    post: Post;
    isFavorite?: boolean;
    deletePost?: (id: number) => void;
    setEditingPost?: (post: Post) => void;
    onRemoveFromFavorites?: (postId: number) => void;
};

const ProfilePost: React.FC<Props> = ({ post, isFavorite, deletePost, setEditingPost, onRemoveFromFavorites }) => {
    const { t } = useTranslation();

    const removeFromFavoriteHandler = useCallback(() => {
        if (onRemoveFromFavorites) {
            onRemoveFromFavorites(post.id);
        }
    }, [post.id, onRemoveFromFavorites]);

    const removeHandler = useCallback(() => {
        if (deletePost) {
            deletePost(post.id);
        }
    }, [deletePost, post.id]);

    const editHandler = useCallback(() => {
        if (setEditingPost) {
            setEditingPost(post);
        }
    }, [post, setEditingPost]);

    const controllButtons = useMemo(() => {
        if (isFavorite) {
            return (
                <button type="button" className="btn btn-lg p-0 pr-2" onClick={removeFromFavoriteHandler}>
                    <i className="fa fa-trash p-0 text-danger" />
                </button>
            );
        }
        if (post.isAgreed) {
            return (
                <>
                    <button type="button" className="btn btn-lg p-0" onClick={editHandler}>
                        <i className="fa fa-edit p-0 text-info" />
                    </button>
                    <button type="button" className="btn btn-lg mt-5  p-0" onClick={removeHandler}>
                        <i className="fa fa-trash p-0 text-danger" />
                    </button>
                </>
            );
        }
        return <></>;
    }, [isFavorite, post.isAgreed, removeHandler, editHandler, removeFromFavoriteHandler]);

    return (
        <>
            <div className={`${s.card} card my-2 w-100`}>
                <div className="d-md-flex border no-gutters">
                    <img
                        className={`card-img border-right ${s.card_img} col-md-2`}
                        src={post.image ? post.image : 'https://kknd26.ru/images/no_photo.png'}
                        alt="foto"
                    />
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center border-bottom">
                            <h6 className={`${s.briefDescription} ml-3 mb-0`}>{post.briefDescription}</h6>
                            <h6 className="price mr-3  mb-0">
                                {post.price ? `Цена: ${post.price} руб.` : 'Бесплатно'}
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
                    <div className="border-left pl-2">{controllButtons}</div>
                </div>
            </div>
        </>
    );
};

export default ProfilePost;
