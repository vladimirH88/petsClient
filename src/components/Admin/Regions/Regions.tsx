import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { connect } from 'react-redux';

import { deleteRegion, addRegion, updateRegion } from '../../../api/adminApi';
import { getRegionListAction } from '../../../redux/admin/actions';
import { getRegionsSelector } from '../../../redux/admin/selectors';
import { SelectItem, Store } from '../../../interfaces';

type Props = {
    getRegionList: () => void;
    regions: SelectItem[];
};

const Regions: React.FC<Props> = ({ regions, getRegionList }) => {
    const [regionName, setRegionName] = useState('');
    const [editingRegion, setEditingRegion] = useState<SelectItem | null>(null);

    const addRegionHandler = useCallback(() => {
        setRegionName('');
        if (editingRegion) {
            return updateRegion({
                ...editingRegion,
                name: regionName,
            });
        }
        return addRegion(regionName).then(() => getRegionList());
    }, [regionName, editingRegion, setRegionName, getRegionList]);

    const onEditCategory = useCallback(
        (category: SelectItem) => {
            setEditingRegion(category);
            setRegionName(category.name);
        },
        [setRegionName, setEditingRegion],
    );

    const deleteRegionHandler = useCallback((_, id: number) => deleteRegion(id).then(() => getRegionList()), [
        getRegionList,
    ]);

    const createRegionForm = useMemo(
        () => (
            <div
                className="modal fade"
                id="addRegion"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="addRegionLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addRegionLabel">
                                {editingRegion ? 'Изменить область' : 'Добавить область'}
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Название области"
                                value={regionName}
                                onChange={(e) => setRegionName(e.target.value)}
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
                                onClick={addRegionHandler}
                            >
                                {editingRegion ? 'Изменить' : 'Добавить'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ),
        [regionName, editingRegion, setRegionName, addRegionHandler],
    );

    useEffect(() => {
        getRegionList();
    }, [getRegionList]);

    return (
        <ul className="list-group category">
            <li className="list-group-item d-flex">
                <button
                    type="button"
                    className="btn btn-success float-right"
                    data-toggle="modal"
                    data-target="#addRegion"
                >
                    <i className="fa fa-plus mr-2" />
                    Добавить
                </button>
                {createRegionForm}
            </li>
            {regions.length ? (
                <>
                    {regions.map((item) => (
                        <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                            <p>{item.name}</p>
                            <div>
                                <button
                                    className="btn btn-outline text-info"
                                    type="button"
                                    data-toggle="modal"
                                    data-target="#addRegion"
                                    onClick={() => onEditCategory(item)}
                                >
                                    <i className="fa fa-pencil" />
                                </button>
                                <button
                                    className="btn btn-outline text-danger"
                                    type="button"
                                    onClick={(e) => deleteRegionHandler(e, item.id)}
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
    regions: getRegionsSelector(store),
});

const mapDispatchToProps = {
    getRegionList: getRegionListAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Regions);
