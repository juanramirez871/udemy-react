import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

export default function SkeletonColor({ dataVideo }) {

    const [show, setShow] = React.useState(false);
    const { id } = useParams();

    React.useEffect(() => {

        setShow(false);
        setTimeout(() => {
            setShow(true)
        }, 3000)
    }, [id])


    return (
        <>
            {
                !show ?
                    <Skeleton
                        sx={{ bgcolor: 'grey.900', borderRadius: "10px" }}
                        variant="rectangular"
                        width="100%"
                        height="500px"
                    />
                    :
                    <ReactPlayer
                    url={dataVideo?.urlVideo}
                    controls
                    width="100%"
                    height="500px"
                  />
            }
        </>
    );
}
