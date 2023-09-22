import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "../../../assets/css/descriptionVideo.css";
import request from '../../../shared/helpers/request';

export default function DescriptionVideo({ dataVideo, idUser }) {

    const [like, setLike] = React.useState();
    const [disLike, setDisLike] = React.useState();

    React.useEffect(() => {

        if (dataVideo.likesPeople) setLike(dataVideo.likesPeople.includes(idUser));
        if (dataVideo.disLikesPeople) setDisLike(dataVideo.disLikesPeople.includes(idUser));
    }, [dataVideo])

    const likePost = async () => 
    {
        dataVideo.likesPeople.push(1);
        dataVideo.disLikesPeople = dataVideo.disLikesPeople.filter(el => el != 1)
        setDisLike(false);
        setLike(!like);
        if (like && !disLike) return await request({ endpoint: `video/like/${dataVideo._id}/${idUser}`, method: "DELETE" });
        await request({ endpoint: `video/dislike/${dataVideo._id}/${idUser}`, method: "DELETE" })
        await request({ endpoint: `video/like/${dataVideo._id}/${idUser}`, method: "PUT" })
    }

    const disLikePost = async () => {
        dataVideo.disLikesPeople.push(1);
        dataVideo.likesPeople = dataVideo.likesPeople.filter(el => el != 1)
        setLike(false);
        setDisLike(!disLike);
        if (disLike && !like) return await request({ endpoint: `video/dislike/${dataVideo._id}/${idUser}`, method: "DELETE" })
        await request({ endpoint: `video/like/${dataVideo._id}/${idUser}`, method: "DELETE" })
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
                            <span style={{ marginRight: "10px" }}>{dataVideo?.likesPeople?.length}</span>
                            <button onClick={disLikePost} className={disLike && "red"} id="red"><i className="fa fa-thumbs-down fa-lg" aria-hidden="true"></i></button>
                            <span style={{ marginRight: "10px" }}>{dataVideo?.disLikesPeople?.length}</span>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    );
}
