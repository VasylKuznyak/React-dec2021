import {urls} from "../configs/url";

const getAll = () => {
    return fetch(urls.posts)
        .then(value => value.json())
}

export const postsService = {
    getAll,
}