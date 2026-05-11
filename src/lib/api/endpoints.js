export const DEFAULT_SERVICE = 'product';

export const BASE_URLS = {

    product: process.env.NEXT_PUBLIC_PRODUCT_ROOT_URL,
};

export const endpoints = {
    login: '/auth/login',
    register: '/auth/register',
    userProfile: '/user/profile',
    healthCheck: '/healthCheck',

};
