
import { api } from '../request';

export const addUser = (orgID, data) => api.post(`/${orgID}/add/user`, data, 'product');
