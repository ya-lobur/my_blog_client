import axios from "axios";

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