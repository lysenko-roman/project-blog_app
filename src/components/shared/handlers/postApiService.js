const BASE_URL = 'http://blog.api.axenov-it.com';

export function getPosts (params) {

    return fetch (`${BASE_URL}/posts`)
    .then(response => {
        return response.json();
    });
}

export function getLastPosts (limit) {

    return fetch (`${BASE_URL}/posts/last/${limit}`)
    .then(response => {
        return response.json();
    });
}
