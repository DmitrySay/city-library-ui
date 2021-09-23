import {LOCAL_STORAGE_KEYS} from '../constants/LocalStorageKeys';
import * as _ from 'lodash';
import jwtDecode from 'jwt-decode';

export class AuthService {

    static getRequestToken(url = '') {
        return localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
    }

    /**
     * Method check if token = null or expired then return true otherwise false
     * @param url
     * @param pathname
     * @returns {boolean}
     */
    static isTokenExpired() {
        try {
            const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
            if (!token) {
                return true;
            }
            const decoded = jwtDecode(token);
            const exp = _.get(decoded, 'exp');
            const date = new Date(0);
            date.setUTCSeconds(exp);
            return !(date.valueOf() > new Date().valueOf());
        } catch (error) {
            return true;
        }
    }
}
