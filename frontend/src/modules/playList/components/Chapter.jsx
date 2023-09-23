import { Checkbox } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import request from "../../../shared/helpers/request";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export function Chapter({ video, ii, i }) {

    const [seen, setSeen] = useState(video.seen);
    const changeSeen = async() => {
        setSeen(seen == "false" ? "true" : "false");
        await request({ endpoint: `video/seen/${video._id}/${seen == "false" ? "true" : "false"}`, method: "PUT" })
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
                <NavLink to={`/video/${video._id}/${i + 1}`} replace={true}>
                    {ii + 1}. {video.title ? video.title : "no title"}
                </NavLink>
            </li>
        </>
    )
}