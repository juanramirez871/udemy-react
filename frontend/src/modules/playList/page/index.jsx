import SkeletonColor from "../components/skeletonVideo";
import AccordionVideo from '../components/AccordionVideo';
import DescriptionVideo from "../components/DescriptionVideo";
import Comments from "../components/Comments";
import { useEffect, useState } from "react";
import request from "../../../shared/helpers/request";
import { useParams } from "react-router-dom";

export default function PlayList({ dataUser, avatar }) {

    const [ modules, setModules ] = useState([]);
    const [ d, newComment ] = useState(false);
    const [ comments, setComments ] = useState([[], []]);
    const [ video, setVideo ] = useState([[], []]);
    const { id, moduleId, course } = useParams()
    useEffect(() => {

        (async() => {
            const modulesData = await request({ endpoint: `video/modules?nameCourse=${course}` });
            setModules(modulesData.data);
            const videoData = (modulesData.data[moduleId - 1].videos.find(el => el._id == id))
            setVideo(videoData);
            const commentsDataContributions = videoData.comments.filter(el => el.type == 0)
            const commentsDataQuestion = videoData.comments.filter(el => el.type == 1)
            setComments([commentsDataContributions.reverse(), commentsDataQuestion.reverse()]);
            if(dataUser?.id){
                await request({ endpoint: `video/seen/${dataUser?.id}/${course}`, method: "PUT" })
            }
        })()
    },[id, moduleId, d, dataUser])

    return (
        <>
            <div className="flexPlayList">
                <div style={{ marginBottom: "20px" }}>
                    <SkeletonColor dataVideo={ video } />
                    <DescriptionVideo dataVideo={ video } idUser={dataUser?.id} />
                    <Comments newComment={newComment} d={d} dataUser={dataUser} avatar={avatar} comments={comments} />
                </div>
                <AccordionVideo modules={modules} idUser={dataUser?.id} />
            </div>
        </>
    )
}