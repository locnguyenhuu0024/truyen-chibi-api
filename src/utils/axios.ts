import axios from 'axios';

const BASE_URL = 'https://otruyenapi.com/v1/api';
const ONE_MINUTE = 60000;

declare module 'axios' {
  export interface AxiosResponse<T = any> extends Promise<T> {}
}

const request = axios.create({
  baseURL: BASE_URL,
  timeout: ONE_MINUTE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { request };
