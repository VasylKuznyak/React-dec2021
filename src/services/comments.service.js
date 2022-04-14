import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

export const commentsService = {
    getAll: () => axiosService(urls.comments),
    getById: (id) => axiosService(`${urls.comments}/${id}`),
}