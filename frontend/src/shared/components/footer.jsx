import { Typography } from "@mui/material";
import { useState } from "react";

export default function Footer({ isAuth }) {
    return (
        <>
            {
                isAuth ?
                    <footer style={{ padding: "10px", backgroundColor: "#2d2f31", color: "white" }}>
                        <Typography component="p">
                            Made by Juan Mogotocoro 😿 - campus lands
                        </Typography>
                    </footer>
                    :
                    <footer style={{ padding: "10px", backgroundColor: "#2d2f31", color: "white", position: "absolute", bottom: "0", width: "-webkit-fill-available" }}>
                        <Typography component="p">
                            Made by Juan Mogotocoro 😿 - campus lands
                        </Typography>
                    </footer>
            }
        </>
    )
}