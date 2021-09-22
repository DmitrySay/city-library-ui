import {LOCAL_STORAGE_KEYS} from '../constants/LocalStorageKeys';

export class AuthService {
    static getRequestToken(url = '') {
        return localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
    }
}
