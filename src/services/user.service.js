import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const userService = {
    getAll: () => axiosService.get(urls.users),
    getOne: (id) => axiosService.get(`${urls.users}/${id}`)
}
