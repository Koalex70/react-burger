import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants/constants";

export const setTokens = (accessToken, refreshToken) => {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
}