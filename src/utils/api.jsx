import {API_BURGER_INGREDIENTS_ENDPOINT, API_BURGER_ORDERS_ENDPOINT, API_URL} from "../constants/constants";

async function checkResponse (response) {
    return response.ok ? response.json() : response.json().then(err => Promise.reject(err))
}

export async function fetchData() {
    return await fetch(API_URL + '/' + API_BURGER_INGREDIENTS_ENDPOINT)
        .then(response => checkResponse(response))
        .then(body => body.data)
        .catch(error => console.log(error));
}

export async function createOrder(order) {

    return await fetch(API_URL + '/' + API_BURGER_ORDERS_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(order)
    }).then(response => checkResponse(response))
    .catch(error => console.log(error));
}