import Cookies from "js-cookie";

export default async function request({ endpoint, method = "GET", data, headers }){

    let config = {
        method: method,
        headers: { "Content-Type": "application/json"},
        credentials: 'include',
    }
    if(data) config.body = JSON.stringify(data);
    if(headers) config.headers = headers

    const response = await (await fetch('http://localhost:3000/' + endpoint, config)).json();
    if(response?.msg == "Not authorized") Cookies.remove("auth");
    else return response
}

export async function requestFull({ url, method = "GET", data, headers }){

    let config = {
        method: method,
        headers: { "Content-Type": "application/json"},
    }
    if(data) config.body = JSON.stringify(data);
    if(headers) config.headers = headers

    const response = await (await fetch(url, config)).json();
    if(response?.msg == "Not authorized") Cookies.remove("auth");
    else return response
}

export async function requestVideo({ url, method = "GET", data, headers }){

    let config = {
        method: method,
        headers: { "Content-Type": "application/json"}
    }
    if(data) config.body = JSON.stringify(data);
    if(headers) config.headers = headers

    const response = ((await fetch(url, config)));
    return response
}