
import { api } from '../request';

export const upadetUserAPI = (orgID, data) => api.put(`/${orgID}/update`, data, 'product');
