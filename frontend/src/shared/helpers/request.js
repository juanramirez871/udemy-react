import Cookies from "js-cookie";

export default async function request({ endpoint, method = "GET", data, headers }){

    let config = {
        method: method,
        headers: { "Content-Type": "application/json"},
        credentials: 'include',
    }
    if(data) config.body = JSON.stringify(data);
    if(headers) config.headers = headers

    const response = await (await fetch('http://192.168.129.72:5057/' + endpoint, config)).json();
    if(response?.msg == "Not authorized") Cookies.remove("auth");
    else return response
}