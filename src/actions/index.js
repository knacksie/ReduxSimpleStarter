import Axios from 'axios'

export const FETCH_POSTS = 'fetch_posts';
export const SAVE_POST = 'save_post';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

export function fetchPosts() {
    const request = Axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function savePost(post) {
    // const request = Axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: SAVE_POST,
        payload: null
    };
}