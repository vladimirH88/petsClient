import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Store, User } from '../../interfaces';
import { getUserSelector } from '../../redux/common/selectors';
import { login } from '../../redux/auth/actions';
import s from './Login.module.css';

type Props = {
	user: User | null;
	login: (emeil: string, password: string) => void;
};

const Login: React.FC<Props> = ({ user, login }) => {
	const { t } = useTranslation();
	const history = useHistory();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submitClick = (e: React.MouseEvent): void => {
		e.preventDefault();
		login(email, password);
	}

	const emailInputHundler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
		setEmail(e.target.value)
	}, [setEmail]);

	const passwordInputHundler = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
		setPassword(e.target.value);
	}, [setPassword]);

	useEffect(() => {
		if (user) {
			history.push('/')
		}
	}, [user]);

	return (
		<div className={s.container}>
			<div className='card w-25 shadow p-3 mb-5 rounded'>
				<form name="loginForm">
					<h2 className="text-center mb-4">{t('login.title')}</h2>
					<fieldset className="form-group">
						<input type="email" name="email" className="form-control form-control-lg" placeholder={t('login.email')} onChange={emailInputHundler} />
					</fieldset>
					<fieldset className="form-group">
						<input type="password" name="password" className="form-control form-control-lg" placeholder={t('login.password')} onChange={passwordInputHundler} />
					</fieldset>
					<fieldset className="form-group">
						<button type="button" className="btn btn-primary btn-lg form-control mt-2" onClick={submitClick}>{t('login.logIn')}</button>
					</fieldset>
					<p className="text-center"><Link to="/registration">{t('login.registration')}</Link></p>
				</form>
			</div>
		</div >
	);
};

const mapStateToProps = (store: Store) => {
	return {
		user: getUserSelector(store),
	}
};

const mapDispatchToProps = {
	login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);