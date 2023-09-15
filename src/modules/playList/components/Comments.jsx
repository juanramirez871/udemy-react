import { Avatar, Typography } from "@mui/material";

export default function Comments() {

    return (
        <>
            <div style={{ marginTop: "50px" }}>
                <div style={{ display: "flex", marginTop: "30px" }}>
                    <Avatar alt="Avatar" style={{ marginRight: "20px" }} src="https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-2048x1949-pq9uiebg.png" />
                    <div>
                        <div style={{ display: "flex" }}>
                            <Typography>Name user</Typography>
                            <i style={{ marginLeft: "5px", fontSize: "15px" }}>Ago 2 days</i>
                        </div>
                        <Typography style={{ fontSize: "15px" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas repellat nemo dolo
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas repellat nemo dolo
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas repellat nemo dolo
                        </Typography>
                    </div>
                </div>

                <div style={{ display: "flex", marginTop: "30px" }}>
                    <Avatar alt="Avatar" style={{ marginRight: "20px" }} src="https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-2048x1949-pq9uiebg.png" />
                    <div>
                        <div style={{ display: "flex" }}>
                            <Typography>Name user</Typography>
                            <i style={{ marginLeft: "5px", fontSize: "15px" }}>Ago 2 days</i>
                        </div>
                        <Typography style={{ fontSize: "15px" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas repellat nemo dolo
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas repellat nemo dolo
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas repellat nemo dolo
                        </Typography>
                    </div>
                </div>
            </div>
        </>
    )
}