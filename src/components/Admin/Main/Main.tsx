import React, { useMemo } from 'react';
import { connect } from 'react-redux';

import AdminPage from '../../../enums/AdminPage';
import { getCurrentProfilePage } from '../../../redux/admin/selectors';
import { Store } from '../../../interfaces';

import Users from '../Users/Users';
import Header from '../Header/Header';
import ControllPane from '../ControllPane/ControllPane';
import Category from '../Category/Category';
import Regions from '../Regions/Regions';
import PostList from '../PostList/PostList';
import Comments from '../Comments/Comments';

import s from './Main.module.css';

type Props = {
    currentPage: AdminPage;
};

const Main: React.FC<Props> = ({ currentPage }) => {
    const currentPageRender = useMemo(() => {
        switch (currentPage) {
            case AdminPage.USERS: {
                return <Users />;
            }
            case AdminPage.CATEGORY: {
                return <Category />;
            }
            case AdminPage.REGION: {
                return <Regions />;
            }
            case AdminPage.POSTS: {
                return <PostList />;
            }
            case AdminPage.COMMENTS: {
                return <Comments />;
            }
            default: {
                return <></>;
            }
        }
    }, [currentPage]);

    return (
        <>
            <Header />
            <div className={`${s.root} row mr-0 mt-5 pt-3`}>
                <div className="col-md-3 pr-0">
                    <ControllPane />
                </div>
                <div className={`${s.content} col-md-9`}>{currentPageRender}</div>
            </div>
        </>
    );
};

const mapStateToProps = (store: Store) => ({
    currentPage: getCurrentProfilePage(store),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
