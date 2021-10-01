import {useMemo} from 'react';
import axios from 'axios';
import {AuthService} from '../services/auth.service';
import {useAuth} from "../context/AuthContext";

const RequestInterceptor = ({children}) => {
    const {invalidateToken} = useAuth();

    useMemo(() => {
        axios.interceptors.request.use(async (config) => {
            const isTokenExpired = AuthService.isTokenExpired();
            if (isTokenExpired) {
                invalidateToken();
                return config;
            }
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
