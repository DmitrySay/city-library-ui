import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import instantiateAxiosConfig from './api/config';

ReactDOM.render(<App />, document.getElementById('root'), () => {
  instantiateAxiosConfig();
});
