import {
    API_REFRESH_TOKEN_ENDPOINT,
    API_URL,
    JWT_EXPIRED_ERROR,
    REFRESH_TOKEN
} from "../constants/constants";
import {setTokens} from "./localStorage";

const checkResponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const checkSuccess = (res: { readonly success: boolean }) => {
    if (res && res.success) {
        return res;
    }
    return Promise.reject(`Ответ не success: ${res}`);
};

export const request = (endpoint: string, options: RequestInit | undefined) => {
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

export const requestWithRefresh = async (endpoint: string, options: RequestInit = {}) => {
    return request(endpoint, options)
        .catch(async err => {
            if (err.message === JWT_EXPIRED_ERROR) {
                const {accessToken, refreshToken} = await refreshTokenRequest() as any;
                setTokens(accessToken, refreshToken);

                if (options.headers)
                    options.headers = {...options.headers, Authorization: accessToken};

                return request(endpoint, options);
            } else {
                return Promise.reject(err);
            }
        });
}