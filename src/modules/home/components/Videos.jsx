import { Typography } from "@mui/material";
import "../../../assets/css/videos.css"
import { Link } from "react-router-dom";

export default function Videos({ dataVideos }) {

    return (
        <>
            <Typography component="div" variant="h5" style={{ marginTop: "50px", marginBottom: "25px" }}>
                Videos most watched
            </Typography>

            <div className="ag-format-container">
                <div className="ag-courses_box">
                    {
                        dataVideos.map((video, i) => (
                            <div className="ag-courses_item" key={i}>
                                <Link to="/video" className="ag-courses-item_link">
                                    <div className="ag-courses-item_bg"></div>
                                    <div className="ag-courses-item_title">
                                        <Typography component="p" variant="h5" className="small-l">
                                            { video.title }
                                        </Typography>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}