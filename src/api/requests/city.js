import axios from 'axios';
import {HttpConfig} from '../../constants/HttpConfig';
import {ApiMethod} from '../methods'
import * as endpoints from '../endpoints';

export const getCities = () => {
    return axios({
        headers: {'Content-Type': 'application/json'},
        method: ApiMethod.GET,
        baseURL: HttpConfig.domains.api,
        url: `${endpoints.CITY.ROOT}?size=12`
    });
};

export const getCityById = (cityId) => {
    return axios({
        headers: {'Content-Type': 'application/json'},
        method: ApiMethod.GET,
        baseURL: HttpConfig.domains.api,
        url: `${endpoints.CITY.ROOT}/${cityId}`
    });
};