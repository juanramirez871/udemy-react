import Cookies from "js-cookie";

export default async function request({ endpoint, method = "GET", data, headers }){

    let config = {
        method: method,
        headers: { "Content-Type": "application/json"},
        credentials: 'include',
    }
    if(data) config.body = data;
    if(headers) config.headers = headers

    return await (await fetch('http://localhost:3000/' + endpoint, config)).json();
}