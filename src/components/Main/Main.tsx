import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import { LimitItemsPerPage } from '../../enums/LimitItemsPerPage';
import { itemsLimit } from '../../data/ItemsLimit';
import { sortingParamsList } from '../../data/sorting';
import { getPostList, setLimitPerPage, setSorting, getFavoritePostIds } from '../../redux/common/actions';
import { addPostToFavorites, removePostFromFavorites } from '../../redux/profile/actions';
import { getPostsDataSelector, getUserSelector, getfavoritePostIdsSelector } from '../../redux/common/selectors';
import { Store, Sorting, User, PostListData } from '../../interfaces';
import Filter from '../Filter/Filter';
import Header from '../Header/Header';
import ShortPost from '../ShortPost/ShortPost';
import Pagination from '../Pagination/Pagination';
// import Footer from '../Footer/Footer';

type Props = {
    user: User | null;
    postsData: PostListData;
    favoritesPostIds: number[];
    getPostList: (page: number) => void;
    setSorting: (data: Sorting) => void;
    setLimitPerPage: (data: LimitItemsPerPage) => void;
    addPostToFavorites: (postId: number) => void;
    removePostFromFavorites: (postId: number) => void;
    getFavoritePostIds: () => void;
};

const Main: React.FC<Props> = ({
    user,
    postsData,
    favoritesPostIds,
    getFavoritePostIds,
    getPostList,
    setSorting,
    setLimitPerPage,
    addPostToFavorites,
    removePostFromFavorites
}) => {

    const { t } = useTranslation();
    const { data, pageNumber, pageSize, totalItems } = postsData;

    const getPosts = useCallback((page = 1) => {
        getPostList(page);
        getFavoritePostIds();
    }, [getPostList, getFavoritePostIds]);

    const sortingHandler = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSorting(JSON.parse(e.target.value));
        getPosts();
    }, [getPosts, setSorting]);

    // const limitPerPageHandler = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    //     setLimitPerPage(JSON.parse(e.target.value));
    //     getPosts();
    // }, [setSorting]);

    const limitPerPageHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLimitPerPage(JSON.parse(e.target.value));
        getPosts();
    };

    useEffect(() => {
        getPosts();
    }, [getPosts]);
    return (
        <>
            <Header />
            <div className="row d-md-flex mx-0 mt-5">
                <div className="col-md-3">
                    <Filter />
                </div>
                {data.length ? (
                    <>
                        <div className="col-md-7 mt-5">
                            {data.map(post => (
                                <Link className="list-group-item-action" to={`${post.id}`} key={post.id}>
                                    <ShortPost
                                        post={post}
                                        addToFavorites={addPostToFavorites}
                                        removeFromFavorites={removePostFromFavorites}
                                        isFavorite={favoritesPostIds.includes(post.id)}
                                        isAuthorized={!!user}
                                    />
                                </Link>
                            ))}
                        </div>
                        <div className="col-md-2 mt-4">
                            <form className="form-inline nav-item d-flex justify-content-end mr-3">
                                <select id="order" name="sort" className="custom-select custom-select-sm text-center" onChange={sortingHandler}>
                                    {sortingParamsList.map(item =>
                                        <option key={item.id} value={JSON.stringify(item.value)}>{item.name}</option>
                                    )}
                                </select>
                                <select id="count" name="count" className="custom-select custom-select-sm text-center" onChange={limitPerPageHandler}>
                                    {itemsLimit.map(item =>
                                        <option key={item.id} value={item.value}>{item.name}</option>
                                    )}
                                </select>
                            </form>
                        </div>
                    </>
                ) : (
                        <div className="col-md-7 mt-5">
                            <h4 className="text-center">{t('notFound')}</h4>
                        </div>
                    )}
            </div>
            {
                data.length ? (
                    <Pagination
                        totalItems={totalItems}
                        pageNumber={pageNumber}
                        pageSize={pageSize}
                        changePage={getPosts}
                    />
                ) : (
                        <></>
                    )
            }

            {/* <Footer /> */}
        </>
    );
};

const mapStateToProps = (store: Store) => {
    return {
        user: getUserSelector(store),
        postsData: getPostsDataSelector(store),
        favoritesPostIds: getfavoritePostIdsSelector(store),
    };
};

const mapDispatchToProps = {
    getPostList,
    setSorting,
    setLimitPerPage,
    getFavoritePostIds,
    addPostToFavorites,
    removePostFromFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
