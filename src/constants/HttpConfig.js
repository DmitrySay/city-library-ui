export const HttpConfig = {
    domains: {
        api:
            process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : process.env.REACT_APP_API_HOST,
    },
};
