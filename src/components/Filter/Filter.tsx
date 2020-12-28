import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Filter as IFilter, Store } from '../../interfaces';
import { setFilter, getPostList } from '../../redux/common/actions';
import { getFilterSelector } from '../../redux/common/selectors';
import s from './Filter.module.css';
import { region } from '../../data/region';
import { category } from '../../data/category';

type Props = {
    filter: IFilter,
    getPostList: (page: number) => void;
    setFilter: (filter: IFilter) => void;
};

const Filter: React.FC<Props> = ({ filter, getPostList, setFilter }) => {
    const { t } = useTranslation();

    const disabledItem = (arr: string[], value: string) => {
        if (arr.indexOf(value) >= 0) {
            return 'disabled';
        }
        return '';
    };

    const inputsHandler = useCallback((name: string, value: string) => {
        console.log('inputsHandler');

        let key: any = null;
        switch (name) {
            case 'category':
                key = filter.category;
                break;
            case 'region':
                key = filter.region;
                break;
        }
        setFilter({
            ...filter,
            [name]: [...key, value]
        });
    }, [filter, setFilter]);

    const selectAllHandler = useCallback((name: string) => {
        setFilter({
            ...filter,
            [name]: []
        });
    }, [filter, setFilter]);

    const removeSelectedCategory = useCallback((value: string) => {
        setFilter({
            ...filter,
            category: filter.category.filter((item) => item !== value)
        });
    }, [filter, setFilter]);

    const removeSelectedregion = useCallback((value: string) => {
        setFilter({
            ...filter,
            region: filter.region.filter((item) => item !== value)
        });
    }, [filter, setFilter]);

    const saveFilter = () => getPostList(1);

    const clearFilter = useCallback(() => {
        const cleanFilter = {
            region: [],
            category: [],
        };
        setFilter(cleanFilter);
        getPostList(1);
    }, [getPostList, setFilter]);

    return (
        <div className={s.sticky}>
            <div className={`list-group `}>
                <h4 className="text-center">Фильтры</h4>
                <div className="dropdown dropright">
                    <Link className="dropdown-toggle list-group-item list-group-item-action shadow" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {t('filter.category')}
                    </Link>
                    <div className="dropdown-menu shadow" aria-labelledby="navbarDropdownMenuLink">
                        <Link className={`${s.dropdownItem} dropdown-item`} to="/" onClick={() => selectAllHandler('category')}>
                            {t('filter.any')}
                        </Link>
                        {category.map(elem =>
                            <Link className={`${s.dropdownItem} dropdown-item ${disabledItem(filter.category, elem.value)}`} to="/" key={elem.id} onClick={() => inputsHandler('category', elem.value)}>
                                {elem.name}
                            </Link>
                        )}
                    </div>
                    {filter.category.length ? (
                        <div className="h5 my-1">
                            {filter.category.map(item => (
                                <span className="badge badge-secondary h2 ml-2" key={item}>
                                    {item}
                                    <i className="fa fa-times px-2" style={{cursor: 'pointer'}} onClick={() => removeSelectedCategory(item)}></i>
                                </span>
                            ))}
                        </div>
                    ) : (
                            <></>
                        )
                    }
                </div>

                <div className="dropdown dropright">
                    <Link className="dropdown-toggle list-group-item list-group-item-action shadow" to="/"
                        id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {t('filter.region')}
                    </Link>
                    <div className="dropdown-menu shadow" aria-labelledby="navbarDropdownMenuLink">
                        <Link className={`${s.dropdownItem} dropdown-item`} to="/" onClick={() => selectAllHandler('region')}>
                            {t('filter.any')}
                        </Link>
                        {region.map(elem =>
                            <Link className={`${s.dropdownItem} dropdown-item ${disabledItem(filter.region, elem.value)} `} to="/" key={elem.id} onClick={() => inputsHandler('region', elem.value)}>
                                {elem.name}
                            </Link>
                        )}
                    </div>
                    {filter.region.length ? (
                        <div className="h5 my-1">
                            {filter.region.map(item => (
                                <span className="badge badge-secondary h2 ml-2" key={item}>
                                    {item}
                                    <i className="fa fa-times px-2" style={{cursor: 'pointer'}} onClick={() => removeSelectedregion(item)}></i>
                                </span>
                            ))}
                        </div>
                    ) : (
                            <></>
                        )
                    }
                </div>
                <div className="form-row my-2">
                    <div className="col">
                        <button type="button" className="btn btn-secondary btn-lg shadow form-control mt-2" onClick={clearFilter}>
                            {t('filter.reset')}
                        </button>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-lg shadow form-control mt-2" onClick={saveFilter}>
                            {t('filter.apply')}
                        </button>
                    </div>

                </div>
            </div>
        </div >
    );
};

const mapStateToProps = (store: Store) => {
    return {
        filter: getFilterSelector(store),
    }
};

const mapDispatchToProps = {
    getPostList,
    setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
