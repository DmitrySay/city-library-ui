import React from 'react';

export function generateSuccessNotification(message) {
  return [
    <p>{message}</p>,
    {
      variant: 'success',
      preventDuplicate: true,
    },
  ];
}

export function generateErrorNotification(message) {
  return [
    <p>{message}</p>,
    {
      variant: 'error',
      preventDuplicate: true,
    },
  ];
}

