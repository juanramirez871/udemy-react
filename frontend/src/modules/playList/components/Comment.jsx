import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const timeFormat = (date) => {

    let fechaPasada = new Date(date);
    let fechaActual = new Date();
    let diferencia = fechaActual - fechaPasada;
    let minutos = Math.floor(diferencia / (1000 * 60));
    let horas = Math.floor(diferencia / (1000 * 60 * 60));
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    if(dias > 0) return `${dias} days ago`;
    if(minutos <= 60) return `${minutos} minutes ago`;
    if(horas < 24) return `${horas} hours ago`;
}

export default function Comment({ name, comment, timeAgo, avatar, responses = [], buttons = true }) {

    const [seeAnswer, setSeeAnswer] = useState(false);
    const [seeResponse, setseeResponse] = useState(false);
    const seeAnswersChange = () => setSeeAnswer(!seeAnswer);
    const seeResponseChange = () => setseeResponse(!seeResponse);
    const IsResponse = responses.length > 0;

    return (
        <>
            <div style={{ display: "grid", marginTop: "20px", gridTemplateColumns: "60px 1fr", }}>
                <Avatar alt="Avatar" style={{ marginRight: "20px" }} src={avatar} />
                <div>
                    <div style={{ display: "flex" }}>
                        <Typography>{name}</Typography>
                        <i style={{ marginLeft: "5px", fontSize: "15px" }}>{ timeFormat(timeAgo) }</i>
                    </div>
                    <Typography style={{ fontSize: "15px" }}>
                        {comment}
                    </Typography>
                    {
                        buttons &&
                        (
                            <>
                                <Button style={{ marginTop: "10px" }} size="medium" onClick={seeResponseChange}>Response</Button>
                                <Button style={{ marginTop: "10px" }} size="medium" disabled={!IsResponse} onClick={seeAnswersChange}>see {responses.length} answers</Button>
                            </>
                        )
                    }
                    {
                        seeResponse &&
                        (
                            <>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: "20px", width: "100%" }}>
                                    <Avatar alt="Avatar" style={{ marginRight: "20px" }} src={image} />
                                    <TextField style={{ width: "100%" }} id="input-with-sx" label="add a comment" variant="standard" />
                                </Box>
                                <div style={{ justifyContent: "end", display: "flex" }}>
                                    <Button style={{ marginTop: "10px" }} size="medium">Publish</Button>
                                </div>
                            </>
                        )
                    }
                    {
                        seeAnswer &&
                        (
                            responses.map((comment, i) => (
                                <Comment key={i} {...comment} buttons={false} />
                            ))
                        )
                    }
                </div>
            </div>
        </>
    )
}