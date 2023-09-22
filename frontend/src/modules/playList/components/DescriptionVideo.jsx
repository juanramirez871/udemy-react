import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import "../../../assets/css/descriptionVideo.css";
import request from '../../../shared/helpers/request';

export default function DescriptionVideo({ dataVideo, idUser }) {

    const [value, setValue] = React.useState(5);
    const [like, setLike] = React.useState();
    const [disLike, setDisLike] = React.useState();

    React.useEffect(() => {

        if(dataVideo.likesPeople) setLike(dataVideo.likesPeople.includes(idUser));
        if(dataVideo.disLikesPeople) setDisLike(dataVideo.disLikesPeople.includes(idUser));
    }, [dataVideo])

    const likePost = async() => {
        await request({ endpoint: `video/like/${dataVideo._id}/${idUser}`, method: "DELETE" })
        setDisLike(false);

        setLike(!like);
        await request({ endpoint: `video/like/${dataVideo._id}/${idUser}`, method: "PUT" })
    }

    const disLikePost = async() => {
        await request({ endpoint: `video/like/${dataVideo._id}/${idUser}`, method: "DELETE" })
        setLike(false);

        setDisLike(!disLike);
        await request({ endpoint: `video/dislike/${dataVideo._id}/${idUser}`, method: "PUT" })
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
