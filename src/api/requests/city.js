import axios from 'axios';
import {HttpConfig} from '../../constants/HttpConfig';
import {ApiMethod} from '../methods'
import * as endpoints from '../endpoints';

export const getCities = (query, page) => {
    let url = `${endpoints.CITY.ROOT}?size=12&sort=id&page=${page-1}&search=${query}`;
    return axios({
        headers: {'Content-Type': 'application/json'},
        method: ApiMethod.GET,
        baseURL: HttpConfig.domains.api,
        url: url
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

export const updateCity = (data) => {
    return axios({
        headers: {'Content-Type': 'application/json'},
        method: ApiMethod.PUT,
        baseURL: HttpConfig.domains.api,
        url: `${endpoints.CITY.ROOT}/${data.id}`,
        data: data,
    });
};