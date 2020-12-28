import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ProfilePage } from '../../../enums/ProfilePage';
import { Store } from '../../../interfaces';
import { setCurrentProfilePage } from '../../../redux/profile/actions';
import { getCurrentProfilePage } from '../../..//redux/profile/selectors';
import s from './ProfileMenu.module.css';

type Props = {
    currentPage: ProfilePage;
    setCurrentProfilePage: (page: ProfilePage) => void;
};

const ProfileMenu: React.FC<Props> = ({ currentPage, setCurrentProfilePage }) => {
    const { t } = useTranslation();

    const isActive = useCallback((page: ProfilePage) => {
        if (currentPage === page) {
            return 'text-light bg-dark';
        }
        return '';
    }, [currentPage]);
    return (
        <div className={s.sticky}>
            <div className="list-group shadow mt-5">
                <Link
                    className={`list-group-item list-group-item-action list-group-item-light ${isActive(ProfilePage.POST_LIST)}`}
                    to="/profile"
                    onClick={() => setCurrentProfilePage(ProfilePage.POST_LIST)}
                >
                    <i className="fa fa-th-list pr-2"></i>
                    {t('profile.menu.posts')}
                </Link>
                <Link
                    className={`list-group-item list-group-item-action list-group-item-light ${isActive(ProfilePage.MESSAGES)}`}
                    to="/profile"
                    onClick={() => setCurrentProfilePage(ProfilePage.MESSAGES)}
                >
                    <i className="fa fa-envelope pr-2"></i>
                    {t('profile.menu.messages')}
                </Link>
                <Link
                    className={`list-group-item list-group-item-action list-group-item-light ${isActive(ProfilePage.CREATE_POST)}`}
                    to="/profile"
                    onClick={() => setCurrentProfilePage(ProfilePage.CREATE_POST)}
                >
                    <i className="fa fa-plus pr-2"></i>
                    {t('profile.menu.createPost')}
                </Link>
                <Link
                    className={`list-group-item list-group-item-action list-group-item-light ${isActive(ProfilePage.FAVORITES)}`}
                    to="/profile"
                    onClick={() => setCurrentProfilePage(ProfilePage.FAVORITES)}
                >
                    <i className="fa fa-star-o pr-2"></i>
                    {t('profile.menu.favorites')}
            </Link>
                <Link
                    className={`list-group-item list-group-item-action list-group-item-light ${isActive(ProfilePage.SETTINGS)}`}
                    to="/profile"
                    onClick={() => setCurrentProfilePage(ProfilePage.SETTINGS)}
                >
                    <i className="fa fa-cog pr-2"></i>
                    {t('profile.menu.settings')}
            </Link>
            </div>
        </div>
    );
};

const mapStateToProps = (store: Store) => {
    return {
        currentPage: getCurrentProfilePage(store),
    }
};

const mapDispatchToProps = {
    setCurrentProfilePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu);
