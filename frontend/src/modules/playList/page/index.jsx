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
    const [ video, setVideo ] = useState([[], []]);
    const { id, moduleId, course } = useParams()
    const [ modulesDataApi, setModulesDataApi ] = useState({})
    const [ nameVideo, setNameVideo ] = useState([])
    useEffect(() => {

        (async() => {
            const modulesData = await request({ endpoint: "video/modules" });
            setModulesDataApi(await requestFull({ url: `http://192.168.128.23:5010/cursos?course=${course}` }));
            setModules(modulesData.data);
            const videoData = (modulesData.data[moduleId - 1].videos.find(el => el._id == id))
            setVideo(videoData);
            const commentsDataContributions = videoData?.comments.filter(el => el.type == 0)
            const commentsDataQuestion = videoData?.comments.filter(el => el.type == 1)
            setComments([commentsDataContributions?.reverse(), commentsDataQuestion?.reverse()])
        })()
    },[id, moduleId, d])

    return (
        <>
            <div className="flexPlayList">
                <div style={{ marginBottom: "20px" }}>
                    <SkeletonColor nameVideo={nameVideo} oneVideo={dataVideos} />
                    {/* <DescriptionVideo dataVideo={ video } idUser={dataUser?.id} /> */}
                    {/* <Comments newComment={newComment} d={d} dataUser={dataUser} avatar={avatar} comments={comments} /> */}
                </div>
                <AccordionVideo setNameVideo={setNameVideo} modulesDataApi={Object.values(modulesDataApi)} modules={modules} idUser={dataUser?.id} />
            </div>
        </>
    )
}