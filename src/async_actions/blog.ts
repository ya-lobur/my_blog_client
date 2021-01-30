import axios from "axios";
import { setPaginatedPostList } from "redux/actionCreators/blog";

const {REACT_APP_API_HOST: API_HOST} = process.env;

/**
 * Делает запрос на получение списка постов из какого-либо блога
 * @param {number} blogId
 * @param {number} page
 * @returns {() => Promise<unknown>}
 */
export function getPostList(blogId: number | string, page: number=1) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${API_HOST}blog/blog/${blogId}/post-list/?page=${page}`);
            dispatch(setPaginatedPostList(response.data))
            return Promise.resolve()
        } catch (err) {
            return Promise.reject({error: err.response, location: 'getPostList'})
        }
    }
}