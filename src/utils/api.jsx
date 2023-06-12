import {
    API_REFRESH_TOKEN_ENDPOINT,
    API_URL,
    JWT_EXPIRED_ERROR,
    REFRESH_TOKEN
} from "../constants/constants";
import {setTokens} from "./localStorage";

const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const checkSuccess = (res) => {
    if (res && res.success) {
        return res;
    }
    return Promise.reject(`Ответ не success: ${res}`);
};

export const request = (endpoint, options = null) => {
    return fetch(`${API_URL}${endpoint}`, options)
        .then(checkResponse)
        .then(checkSuccess);
};

export const refreshTokenRequest = () => {
    return request(API_REFRESH_TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            token: localStorage.getItem(REFRESH_TOKEN)
        })
    });
}

export const requestWithRefresh = async (endpoint, options = null) => {
    return request(endpoint, options)
        .catch(async err => {
            if (err.message === JWT_EXPIRED_ERROR) {
                const {accessToken, refreshToken} = await refreshTokenRequest();
                setTokens(accessToken, refreshToken);

                options.headers.Authorization = accessToken;

                return request(endpoint, options);
            } else {
                return Promise.reject(err);
            }
        });
}