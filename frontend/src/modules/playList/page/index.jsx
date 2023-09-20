import SkeletonColor from "../components/skeletonVideo";
import AccordionVideo from '../components/AccordionVideo';
import DescriptionVideo from "../components/DescriptionVideo";
import Comments from "../components/Comments";
import { useEffect, useState } from "react";
import request from "../../../shared/helpers/request";

export default function PlayList({ dataUser, avatar }) {

    const [ modules, setModules ] = useState([]);
    useEffect(() => {

        (async() => {

            const modulesData = await request({ endpoint: "video/modules" });
            setModules(modulesData.data);
        })()
    },[])

    return (
        <>
            <div className="flexPlayList">
                <div style={{ marginBottom: "20px" }}>
                    <SkeletonColor />
                    <DescriptionVideo />
                    <Comments dataUser={dataUser} avatar={avatar} />
                </div>
                <AccordionVideo modules={modules} />
            </div>
        </>
    )
}