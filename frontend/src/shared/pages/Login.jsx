import { Avatar, Box, Button, Typography } from "@mui/material";
import discord from "../../assets/img/discord.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import request from "../helpers/request";

export default function Login({ setIsAuth }) {

    const navigate = useNavigate();
    const [successUser, setsuccessUser] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        if (successUser) return navigate("/");
    }, [successUser]);

    const openDiscordLoginPopup = async () => {
        const popup = window.open(import.meta.env.VITE_URL_LOGIN, 'Discord Login', 'width=800,height=600');

        window.addEventListener('message', async (event) => {
            if (event.origin == `http://${import.meta.env.VITE_HOST}:${import.meta.env.VITE_PORT_BACKEND}`) {
                if (event.data) {
                    popup?.close();
                    const isCamper = await request({ endpoint: "user/camper" })
                    if (isCamper.isAuth) {
                        Cookies.set("auth", true)
                        setIsAuth(true);
                        setsuccessUser(true)
                    } else {
                        setError(true)
                    }
                }
            }
        });
    }
    return (
        <>
            <div style={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Typography style={{ fontSize: "25px" }} >To access you must log in with Discord and belong to the campus lands server</Typography>
                {
                    error
                    && <Typography style={{ fontSize: "25px", color: "red" }} >Oops, you don't belong to the campus lands server, you don't have permission to view the sql courses</Typography>
                }
                <Box>
                    <Button onClick={openDiscordLoginPopup}>
                        <Avatar alt="Cindy Baker" src={discord} />
                        <Typography style={{ marginLeft: "10px" }}>Log In with Discord</Typography>
                    </Button>
                </Box>
            </div>
        </>
    )
}