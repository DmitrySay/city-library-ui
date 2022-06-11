import React from 'react';
import { AuthProvider } from '../context/AuthContext';

const providers = [
  AuthProvider,
];

const combineProviders = (providers) => {
  return providers.reduce(
    (AccumulateProviders, CurrentProvider) => {
      return ({ children }) => {
        return (
          <AccumulateProviders>
            <CurrentProvider>{children}</CurrentProvider>
          </AccumulateProviders>
        );
      };
    },
    ({ children }) => <>{children}</>,
  );
};

export default combineProviders(providers);
