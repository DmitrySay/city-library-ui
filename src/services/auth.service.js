import {AUTH} from '../api/endpoints';
import {LOCAL_STORAGE_KEYS} from '../constants/LocalStorageKeys';

export class AuthService {
    static emptyTokenRequestsUrls = [
        AUTH.LOGIN,
    ];

    static getRequestToken(url = '') {
        const userToken = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
        return userToken;
    }
}
