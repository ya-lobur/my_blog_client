import axios from "axios";

const {REACT_APP_API_HOST: API_HOST} = process.env;

/**
 * Делает запрос на получение списка постов из какого-либо блога
 * @param {number} blogId
 * @param {number} page
 * @returns {() => Promise<unknown>}
 */
export function getPostList(blogId: number, page: number=1) {
    return async () => {
        try {
            const response = await axios.get(`${API_HOST}blog/blog/${blogId}/post-list/?page=${page}`)
            return Promise.resolve(response.data)
        } catch (err) {
            return Promise.reject({error: err.response, location: 'getPostList'})
        }
    }
}