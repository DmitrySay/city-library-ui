import React, { useState } from 'react';
import { loadUser, login } from '../api/requests/auth';
import { LOCAL_STORAGE_KEYS } from '../constants/LocalStorageKeys';

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token');
  });

  const [profile, setProfile] = useState(() => {
    return JSON.parse(localStorage.getItem('profile'));
  });

  const invalidateToken = () => {
    localStorage.clear();
    setToken(null);
    setProfile(null);
  };

  const authenticate = (credentials) => {
    localStorage.clear();
    const requestOptions = JSON.stringify(credentials);
    return new Promise(async (resolve, reject) => {
      try {
        const loginResponse = await login(requestOptions);
        if (loginResponse?.status === 200) {
          const { token: token } = loginResponse.data;
          const userResponse = await loadUser(token);
          if (userResponse?.status === 200) {
            const profile = userResponse.data;
            setToken(token);
            setProfile(profile);
            localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, token);
            localStorage.setItem(LOCAL_STORAGE_KEYS.PROFILE, JSON.stringify(profile));

            resolve(profile);
          }
        }
      } catch (e) {
        reject(e);
      }
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        authenticate,
        invalidateToken: invalidateToken,
        profile,
      }}
      {...props}
    />
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
