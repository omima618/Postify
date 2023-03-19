import axios from 'axios';

export const postsDB = () => {
    return axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/posts',
        headers: { accept: 'application/json' },
        params: {},
    });
};

export const commentsDB = (id) => {
    return axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/comments',
        headers: { accept: 'application/json' },
        params: {postId: id},
    });
};

