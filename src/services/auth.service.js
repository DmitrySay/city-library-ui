import { LOCAL_STORAGE_KEYS } from '../constants/LocalStorageKeys';
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

  static checkEditPermission(profile) {
    const authorities = ['ALL', 'EDIT'];
    let roles = profile?.roles ?? [];
    let permissions = [];
    roles.forEach((role) => {
      let perms = role.permissions ?? [];
      perms.forEach((permission) => {
        if (authorities.includes(permission.name)) {
          permissions.push(permission);
        }
      });

    });
    return permissions.length > 0;
  }
}
