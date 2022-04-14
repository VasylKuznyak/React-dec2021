import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

export const usersService = {
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService.get(`${urls.users}/${id}`),
    getPostsById: (id) => axiosService.get(`${urls.users}/${id}/posts`),
}

