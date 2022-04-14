import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

export const postsService = {
    getAll: () => axiosService(urls.posts),
    getById: (id) => axiosService(`${urls.posts}/${id}`),
    getCommentsById: (id) => axiosService(`${urls.posts}/${id}/comments`),
}