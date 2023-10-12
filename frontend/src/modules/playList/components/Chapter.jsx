import { Checkbox } from "@mui/material";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import request from "../../../shared/helpers/request";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export function Chapter({ video, ii, i, idUser }) {

    const [seen, setSeen] = useState(video?.seenPeople?.includes(idUser) ? "true" : "false");
    const { course } = useParams()
    const changeSeen = async() => {
        setSeen(seen == "false" ? "true" : "false");
        await request({ endpoint: `video/seen/${video._id}/${seen == "false" ? "true" : "false"}/${idUser}`, method: "PUT" })
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
                <NavLink to={`/video/${video._id}/${i + 1}/${course}`} replace={true}>
                    {ii + 1}. {video.title ? video.title : "no title"} - { Math.floor(parseInt(video?.duracion) / 60000) ? (
                        <b style={{ fontSize: "15px" }}>{ Math.floor(parseInt(video?.duracion) / 60000) } Minutes</b>
                    )
                    : (<b style={{ fontSize: "15px" }}>Unknown</b>)
                    }
                </NavLink>
            </li>
        </>
    )
}