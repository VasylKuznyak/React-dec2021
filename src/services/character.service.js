import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const characterService = {
    getAll: () => axiosService.get(urls.character),
}