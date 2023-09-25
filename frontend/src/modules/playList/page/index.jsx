import SkeletonColor from "../components/skeletonVideo";
import AccordionVideo from '../components/AccordionVideo';
import DescriptionVideo from "../components/DescriptionVideo";
import Comments from "../components/Comments";
import { useEffect, useState } from "react";
import request, { requestFull } from "../../../shared/helpers/request";
import { useParams } from "react-router-dom";

export default function PlayList({ dataUser, avatar, dataVideos }) {

    const [ modules, setModules ] = useState([]);
    const [ d, newComment ] = useState(false);
    const [ comments, setComments ] = useState([[], []]);
    const [ video, setVideo ] = useState({});
    const { id, course, moduleId } = useParams()
    const [ videoC, setVideoC ] = useState()
    const [ modulesDataApi, setModulesDataApi ] = useState({})
    const [ nameVideo, setNameVideo ] = useState([])

    function quitarDiacriticos(cadena) {
        return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      }

    useEffect(() => {

        (async() => {
            setModulesDataApi(await requestFull({ url: `http://192.168.128.23:5010/cursos?course=${course}` }));
            const dataVideo = await request({ endpoint: `video`, headers: { idVideo: quitarDiacriticos(id) } });
            setVideo(dataVideo.data);
        })()
    },[id, d])

    return (
        <>
            <div className="flexPlayList">
                <div style={{ marginBottom: "20px" }}>
                    <SkeletonColor nameVideo={nameVideo} oneVideo={dataVideos} />
                    <DescriptionVideo videoC={videoC} dataVideo={video} idUser={dataUser?.id} />
                    {/* <Comments newComment={newComment} d={d} dataUser={dataUser} avatar={avatar} comments={comments} /> */}
                </div>
                <AccordionVideo setVideoC={setVideoC} setNameVideo={setNameVideo} modulesDataApi={Object.values(modulesDataApi)} idUser={dataUser?.id} />
            </div>
        </>
    )
}