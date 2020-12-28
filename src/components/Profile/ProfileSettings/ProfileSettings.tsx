import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { region } from '../../../data/region';
import { Store, User, SelectItem } from '../../../interfaces';
import { editUser } from '../../../redux/profile/actions';
import { getUserSelector } from '../../../redux/common/selectors';

type Props = {
    user: User | null;
    editUser: (user: User) => void;
};

const ProfileSettings: React.FC<Props> = ({ user, editUser }) => {
    const { t } = useTranslation();
    const [userData, setUserData] = useState(user ? user : {} as User);

    const renderSelectItems = (arr: SelectItem[]) => {
        return arr.map(item =>
            <option key={item.id} value={item.value}>
                {item.name}
            </option>
        );
    };

    const inputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    }, [userData, setUserData]);

    const editUserHandler = useCallback(() => {
        editUser(userData);

    }, [userData, editUser]);

    return (
        <main>
            <div className="card m-4 p-1 w-75 mx-auto shadow">
                <div className="card-body">
                    <div className="card-title h5 text-center">
                        {t('profile.settings.personalDataAndLocation')}
                    </div>
                    <div>
                        <fieldset className="form-group">
                            <label htmlFor="email">
                                {t('profile.settings.email')}
                                <span className="text-danger">
                                    *
                                </span>
                            </label>
                            <input type="email" name="email" className="form-control" placeholder={t('profile.settings.email')} value={userData?.email} onChange={inputHandler} />
                        </fieldset>
                        <fieldset className="form-group">
                            <label htmlFor="name">
                                {t('profile.settings.name')}
                                <span className="text-danger">
                                    *
                                </span>
                            </label>
                            <input className="form-control" type="text" placeholder="Имя" id="name" name="name" value={userData?.name} onChange={inputHandler} />
                        </fieldset>

                        <fieldset className="form-group">
                            <label htmlFor="region">
                                {t('profile.settings.region')}
                                <span className="text-danger">
                                    *
                                </span>
                            </label>
                            <select
                                className="form-control"
                                id="region"
                                name="region"
                                required
                                value={userData?.region}
                                onChange={inputHandler}
                            >
                                <option value="" disabled>{t('profile.settings.region')}</option>
                                {renderSelectItems(region)}
                            </select>
                        </fieldset>

                        <fieldset className="form-group">
                            <label htmlFor="city">
                                {t('profile.settings.city')}
                                <span className="text-danger">
                                    *
                                    </span>
                            </label>
                            <input className="form-control" type="text" placeholder="Город" id="city" name="city" value={userData.city} onChange={inputHandler} />
                        </fieldset>
                    </div>
                </div>
            </div>

            <div className="card m-2 p-1 w-75 mx-auto shadow">
                <div className="card-body">
                    <div className="card-title text-center h5">
                        {t('profile.settings.contactInformation')}
                    </div>
                    <p className="card-text text-center">
                        {t('profile.settings.contactNumbers')}
                    </p>
                    <fieldset className="form-group">
                        <label htmlFor="phone">
                            {t('profile.settings.yourPhoneNumber')}
                            <span className="text-danger">
                                *
                            </span>
                        </label>
                        <input
                            className="form-control"
                            type="tel"
                            placeholder="+375(XX)-XXX-XXXX"
                            id="phoneNumber"
                            name="phoneNumber"
                            required
                            value={userData.phoneNumber}
                            onChange={inputHandler}
                        />
                    </fieldset>

                    <div className="collapse" id="collapsePhone">
                        <fieldset className="form-group">
                            <label htmlFor="phone">
                                {t('profile.settings.additionalNumber')}
                            </label>
                            <input
                                className="form-control"
                                type="tel"
                                placeholder="+375(XX)-XXX-XXXX"
                                id="additionalPhoneNumber"
                                name="additionalPhoneNumber"
                                required
                                value={userData.additionalPhoneNumber}
                                onChange={inputHandler}
                            />
                        </fieldset>
                    </div>
                    <button
                        className="btn btn-sm btn-primary ml-2"
                        data-toggle="collapse"
                        data-target="#collapsePhone"
                        aria-expanded="false"
                        aria-controls="collapsePhone"
                    >
                        <i className="fa fa-plus mr-1"></i>
                    </button>
                </div>
            </div>

            <fieldset className="form-group w-50 mx-auto">
                <button
                    className="form-control btn btn-outline-success mt-4"
                    onClick={editUserHandler}
                >
                    {t('profile.settings.saveChanges')}
                </button>
            </fieldset>
        </main>
    );
};

const mapStateToProps = (store: Store) => {
    return {
        user: getUserSelector(store),
    }
};

const mapDispatchToProps = {
    editUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
