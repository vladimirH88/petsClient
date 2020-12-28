import axios from 'axios';
import { User } from '../interfaces';
import { LOG_IN, LOG_OUT, REGISTRATION, REFRESH_TOKEN } from '../constants/apiConstants';

export const logIn = (email: string, password: string) => {
    return axios.post(LOG_IN, { email, password });
};

export const logOut = () => {
    return axios.get(LOG_OUT);
};

export const registration = (user: User) => {
    return axios.post(REGISTRATION, user);
};

axios.interceptors.request.use(
    (response) => {
        if (localStorage.getItem('accessToken')) {
            response.headers = {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'user-id': JSON.parse(localStorage.getItem('user') ?? '').id,
                'refresh': localStorage.getItem('refreshToken'),
            };
        }
        return response;
    },
    (error) => {
        Promise.reject(error);
    },
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const originRequest = error.config;
        const status = error.response ? error.response.status : null;
        if (status?.toString() === '401' && localStorage.getItem('accessToken')) {
            return axios
                .post(REFRESH_TOKEN, { refreshToken: localStorage.getItem('refreshToken') })
                .then((res) => {
                    if (res.headers) {
                        // const newToken = res.headers['access-token'] ?? '';
                        const newToken = res.data.data.accessToken ?? '';
                        const newRefreshToken = res.data.data.refreshToken ?? '';
                        const oldToken = localStorage.getItem('accessToken');
                        if (newToken !== oldToken) {
                            localStorage.setItem('accessToken', newToken);
                            localStorage.setItem('refreshToken', newRefreshToken);
                            return axios(originRequest);
                        }
                    }
                    return Promise.reject(error);
                })
                .catch((error) => {
                    localStorage.clear();
                    window.location.reload();
                    console.log(error);
                });
        }
        throw error;
    },
);
