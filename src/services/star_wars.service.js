import {urls} from "../confiq/urls";

const getAll = () => {
    return fetch(urls.people)
        .then(value => value.json())
}

export const starWarsService = {
    getAll,
}