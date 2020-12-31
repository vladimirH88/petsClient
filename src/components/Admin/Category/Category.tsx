import React, { useEffect, useCallback, useState, useMemo } from 'react';
import { connect } from 'react-redux';

import { deleteCategory, addCategory, updateCategory } from '../../../api/adminApi';
import { getCategoryListAction } from '../../../redux/admin/actions';
import { getCategoriesSelector } from '../../../redux/admin/selectors';
import { SelectItem, Store } from '../../../interfaces';

type Props = {
    getCategories: () => void;
    categories: SelectItem[];
};

const Category: React.FC<Props> = ({ categories, getCategories }) => {
    const [categoryName, setCategoryName] = useState('');
    const [editingCategory, setEditingCategory] = useState<SelectItem | null>(null);

    const addCategoryHandler = useCallback(() => {
        setCategoryName('');
        if (editingCategory) {
            return updateCategory({
                ...editingCategory,
                name: categoryName,
            });
        }
        return addCategory(categoryName).then(() => getCategories());
    }, [categoryName, editingCategory, setCategoryName, getCategories]);

    const onEditCategory = useCallback(
        (category: SelectItem) => {
            setEditingCategory(category);
            setCategoryName(category.name);
        },
        [setCategoryName, setEditingCategory],
    );

    const deleteCategoryHandler = useCallback((_, id: number) => deleteCategory(id).then(() => getCategories()), [
        getCategories,
    ]);

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    const createCategoryForm = useMemo(
        () => (
            <div
                className="modal fade"
                id="addCategory"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="addCategoryLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addCategoryLabel">
                                {editingCategory ? 'Изменить категорию' : 'Добавить категорию'}
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Название категории"
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                Отмена
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={addCategoryHandler}
                            >
                                {editingCategory ? 'Изменить' : 'Добавить'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ),
        [categoryName, editingCategory, setCategoryName, addCategoryHandler],
    );

    return (
        <ul className="list-group text-right">
            <li className="list-group-item d-flex">
                <button
                    type="button"
                    className="btn btn-success float-right"
                    data-toggle="modal"
                    data-target="#addCategory"
                >
                    <i className="fa fa-plus mr-2" />
                    Добавить
                </button>
                {createCategoryForm}
            </li>
            {categories.length ? (
                <>
                    {categories.map((item) => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                            <p>{item.name}</p>
                            <div>
                                <button
                                    className="btn btn-outline text-info"
                                    type="button"
                                    data-toggle="modal"
                                    data-target="#addCategory"
                                    onClick={() => onEditCategory(item)}
                                >
                                    <i className="fa fa-pencil" />
                                </button>
                                <button
                                    className="btn btn-outline text-danger"
                                    type="button"
                                    onClick={(e) => deleteCategoryHandler(e, item.id)}
                                >
                                    <i className="fa fa-trash-o" />
                                </button>
                            </div>
                        </li>
                    ))}
                </>
            ) : (
                <></>
            )}
        </ul>
    );
};

const mapStateToProps = (store: Store) => ({
    categories: getCategoriesSelector(store),
});

const mapDispatchToProps = {
    getCategories: getCategoryListAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
