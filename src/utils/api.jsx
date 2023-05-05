import {API_URL} from "../constants/constants";

export async function fetchData () {
    return await fetch(API_URL)
        .then(response => response.ok ? response.json() : response.json().then(err => Promise.reject(err)))
        .then(body => body.data)
        .catch(error => console.log(error));
}