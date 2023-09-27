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
        const popup = window.open('https://discord.com/oauth2/authorize?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fuser%2Flogin&scope=identify%20guilds&client_id=1153335528494731387', 'Discord Login', 'width=800,height=600');

        window.addEventListener('message', async (event) => {
            if (event.origin == "http://192.168.129.72:5057") {
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
            <div style={{ height: "20px", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
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