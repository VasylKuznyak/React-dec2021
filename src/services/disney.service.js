import {axiosService} from "./axios.service";

import {urls} from "../constants";

export const disneyService = {
    getAll: axiosService.get(urls.characters),
}
