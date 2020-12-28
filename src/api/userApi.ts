import axios from 'axios';
import { User } from '../interfaces';
import { UPDATE_USER } from '../constants/apiConstants';

export const updateUser = (user: User) => {
    return axios.put(UPDATE_USER, { user });
};
