import {axiosService} from "./axios.service";

import {urls} from "../constants";
import {IUser} from "../interfaces";

export const userService = {
    getAll: () => axiosService.get<IUser[]>(urls.users),
}