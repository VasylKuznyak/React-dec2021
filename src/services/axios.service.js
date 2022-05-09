import axios from "axios";
import {createBrowserHistory} from 'history';

import {baseURL} from "../constants";
import {authService} from "./auth.service";

const history = createBrowserHistory();
const axiosService = axios.create({baseURL});

let isRefreshing = false;

axiosService.interceptors.request.use((confiq) => {
    const access = localStorage.getItem('access');
    if (access) {
        confiq.headers.Authorization = `Bearer ${access}`;
    }
    return confiq;
});

axiosService.interceptors.response.use(
    (confiq) => {
        return confiq;
    },
    async (error) => {
        const refreshToken = localStorage.getItem('refresh');
        if (error.response?.status === 401 && error.confiq && !isRefreshing && refreshToken) {
            isRefreshing = true;
            try {
                const {data} = await authService.refresh(refreshToken);
                const {access, refresh} = data;
                localStorage.setItem('access', access);
                localStorage.setItem('refresh', refresh);
            } catch (e) {
                localStorage.clear();
                history.replace('/login?expSession=true');
            }
            isRefreshing = false;
            return axiosService.request(error.confiq);
        }
        return Promise.reject(error);
    }
);

export {
    axiosService,
    history
}


