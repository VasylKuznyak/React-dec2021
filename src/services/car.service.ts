import {AxiosResponse} from "axios";

import {axiosService} from "./axios.service";
import {urls} from "../constants";
import {ICar} from "../interfaces";

type Res<T> = Promise<AxiosResponse<T>>;

export const carService = {
    getAll: (): Res<ICar[]> => axiosService.get(urls.cars),
    getById: (id: string): Res<ICar> => axiosService.get(`${urls.cars}/${id}`),
    postCar: (car: ICar): Res<ICar> => axiosService.post(urls.cars, car),
    updateById: (car: ICar, id: string): Res<ICar> => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById: (id: string): Res<void> => axiosService.delete(`${urls.cars}/${id}`),
}