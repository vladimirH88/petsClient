import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ROUTES from '../../../constants/routes';
import { approvePost } from '../../../api/adminApi';
import { getPostSelector } from '../../../redux/admin/selectors';
import { getPostByIdAction, getPostListAction } from '../../../redux/admin/actions';
import Header from '../Header/Header';
// import Footer from '../Footer/Footer';

import { Post as IPost, Store } from '../../../interfaces';

import s from './Post.module.css';

interface Props {
    post: IPost | null;
    getPostList: () => void;
    getPostById: (id: number) => void;
}

const Post: React.FC<Props> = ({ post, getPostById, getPostList }) => {
    const { t } = useTranslation();
    const history = useHistory();

    const approvePostHandler = useCallback(() => {
        if (post) {
            void approvePost(post.id).then(() => {
                getPostList();
                history.push(ROUTES.ADMIN);
            });
        }
    }, [post, history]);

    useEffect(() => {
        const path = window.location.pathname.split('/');
        const idAsNumber = +path[path.length - 1];

        if (idAsNumber) {
            getPostById(idAsNumber);
        }
    }, [getPostById]);

    if (!post) {
        return <></>;
    }
    return (
        <>
            <Header />
            <div className="mt-5">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <div className="card-body">
                            <div className="h5 py-0 my-0">{post.briefDescription}</div>
                        </div>
                        <div className="row no-gutters">
                            <div className={`${s.foto} col-md-6`}>
                                <img
                                    className={`${s.img} img-thumbnai`}
                                    src={post.image ? post.image : 'https://kknd26.ru/images/no_photo.png'}
                                    alt="foto"
                                />
                                <div className={`${s.additionalFoto} mt-2 pl-1`}>
                                    <div>
                                        <img
                                            className={`${s.mainFoto} img-thumbnai`}
                                            src="https://i.pinimg.com/236x/1e/00/5a/1e005a43bad138afe3d98d703bc95656.jpg"
                                            alt="foto"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            className="img-thumbnai"
                                            src={post.image ? post.image : 'https://kknd26.ru/images/no_photo.png'}
                                            alt="foto"
                                        />
                                    </div>
                                    <div>
                                        <img
                                            className="img-thumbnai"
                                            src="https://mrskytor.nethouse.ru/static/img/0000/0002/4345/24345838.f0rjilzvfo.W215.jpg"
                                            alt="foto"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div>
                                    <p className="h6">
                                        {post.region},{post.city}
                                    </p>
                                </div>
                                <div>
                                    <a
                                        className="text-muted nav-item"
                                        data-toggle="collapse"
                                        href="#showPhone"
                                        role="button"
                                        aria-expanded="false"
                                        aria-controls="collapseManagement"
                                    >
                                        {t('post.showPhoneNumber')}
                                        <i className="fa fa-tablet mx-2" />
                                    </a>
                                    <div className="collapse" id="showPhone">
                                        <span>{post.phone}</span>
                                        <br />
                                        <span>{post.additionalPhone}</span>
                                    </div>
                                </div>
                                <div>
                                    <Link className="text-muted nav-item" to="/">
                                        {t('post.contactSeller')}
                                        <i className="fa fa-envelope-o mx-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body col-md-10 px-4">
                        <p className="h4">{t('post.description')}</p>
                        <p className="card-text">{post.description}</p>
                        <div className="h5">
                            {post.price ? `${t('post.price', { price: post.price })}` : `${t('post.free')}`}
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="float-left">
                            <span>
                                {t('post.views')}
                                {post.numberOfViews}
                            </span>
                        </div>
                        <div className="float-right">
                            <span className="float-right">
                                {t('post.filingDate')}
                                {new Date(post.filingDate).toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-success float-left" onClick={approvePostHandler}>
                    Опубликовать
                </button>
                <button
                    type="button"
                    className="btn btn-danger float-right"
                    data-toggle="modal"
                    data-target="#exampleModal"
                >
                    Отклонить
                </button>
            </div>
            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Причина отказа публикации
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" id="in" placeholder="Укажите причину отказа" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Отмена
                            </button>
                            <button type="button" className="btn btn-primary">
                                Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (store: Store) => ({
    post: getPostSelector(store),
});

const mapDispatchToProps = {
    getPostById: getPostByIdAction,
    getPostList: getPostListAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
