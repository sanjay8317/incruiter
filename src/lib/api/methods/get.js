import { endpoints } from '../endpoints';
import { api } from '../request';

export const healthCheckAPI = () => api.get(endpoints?.healthCheck, null, 'product');
export const getUserList= (orgId, data) => api.get(`/${orgId}/user/list?page=${data.page}&size=${data.limit}&search=${data.search}`, null);
