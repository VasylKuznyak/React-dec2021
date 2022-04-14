import axios from "axios";

import baseURL from "../constants/urls/urls";

export const axiosService = axios.create({baseURL});