import { data } from 'jquery';
import { api } from '../request';

export const toggleStatusAPI = (orgID, data) => api.patch(`/${orgID}/toggle`, data, 'product');
