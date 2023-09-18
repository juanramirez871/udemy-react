import { Avatar, Box, Button, TextField } from "@mui/material";

export default function AvatarComment({ image }) {

    return (
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