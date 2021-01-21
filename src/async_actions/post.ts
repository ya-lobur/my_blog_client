import axios from "axios";
import { IPostModel } from "interfaces/post";
import { setCurrentPost } from "redux/actionCreators/post";

const { REACT_APP_API_HOST: API_HOST } = process.env;

/**
 * Делает запрос на получение списка самых популярных постов
 * @returns Promise
 */
export async function getDailyTopPosts() {
    try {
        const response = await axios.get(`${API_HOST}blog/post/daily-top-six/`)
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
            const response = await axios.get(`${API_HOST}blog/post/${postId}/`);
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
            const response = await axios.patch(`${API_HOST}blog/post/${postId}/like/`)
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
 * @returns {Promise<Required<IPostModel>>}
 */
export async function createPost(post: IPostModel) {
    try {
        const response = await axios.post(`${API_HOST}blog/post/`, post)
        const createdPost: Required<IPostModel> = response.data

        return Promise.resolve(createdPost)
    } catch (err) {
        return Promise.reject({ error: err.response, location: 'createPost' })
    }
}