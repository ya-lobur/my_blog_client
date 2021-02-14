import axios from "axios";

const { REACT_APP_PROFILE_API_HOST: PROFILE_API_HOST } = process.env;

/**
 * Отправляет запрос на авторизацию
 * @param {{email: string, password: string}} data
 * @returns {Promise<void>}
 */
export function login(data: { email: string, password: string }) {
    return async () => {
        try {
            await axios.post(`${PROFILE_API_HOST}/login`, data)
            return Promise.resolve()
        } catch (err) {
            return Promise.reject({ error: err.response, location: 'login' })
        }
    }
}

export function getProfile() {
    return async () => {
        try {
            const response = await axios.get(`${PROFILE_API_HOST}/info`)
            console.log(response.data)
            return Promise.resolve()
        } catch (err) {
            return Promise.reject({ error: err.response, location: 'getProfile' })
        }
    }
}