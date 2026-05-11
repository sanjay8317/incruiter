import axios from 'axios';
import { BASE_URLS, DEFAULT_SERVICE } from './endpoints';
import { zunoyAccountSessionEndLogoutUrl } from '@/constants/urls';
import Cookies from 'js-cookie';

let isUnauthorized = false;
let sharedAbortController = new AbortController();
export const isLocal = process.env.NEXT_PUBLIC_ENV === 'local';

/**
 * Creates a customized Axios client for a given service.
 *
 * @param {string} [service=DEFAULT_SERVICE] - The service key used to determine the base URL.
 * @returns {Object} A configured Axios instance.
 *
 * @example
 * const client = createClient('auth');
 * client.get('/profile').then(res => console.log(res.data));
 */
export const createClient = (service = DEFAULT_SERVICE) => {
    const baseURL = BASE_URLS[service] || BASE_URLS.main;

    const client = axios.create({
        baseURL,
        // timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
        },
        signal: sharedAbortController.signal,
        withCredentials: !isLocal,
    });

    /**
     * Request interceptor:
     * - Attaches the Authorization token (if present).
     * - Cancels the request immediately if unauthorized state is active.
     */
    client.interceptors.request.use(config => {
        if (isUnauthorized) {
            return Promise.reject(new axios.Cancel('Request blocked due to 401.'));
        }

        if (isLocal) {
            if (typeof window !== 'undefined') {
                const token = Cookies.get('at');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            }
        }
        
        config.signal = sharedAbortController.signal;
        return config;
    });

    /**
     * Response interceptor:
     * - Handles cancellation and suppresses rejected promises.
     * - On 401 Unauthorized:
     *   - Marks as unauthorized.
     *   - Aborts in-flight requests.
     *   - Clears local/session storage.
     *   - Redirects to login page.
     */
    client.interceptors.response.use(
        res => res,
        err => {
            if (axios.isCancel(err) || err.code === 'ERR_CANCELED') {
                // Return a pending promise to suppress error propagation
                return new Promise(() => { });
            }

            const status = err?.response?.status;

            if (status === 401 && !isUnauthorized) {
                isUnauthorized = true;

                // Abort all ongoing requests
                sharedAbortController.abort();
                sharedAbortController = new AbortController();

                // Clear storage and redirect
                if (typeof window !== 'undefined') {
                    localStorage.clear();
                    sessionStorage.clear();
                    Cookies.remove('at');
                    window.location.href = zunoyAccountSessionEndLogoutUrl;
                }
            }

            return Promise.reject(err);
        },
    );

    return client;
};
