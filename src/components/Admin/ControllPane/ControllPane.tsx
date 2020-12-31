import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ROUTES from '../../../constants/routes';
import AdminPage from '../../../enums/AdminPage';
import { setCurrentPageAction } from '../../../redux/admin/actions';
import { getCurrentProfilePage, getNumberOfPostsSelector } from '../../../redux/admin/selectors';
import { Store } from '../../../interfaces';

type Props = {
    countOfPosts: number;
    currentPage: AdminPage;
    setCurrentPage: (page: AdminPage) => void;
};

const ControllPane: React.FC<Props> = ({ countOfPosts, currentPage, setCurrentPage }) => (
    <>
        <div className="left bg-dark h-100">
            <nav className="sticky navbar-expand-md navbar-dark">
                <ul className="navbar-nav px-3 flex-column">
                    <li className="nav-item h5">
                        <a
                            className="nav-link d-flex justify-content-between align-items-center"
                            data-toggle="collapse"
                            href="#collapseManagement"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseManagement"
                        >
                            Управление
                            <i className="fa fa-chevron-down" />
                        </a>
                    </li>
                    <div className="collapse" id="collapseManagement">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to={ROUTES.ADMIN}
                                onClick={() => setCurrentPage(AdminPage.USERS)}
                            >
                                Пользователи
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to={ROUTES.ADMIN}
                                onClick={() => setCurrentPage(AdminPage.CATEGORY)}
                            >
                                Категории
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to={ROUTES.ADMIN}
                                onClick={() => setCurrentPage(AdminPage.REGION)}
                            >
                                Область
                            </Link>
                        </li>
                    </div>
                    <li className="nav-item h5">
                        <a
                            className="nav-link"
                            data-toggle="collapse"
                            href="#collapseModeration"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseModeration"
                        >
                            Модерация
                            <span className="badge badge-pill badge-primary ml-2">{countOfPosts}</span>
                            <i className="fa fa-chevron-down float-right" />
                        </a>
                    </li>
                    <div className="collapse show" id="collapseModeration">
                        <li className="nav-item">
                            <Link
                                className={`${currentPage === AdminPage.POSTS ? 'active' : ''} nav-link`}
                                to={ROUTES.ADMIN}
                                onClick={() => setCurrentPage(AdminPage.POSTS)}
                            >
                                Объявления
                                <span className="badge badge-pill badge-primary ml-2">{countOfPosts}</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to={ROUTES.ADMIN}
                                onClick={() => setCurrentPage(AdminPage.COMMENTS)}
                            >
                                Комментарии
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    </>
);

const mapStateToProps = (store: Store) => ({
    currentPage: getCurrentProfilePage(store),
    countOfPosts: getNumberOfPostsSelector(store),
});

const mapDispatchToProps = {
    setCurrentPage: setCurrentPageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControllPane);
