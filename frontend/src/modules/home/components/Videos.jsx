import { Typography } from "@mui/material";
import "../../../assets/css/videos.css"
import { Link, NavLink, useParams } from "react-router-dom";


export default function Videos({ dataVideos }) {

    return (
        <>
            <Typography component="div" variant="h5" style={{ marginTop: "50px", marginBottom: "25px" }}>
                Courses
            </Typography>

            <div className="ag-format-container">
                <div className="ag-courses_box" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {
                        dataVideos.map((video, i) => (
                            <div className="cards" key={i}>

                                <div className="card">
                                    <NavLink to={`/video/${video._id}/1/${video.course}`}>
                                        <div className="image">
                                            <img src={video.img} />
                                        </div>
                                        <div className="content">
                                            <Typography><b style={{ fontSize: "20px" , color: "black"}}>{video.title}</b></Typography>
                                            <Typography style={{ color: "#222" }} >{video.description}</Typography>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}