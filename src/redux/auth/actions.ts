import { Dispatch } from 'react';
import { User } from '../../interfaces';
import { logIn, logOut, registration } from '../../api/authApi';
import { ILogOut, LOG_IN, LOG_OUT, REGISTRATION, ILogIn, IRegistration } from '../common/constants';

export const loginAction = (email: string, password: string) => (dispatch: Dispatch<ILogIn>) => {
    logIn(email, password)
        .then((res) => {
            const { user, accessToken, refreshToken } = res.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: LOG_IN,
                payload: user,
            });
        })
        .catch((err) => console.log(err));
};

export const logoutAction = () => (dispatch: Dispatch<ILogOut>) => {
    logOut()
        .then(() => {
            localStorage.clear();
            dispatch({
                type: LOG_OUT,
            });
            window.location.reload();
        })
        .catch((err) => console.log(err));
};

export const registrAction = (newUser: User) => (dispatch: Dispatch<IRegistration>) => {
    registration(newUser)
        .then((res) => {
            const { user, tokens } = res.data;
            localStorage.setItem('accessToken', tokens.accessToken.token);
            localStorage.setItem('refreshToken', tokens.refreshToken);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: REGISTRATION,
                payload: user,
            });
        })
        .catch((err) => console.log(err));
};
