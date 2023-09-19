import { Avatar, Box, Button, Typography } from "@mui/material";
import discord from "../../assets/img/discord.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Login({ setIsAuth }) {

    const navigate = useNavigate();
    const [successUser, setsuccessUser] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        if (successUser) return navigate("/");
    }, [successUser]);

    const openDiscordLoginPopup = async () => {
        const popup = window.open('https://discord.com/oauth2/authorize?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fuser%2Flogin&scope=identify%20guilds&client_id=1153335528494731387', 'Discord Login', 'width=800,height=600');

        window.addEventListener('message', (event) => {
            if (event.origin == "http://localhost:3000") {
                if (event.data) {
                    Cookies.set("auth", true)
                    popup?.close();
                    setIsAuth(true);
                    setsuccessUser(true)
                }
            }
        });
    }
    return (
        <>
            <center>
                <Typography style={{ fontSize: "25px" }} >To access you must log in with Discord and belong to the campus lands server</Typography>
                <Box>
                    <Button onClick={openDiscordLoginPopup}>
                        <Avatar alt="Cindy Baker" src={discord} />
                        <Typography style={{ marginLeft: "10px" }}>Log In with Discord</Typography>
                    </Button>
                </Box>
            </center>
        </>
    )
}