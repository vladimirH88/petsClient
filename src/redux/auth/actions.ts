import { User } from '../../interfaces';
import { logIn, logOut, registration } from '../../api/authApi';
import { ILogOut, LOG_IN, LOG_OUT, REGISTRATION } from '../common/constants';
import { ILogIn, IRegistration } from '../common/constants';
import { Dispatch } from 'react';

export const login = (email: string, password: string) => {
    return (dispatch: Dispatch<ILogIn>) => {
        logIn(email, password)
            .then(res => {
                const { user, accessToken, refreshToken } = res.data.data;
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                localStorage.setItem('user', JSON.stringify(user));
                dispatch({
                    type: LOG_IN,
                    payload: user,
                });
            })
            .catch(err => console.log(err));
    };
};

export const logout = () => {
    return (dispatch: Dispatch<ILogOut>) => {
        logOut()
            .then(() => {
                localStorage.clear();
                dispatch({
                    type: LOG_OUT,
                });
                window.location.reload();
            })
            .catch(err => console.log(err));
    };
};

export const registr = (user: User) => {
    return (dispatch: Dispatch<IRegistration>) => {
        registration(user)
            .then(res => {
                const { user, tokens } = res.data.data;
                localStorage.setItem('accessToken', tokens.accessToken.token);
                localStorage.setItem('refreshToken', tokens.refreshToken);
                localStorage.setItem('user', JSON.stringify(user));
                dispatch({
                    type: REGISTRATION,
                    payload: user,
                });
            })
            .catch(err => console.log(err));
    };
};