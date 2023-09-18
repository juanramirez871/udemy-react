import { Avatar, Button, Typography } from "@mui/material";
import { useState } from "react";
import AvatarComment from "./AvatarComment";

export default function Comment({ name, comment, timeAgo, avatar, responses = [], buttons = true }) {

    const [seeAnswer, setSeeAnswer] = useState(false);
    const [seeResponse, setseeResponse] = useState(false);
    const seeAnswersChange = () => setSeeAnswer(!seeAnswer);
    const seeResponseChange = () => setseeResponse(!seeResponse);
    const IsResponse = responses.length > 0;

    return (
        <>
            <div style={{ display: "flex", marginTop: "20px" }}>
                <Avatar alt="Avatar" style={{ marginRight: "20px" }} src={avatar} />
                <div>
                    <div style={{ display: "flex" }}>
                        <Typography>{name}</Typography>
                        <i style={{ marginLeft: "5px", fontSize: "15px" }}>{timeAgo}</i>
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
                            <AvatarComment image="https://i.pinimg.com/564x/2a/0e/60/2a0e60be8475924e14c586acceacdb62.jpg" />
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