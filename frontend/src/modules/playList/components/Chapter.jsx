import { Checkbox } from "@mui/material";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import request from "../../../shared/helpers/request";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export function Chapter({ video, ii, i, idUser, setNameVideo, setVideoC }) {

    const { course} = useParams();
    const [seen, setSeen] = useState(video?.seenPeople?.includes(idUser) ? "true" : "false");
    const changeSeen = async() => {
        setSeen(seen == "false" ? "true" : "false");
        await request({ endpoint: `video/seen/${video?._id}/${seen == "false" ? "true" : "false"}/${idUser}`, method: "PUT" })
    }
    return (
        <>
            <li>
                {
                    seen == "true"
                        ?
                        <Checkbox onClick={changeSeen} {...label} id={"checkbox" + ii} color="success" checked />
                        :
                        <Checkbox onClick={changeSeen} {...label} id={"checkbox" + ii} color="success" />
                }
                <NavLink to={`/video/${Object.values(video)[0].video}/${i + 1}/${course}`} onClick={() => {setNameVideo(Object.values(video)[0].video); setVideoC(Object.values(video)[0].Titulo)}} replace={true}>
                    {ii + 1}. {Object.values(video)[0].Titulo ? Object.values(video)[0].Titulo : "no title"}
                </NavLink>
            </li>
        </>
    )
}