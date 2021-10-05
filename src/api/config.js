import axios from 'axios';

const instantiateConfig = () => {
    axios.defaults.baseURL = `${process.env.REACT_APP_API_HOST}/api`
};

export default instantiateConfig;
