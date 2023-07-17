import {
    API_REFRESH_TOKEN_ENDPOINT,
    API_URL,
    JWT_EXPIRED_ERROR,
    REFRESH_TOKEN
} from "../constants/constants";
import {setTokens} from "./localStorage";
import {TTokens} from "../services/types";

function checkResponse(res: Response) {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

function checkSuccess<T>(res: { success: boolean; } & T): Promise<T> {
    if (res && res.success) {
        return Promise.resolve(res);
    }
    return Promise.reject(`Ответ не success: ${res}`);
};

export function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return fetch(`${API_URL}${endpoint}`, options)
        .then(checkResponse)
        .then(checkSuccess<T>);
};

export function refreshTokenRequest(): Promise<TTokens> {
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

export function requestWithRefresh<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    return request<T>(endpoint, options)
        .catch(err => {
            if (err.message === JWT_EXPIRED_ERROR) {
                return refreshTokenRequest()
                    .then(({accessToken, refreshToken}) => {
                        setTokens(accessToken, refreshToken);

                        if (options.headers) {
                            const headers = new Headers();
                            headers.set('Content-Type', 'application/json;charset=utf-8');
                            headers.set('Authorization', localStorage.getItem('token') as string);

                            options = {...options, headers: headers};
                        }

                        return request(endpoint, options);
                    });
            } else {
                return Promise.reject(err);
            }
        });
}