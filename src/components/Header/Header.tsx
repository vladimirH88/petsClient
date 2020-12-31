import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import ROUTES from '../../constants/routes';
import { User, Store } from '../../interfaces';
import { getUserSelector } from '../../redux/common/selectors';
import { logoutAction } from '../../redux/auth/actions';
import ProfilePage from '../../enums/ProfilePage';
import { setCurrentProfilePageAction } from '../../redux/profile/actions';
import s from './Header.module.css';

type Props = {
    user: User | null;
    logout: () => void;
    setCurrentProfilePage: (page: ProfilePage) => void;
};

const Header: React.FC<Props> = ({ user, logout, setCurrentProfilePage }) => {
    const { t } = useTranslation();
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <Link to={ROUTES.ROOT} className="navbar-brand">
                <img src="red_pets_icon-icons.com_59525.ico" alt="Logo" className={`${s.logo} rounded-circle mr-2`} />
                {t('header.title')}
            </Link>
            <div className="d-flex flex-grow-1 justify-content-center">
                <form className="mr-2 my-auto w-50 d-inline-block order-1">
                    <div className="input-group">
                        <div className="w-75 result_search" id="dropdown">
                            <input
                                type="text"
                                id="search"
                                className="form-control form-control-sm border border-right-0"
                                placeholder={t('header.search')}
                            />
                            <div
                                className="dropdown-menu w-100 py-0"
                                id="result_search"
                                aria-labelledby="navbarDropdownMenuLink"
                            />
                        </div>
                        <span className="input-group-append">
                            <button className="btn btn-outline-light border border-left-0 btn-sm" type="button">
                                <i className="fa fa-search" />
                            </button>
                        </span>
                    </div>
                </form>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar7">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse collapse flex-shrink-1 flex-grow-0" id="navbar7">
                {user ? (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to={ROUTES.PROFILE}
                                id="navbar7"
                                onClick={() => setCurrentProfilePage(ProfilePage.MESSAGES)}
                            >
                                <i className="fa fa-envelope-o" />
                                <span className="badge badge-pill badge-primary mx-1">1</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <div className={`${s.dropdown} dropdown rounded-circle border bg-light mt-1 ml-2`}>
                                <span className="h4 p-2">{user?.name[0].toUpperCase()}</span>
                                <div
                                    className={`${s.avatarMenu} dropdown-menu dropdown-menu-right`}
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <Link
                                        className={`${s.dropdownItem} dropdown-item`}
                                        to={ROUTES.PROFILE}
                                        onClick={() => setCurrentProfilePage(ProfilePage.POST_LIST)}
                                    >
                                        <i className="fa fa-th-list text-muted pr-2" />
                                        {t('profile.menu.posts')}
                                    </Link>
                                    <Link
                                        className={`${s.dropdownItem} dropdown-item`}
                                        to={ROUTES.PROFILE}
                                        onClick={() => setCurrentProfilePage(ProfilePage.MESSAGES)}
                                    >
                                        <i className="fa fa-envelope text-muted pr-2" />
                                        {t('profile.menu.messages')}
                                    </Link>
                                    <Link
                                        className={`${s.dropdownItem} dropdown-item`}
                                        to={ROUTES.PROFILE}
                                        onClick={() => setCurrentProfilePage(ProfilePage.CREATE_POST)}
                                    >
                                        <i className="fa fa-plus text-muted pr-2" />
                                        {t('profile.menu.createPost')}
                                    </Link>
                                    <Link
                                        className={`${s.dropdownItem} dropdown-item`}
                                        to={ROUTES.PROFILE}
                                        onClick={() => setCurrentProfilePage(ProfilePage.FAVORITES)}
                                    >
                                        <i className="fa fa-star-o text-muted pr-2" />
                                        {t('profile.menu.favorites')}
                                    </Link>
                                    <Link
                                        className={`${s.dropdownItem} dropdown-item`}
                                        to={ROUTES.PROFILE}
                                        onClick={() => setCurrentProfilePage(ProfilePage.SETTINGS)}
                                    >
                                        <i className="fa fa-cog text-muted pr-2" />
                                        {t('profile.menu.settings')}
                                    </Link>
                                    <Link className={`${s.dropdownItem} dropdown-item`} to="/" onClick={logout}>
                                        <i className="fa fa-sign-out text-muted pr-2" />
                                        {t('header.logOut')}
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                ) : (
                    <div className="navbar-collapse collapse flex-shrink-1 flex-grow-0 order-last" id="navbar7">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={ROUTES.LOGIN} id="navbar7">
                                    {t('header.logIn')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={ROUTES.REGISTRATION} id="navbar7">
                                    {t('header.registration')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

const mapStateToProps = (store: Store) => ({
    user: getUserSelector(store),
});

const mapDispatchToProps = {
    logout: logoutAction,
    setCurrentProfilePage: setCurrentProfilePageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
