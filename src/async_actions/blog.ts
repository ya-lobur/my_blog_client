import axios from "axios";
import { setBlogInfo, setPaginatedPostList } from "redux/actionCreators/blog";

const { REACT_APP_BLOG_API_HOST: BLOG_API_HOST } = process.env;

/**
 * Делает запрос на получение списка постов из какого-либо блога, записывает результат в state
 * @param {number} blogId
 * @param {number} page
 * @returns {() => Promise<unknown>}
 */
export function getPostList(blogId: number | string, page: number = 1) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${BLOG_API_HOST}/blog/${blogId}/post-list/?page=${page}`);
            dispatch(setPaginatedPostList(response.data))
            return Promise.resolve()
        } catch (err) {
            return Promise.reject({ error: err.response, location: 'getPostList' })
        }
    }
}

/**
 * Делает запрос на получение информации о блоге, записывает её в state
 * @param {number | string} blogId
 * @returns {(dispatch) => Promise<void>}
 */
export function getBlogInfo(blogId: number | string) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${BLOG_API_HOST}/blog/${blogId}/`);
            dispatch(setBlogInfo(data));
            return Promise.resolve();
        }
        catch (err) {
            return Promise.reject({ error: err.response, location: 'getBlogInfo' })
        }
    }
}