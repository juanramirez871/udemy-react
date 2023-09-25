import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "../../../assets/css/descriptionVideo.css";
import request from '../../../shared/helpers/request';
import { useParams } from 'react-router-dom';


function quitarDiacriticos(cadena) {
    return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }


export default function DescriptionVideo({ dataVideo, idUser, videoC }) {

    const [like, setLike] = React.useState();
    const [disLike, setDisLike] = React.useState();
    const { id } = useParams()
    React.useEffect(() => {

        if (dataVideo.likesPeople) setLike(dataVideo?.likesPeople.includes(idUser));
        if (dataVideo.disLikesPeople) setDisLike(dataVideo?.disLikesPeople.includes(idUser));
    }, [dataVideo])

    const likePost = async () =>
    {
        dataVideo.likesPeople = dataVideo.likesPeople.filter(el => el != 1 || el == idUser)
        dataVideo.disLikesPeople = dataVideo.disLikesPeople.filter(el => el != 1 || el == idUser)
        dataVideo.likesPeople.push(1);
        setDisLike(false);
        setLike(!like);
        if (like && !disLike) return await request({ endpoint: `video/like/${dataVideo._id}/${idUser}`, method: "DELETE", headers: { idVideo: quitarDiacriticos(id) } });
        await request({ endpoint: `video/dislike/${dataVideo._id}/${idUser}`, method: "DELETE", headers: { idVideo: quitarDiacriticos(id) } })
        await request({ endpoint: `video/like/${dataVideo._id}/${idUser}`, method: "PUT", headers: { idVideo: quitarDiacriticos(id) } })
    }

    const disLikePost = async () => {
        dataVideo.disLikesPeople = dataVideo.disLikesPeople.filter(el => el != 1 || el == idUser)
        dataVideo.likesPeople = dataVideo.likesPeople.filter(el => el != 1 || el == idUser)
        dataVideo.disLikesPeople.push(1);
        setLike(false);
        setDisLike(!disLike);
        if (disLike && !like) return await request({ endpoint: `video/dislike/${dataVideo._id}/${idUser}`, method: "DELETE", headers: { idVideo: quitarDiacriticos(id) } })
        await request({ endpoint: `video/like/${dataVideo._id}/${idUser}`, method: "DELETE", headers: { idVideo: quitarDiacriticos(id) } })
        await request({ endpoint: `video/dislike/${dataVideo._id}/${idUser}`, method: "PUT", headers: { idVideo: quitarDiacriticos(id) } })
    }

    return (
        <div style={{ marginTop: "20px" }}>
            <Box sx={{ '& > legend': { mt: 2 } }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <Typography component="h1" sx={{ fontSize: "30px", marginRight: "20px" }}>{videoC ? videoC : "Introduccion"}</Typography>
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
