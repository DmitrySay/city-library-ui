import axios from 'axios';

const instantiateConfig = () => {
 // console.log("window._env_.REACT_APP_API_HOST", `${window._env_.REACT_APP_API_HOST}/api/`);
  // axios.defaults.baseURL = `${window._env_.REACT_APP_API_HOST}/api/`;
  axios.defaults.baseURL = 'http://localhost:8080/api';
};

export default instantiateConfig;
