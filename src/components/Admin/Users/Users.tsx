import React from 'react';
import itemsLimit from '../../../data/ItemsLimit';

const Users: React.FC = () => (
    <>
        <form className="form-inline nav-item d-flex justify-content-end mr-3">
            <label htmlFor="count">Показать</label>
            <select id="count" name="count" className="custom-select custom-select-sm text-center">
                {itemsLimit.map((item) => (
                    <option key={item.id} value={item.value}>
                        {item.name}
                    </option>
                ))}
            </select>
        </form>
        <div className="px-0">
            <ul className="list-group category">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p>Ivan</p>
                    <button className="btn btn-outline text-success" type="button">
                        <i className="fa fa-unlock" />
                    </button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p>Anna</p>
                    <button className="btn btn-outline text-success" type="button">
                        <i className="fa fa-unlock" />
                    </button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p>Kirill</p>
                    <button className="btn btn-outline text-danger" type="button">
                        <i className="fa fa-lock" />
                    </button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p>Gena</p>
                    <button className="btn btn-outline text-success" type="button">
                        <i className="fa fa-unlock" />
                    </button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p>Frola</p>
                    <button className="btn btn-outline text-success" type="button">
                        <i className="fa fa-unlock" />
                    </button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p>Jimm</p>
                    <button className="btn btn-outline text-danger" type="button">
                        <i className="fa fa-lock" />
                    </button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p>Bob</p>
                    <button className="btn btn-outline text-success" type="button">
                        <i className="fa fa-unlock" />
                    </button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p>Greg</p>
                    <button className="btn btn-outline text-success" type="button">
                        <i className="fa fa-unlock" />
                    </button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p>Igor</p>
                    <button className="btn btn-outline text-danger" type="button">
                        <i className="fa fa-lock" />
                    </button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p>Ivan</p>
                    <button className="btn btn-outline text-success" type="button">
                        <i className="fa fa-unlock" />
                    </button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p>Anna</p>
                    <button className="btn btn-outline text-success" type="button">
                        <i className="fa fa-unlock" />
                    </button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <p>Kirill</p>
                    <button className="btn btn-outline text-danger" type="button">
                        <i className="fa fa-lock" />
                    </button>
                </li>
            </ul>
        </div>
    </>
);

export default Users;
