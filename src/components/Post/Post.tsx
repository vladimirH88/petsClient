import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getPostSelector } from '../../redux/common/selectors';
import { getPostByIdAction } from '../../redux/common/actions';
import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import Corousel from '../Corousel/Corousel';

import { Post as IPost, Store } from '../../interfaces';

import s from './Post.module.css';
import ROUTES from '../../constants/routes';

interface Props {
    post: IPost | null;
    getPostById: (id: number) => void;
}

const Post: React.FC<Props> = ({ post, getPostById }) => {
    const { t } = useTranslation();

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
            <main className="mt-5">
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
                                        <span>{post.additionalPhone}</span>
                                    </div>
                                </div>
                                <div>
                                    <Link className="text-muted nav-item" to={ROUTES.ROOT}>
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
            </main>
            <Corousel />
        </>
    );
};

const mapStateToProps = (store: Store) => ({
    post: getPostSelector(store),
});

const mapDispatchToProps = {
    getPostById: getPostByIdAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
