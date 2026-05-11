import { createClient } from './client';
import { DEFAULT_SERVICE } from './endpoints';

/**
 * This is api wrapper. Here we are adding all the pre-defined methods 
 */
export const api = {
    get: async (url, config = {}, service = DEFAULT_SERVICE) => {
        const client = createClient(service);
        const response = await client.get(url, config);
        return response;
    },

    // post: async (url, data, config = {}, service = DEFAULT_SERVICE) => {
    //     const client = createClient(service);
    //     const response = await client.post(url, data, config);
    //     return response;
    // },
    post: async (url, data, configOrService = {}, service = DEFAULT_SERVICE) => {
        let config = {};
        let resolvedService = service;

        if (typeof configOrService === 'string') {
            resolvedService = configOrService;
        } else {
            config = configOrService;
        }

        const client = createClient(resolvedService);
        return client.post(url, data, config);
    },

    // put: async (url, data, config = {}, service = DEFAULT_SERVICE) => {
    //     const client = createClient(service);
    //     const response = await client.put(url, data, config);
    //     return response;
    // },
    put: async (url, data, configOrService = {}, service = DEFAULT_SERVICE) => {
        let config = {};
        let resolvedService = service;

        // If 3rd arg is a string → it's service
        if (typeof configOrService === 'string') {
            resolvedService = configOrService;
        } else {
            config = configOrService;
        }

        const client = createClient(resolvedService);
        return client.put(url, data, config);
    },

    patch: async (url, data, config = {}, service = DEFAULT_SERVICE) => {
        const client = createClient(service);
        const response = await client.patch(url, data, config);
        return response;
    },

    //     patch: async (url, data, configOrService = {}, service = DEFAULT_SERVICE) => {
    //     let config = {};
    //     let resolvedService = service;

    //     if (typeof configOrService === 'string') {
    //         resolvedService = configOrService;
    //     } else {
    //         config = configOrService;
    //     }

    //     const client = createClient(resolvedService);
    //     return client.patch(url, data, config);
    // },

    delete: async (url, config = {}, service = DEFAULT_SERVICE) => {
        const client = createClient(service);
        const response = await client.delete(url, config);
        return response;
    },

};
