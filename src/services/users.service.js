import {urls} from "../configs/url";

const getAll = () => {
    return fetch(urls.users)
        .then(value => value.json())
}

export const usersService = {
    getAll,
}
