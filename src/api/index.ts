import axios from "axios";

export const requestor = axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
  });

export const initialize = (baseURL: string) => {
    requestor.defaults.baseURL = baseURL
}

requestor.interceptors.request.use((config: any) => {
    const token = window.localStorage.getItem('token');
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
});