import {ACCESS_TOKEN, REFRESH_TOKEN} from "../constants/constants";

export const setTokens = (accessToken:string, refreshToken:string) => {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
}