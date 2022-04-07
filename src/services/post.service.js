import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const postService = {
    getAll: () => axiosService.get(urls.posts),
    getOne: (id) => axiosService.get(`${urls.posts}/${id}`)
}
