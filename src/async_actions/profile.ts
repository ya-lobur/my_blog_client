import axios from "axios";
import { IRegistrationData } from "interfaces/profile";
import { setProfileData } from "redux/actionCreators/profile";

const { REACT_APP_PROFILE_API_HOST: PROFILE_API_HOST } = process.env;

/**
 * Отправляет запрос на авторизацию
 * @param {{email: string, password: string}} data
 * @returns {Promise<void>}
 */
export function login(data: { email: string, password: string }) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${PROFILE_API_HOST}/login`, data);
            dispatch(setProfileData(response.data));
            return Promise.resolve();
        } catch (err) {
            return Promise.reject({ error: err.response, location: 'login' });
        }
    }
}

export function logout() {
    return async (dispatch) => {
        try {
            await axios.post(`${PROFILE_API_HOST}/logout`);
            dispatch(setProfileData(null));
            return Promise.resolve();
        } catch (err) {
            return Promise.reject({ error: err.response, location: 'logout' });
        }
    }
}

export function registration(data: IRegistrationData) {
    return async () => {
        try {
            await axios.post(`${PROFILE_API_HOST}/register`, data)
            return Promise.resolve()
        } catch (err) {
            return Promise.reject({ error: err.response, location: 'registration' })
        }
    }
}

export function getProfile() {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${PROFILE_API_HOST}/info`)
            dispatch(setProfileData(response.data))
            return Promise.resolve()
        } catch (err) {
            dispatch(setProfileData(null));
        }
    }
}