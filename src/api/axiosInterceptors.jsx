import {useMemo} from 'react';
import axios from 'axios';
import {AuthService} from '../services/auth.service';

const RequestInterceptor = ({children}) => {
    useMemo(() => {
        axios.interceptors.request.use(async (config) => {
            const token = AuthService.getRequestToken(config?.url);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });
        // eslint-disable-next-line
    }, []);

    return children;
};

export default RequestInterceptor;
