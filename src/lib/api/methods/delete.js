
import { api } from '../request';

export const deleteUserAPI = (orgID, id) => api.delete(`/${orgID}/user?id=${id}`, null, 'product');
