import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { useEffect } from 'react';
import { requestFull, requestVideo } from '../../../shared/helpers/request';
import { useParams } from 'react-router-dom';

export default function SkeletonColor({ nameVideo, oneVideo }) {

    const { moduleId, course } = useParams()
    const [video, setVideo] = React.useState()
    useEffect(() => {

        (async () => {
            const a = nameVideo.length > 0 ? nameVideo : (oneVideo.find(el => el.name == course)).video;
            const url = await requestVideo({ url: `http://192.168.128.23:5010/cursos/play?course=${course}&seccion=${moduleId}&video=${a}` })
            setTimeout(() => {
                setVideo(url.url);
            }, 1000);
        })()
    }, [nameVideo])

    return (
        <>
            {
                !video ?
                    <Skeleton
                        sx={{ bgcolor: 'grey.900', borderRadius: "10px" }}
                        variant="rectangular"
                        width="100%"
                        height="500px"
                    />
                    :
                    <video width="100%" height="500px" style={{ borderRadius: "5px" }} src={video} controls></video>
            }
        </>
    );
}
