import Request from "./Axios.ts";

const { VITE_BASE_URL } = import.meta.env
const server = new Request({
  baseURL: VITE_BASE_URL,
  timeout: 10 * 1000,
  transform: {
    // instance  interceptor
    requestInterceptor: (config) => {
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (config) => {
      return config;
    },
    responseInterceptorCatch: (err) => {
      return err;
    }
  }
});

export { server };
