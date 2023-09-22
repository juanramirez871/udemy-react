import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import "../../../assets/css/descriptionVideo.css";

export default function DescriptionVideo({ dataVideo }) {

    console.log(dataVideo)
    const [value, setValue] = React.useState(5);
    const [like, setLike] = React.useState(false);
    const [disLike, setDisLike] = React.useState(false);

    const likePost = () => {
        setDisLike(false);
        setLike(!like);
    }

    const disLikePost = () => {
        setLike(false);
        setDisLike(!disLike);
    }

    return (
        <div style={{ marginTop: "20px" }}>
            <Box sx={{ '& > legend': { mt: 2 } }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <Typography component="h1" sx={{ fontSize: "30px", marginRight: "20px" }}>{dataVideo.title ? dataVideo.title : "No title"}</Typography>
                        <div style={{ marginTop: "5px" }}>
                            <button className={like && "green"} id="green" onClick={likePost}><i className="fa fa-thumbs-up fa-lg" aria-hidden="true"></i></button>
                            <button onClick={disLikePost} className={disLike && "red"} id="red"><i className="fa fa-thumbs-down fa-lg" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <Rating name="read-only" value={value} readOnly />
                </div>
            </Box>
        </div>
    );
}
