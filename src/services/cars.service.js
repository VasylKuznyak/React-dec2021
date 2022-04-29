import {axiosService} from "./axios.service";

import {urls} from "../constants";

export const carsService = {
    getAll: () => axiosService.get(urls.cars),
    postCar: (car) => axiosService.post(urls.cars, car),
    updateById: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
};