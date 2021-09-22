import axios from 'axios';

import {HttpConfig} from '../../constants/HttpConfig';
import * as endpoints from '../endpoints';
import {ApiMethod} from '../methods'

export const login = (data) => {
    return axios({
        headers: {'Content-Type': 'application/json'},
        method: ApiMethod.POST,
        baseURL: HttpConfig.domains.api,
        url: endpoints.AUTH.LOGIN,
        data: data,
    });
};

export const loadUser = (token) => {
    return axios({
        headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
        method: 'GET',
        baseURL: HttpConfig.domains.security,
        url: endpoints.AUTH.ME,
    });
};