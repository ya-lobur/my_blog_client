import axios from "axios";
import { IPostModel } from "interfaces/post";
import { setCurrentPost } from "redux/actionCreators/post";

const { REACT_APP_BLOG_API_HOST: BLOG_API_HOST } = process.env;

/**
 * Делает запрос на получение списка самых популярных постов
 * @returns Promise
 */
export async function getDailyTopPosts() {
    try {
        const response = await axios.get(`${BLOG_API_HOST}/post/daily-top-six/`)
        return Promise.resolve(response.data.top_posts)
    } catch (err) {
        return Promise.reject({ error: err.response, location: 'getDailyTopPosts' })
    }
}

/**
 * Делает запрос на получение определенного поста, в случае успеха помещает его в state
 * @param {string | number} postId
 * @param saveToState
 * @returns {(dispatch) => Promise<void>}
 */
export function getCertainPost(postId: string | number, saveToState: boolean = true) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${BLOG_API_HOST}/post/${postId}/`);
            const post: Required<IPostModel> = response.data;

            if (saveToState) {
                dispatch(setCurrentPost(post));
            }

            return Promise.resolve(post);
        } catch (err) {
            return Promise.reject({ error: err.response, location: 'getCertainPost' })
        }
    }
}

/**
 * Отправляет запрос на лайк поста, обновляет currentPost в state постов
 * @param {number | string} postId
 * @returns {(dispatch) => Promise<void>}
 */
export function likePost(postId: number | string) {
    return async (dispatch) => {
        try {
            const response = await axios.patch(`${BLOG_API_HOST}/post/${postId}/like/`)
            const post: Required<IPostModel> = response.data;

            dispatch(setCurrentPost(post));
            return Promise.resolve();
        } catch (err) {
            return Promise.reject({ error: err.response, location: 'likePost' })
        }
    }
}

/**
 * Делает запрос на создание поста
 * @param {IPostModel} post
 * @param image
 * @returns {Promise<Required<IPostModel>>}
 */
export async function createPost(post: IPostModel, image?: File | null) {
    try {
        const formData = new FormData();

        for (const postKey in post) {
            if (post[postKey]) {
                formData.append(postKey, post[postKey]);
            }
        }

        if (image) {
            formData.append('image', image);
        }

        const response = await axios.post(`${BLOG_API_HOST}/post/`, formData);
        const createdPost: Required<IPostModel> = response.data;

        return Promise.resolve(createdPost);
    } catch (err) {
        return Promise.reject({ error: err.response, location: 'createPost' });
    }
}