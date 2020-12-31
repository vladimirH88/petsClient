import axios from 'axios';
import { User } from '../interfaces';
import { UPDATE_USER } from '../constants/apiConstants';

const updateUser = (user: User) => axios.put(UPDATE_USER, { user });

export default updateUser;
