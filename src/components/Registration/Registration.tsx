import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { User } from '../../interfaces';
import { registr } from '../../redux/auth/actions';
import s from './Registration.module.css';

type FormData = {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
};

const initialFormData: FormData = {
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
};

let validateFormData = {
    email: false,
    name: false,
    surname: false,
    password: false,
    confirmPassword: false,
};

type Props = {
    registr: (user: User | any) => void;
};

const Registration: React.FC<Props> = ({ registr }) => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState(initialFormData);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const { name, email, password, confirmPassword } = formData;

    const inputHundler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
        validateFormData = {
            ...validateFormData,
            [e.target.name]: false,
        };
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }, [formData, setFormData, validateFormData]);

    const validate = (): boolean => {
        let isValid = true;
        if (!email.includes('@')) {
            setEmailErrorMessage(t('registration.invalidEmail'));
            validateFormData.email = true;
            isValid = false;
        }
        if (name.length < 1) {
            isValid = false;
            validateFormData.name = true;
        }
        if (password.length < 6) {
            setPasswordErrorMessage(t('registration.shortPasswordError'));
            isValid = false;
            validateFormData.password = true;
        }
        if (confirmPassword.length < 6) {
            setPasswordErrorMessage(t('registration.shortPasswordError'));
            isValid = false;
            validateFormData.confirmPassword = true;
        }
        if (password !== confirmPassword) {
            setPasswordErrorMessage(t('registration.PasswordsDontMatch'));
            isValid = false;
            validateFormData.password = true;
            validateFormData.confirmPassword = true;
        }
        return isValid;
    }

    const submitClick = () => {
        if (validate()) {
            registr(formData)
        };
    };

    return (
        <>
            <div className={s.container}>
                <div className="card w-25 border shadow p-3 mb-5 bg-white rounded">
                    <form className="no-gutters">
                        <h2 className="text-center mb-4">{t('registration.title')}</h2>

                        <fieldset className="form-group">
                            <input type="email" name="email" className={`form-control form-control-lg ${validateFormData.email ? "is-invalid" : ""}`} placeholder={t('registration.email')} onChange={inputHundler} required />
                            <div className="invalid-feedback">
                                {emailErrorMessage}
                            </div>
                        </fieldset>

                        <fieldset className="form-group">
                            <input type="text" name="name" className={`form-control form-control-lg ${validateFormData.name ? "is-invalid" : ""}`} placeholder={t('registration.name')} onChange={inputHundler} required />
                            <div className="invalid-feedback">
                                {t('registration.fillFieldError')}
                            </div>
                        </fieldset>

                        <fieldset className="form-group">
                            <input type="password" name="password" className={`form-control form-control-lg ${validateFormData.password ? "is-invalid" : ""}`} placeholder={t('registration.password')} onChange={inputHundler} />
                            <div className="invalid-feedback">
                                {passwordErrorMessage}
                            </div>
                        </fieldset>

                        <fieldset className="form-group">
                            <input type="password" name="confirmPassword" className={`form-control form-control-lg ${validateFormData.confirmPassword ? "is-invalid" : ""}`} placeholder={t('registration.confirmPassword')} onChange={inputHundler} />
                            <div className="invalid-feedback">
                                {passwordErrorMessage}
                            </div>
                        </fieldset>

                        <fieldset className="form-group text-center">
                            <button type="button" className="btn btn-primary btn-lg form-control" onClick={submitClick}>Зарегистрироваться</button>
                        </fieldset>
                        <p className="text-center">
                            {t('registration.isHasAccount')}
                            <Link className="mx-1" to="/login">{t('registration.logIn')}</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    registr,
};

export default connect(null, mapDispatchToProps)(Registration);