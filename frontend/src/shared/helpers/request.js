import Cookies from "js-cookie";

export default async function request({ endpoint, method = "GET", data, headers }){

    try {
        let config = {
            method: method,
            headers: { "Content-Type": "application/json"},
            credentials: 'include',
        }
        if(data) config.body = JSON.stringify(data);
        if(headers) config.headers = headers
        const response = await (await fetch(`http://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT_BACKEND}/` + endpoint, config)).json();
        if(response?.msg == "Not authorized") Cookies.remove("auth");
        else return response
    } catch (error) {
    };
}