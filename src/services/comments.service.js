import {urls} from "../configs/url";

const getAll = () => {
    return fetch(urls.comments)
        .then(value => value.json())
}

export const commentsService = {
    getAll,
}