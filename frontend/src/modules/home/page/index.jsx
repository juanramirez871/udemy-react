import { useState } from "react";
import MediaControlCard from "../components/MediaControlCard";
import Videos from "../components/Videos";

export default function Index({ dataVideos }) {

    return (
        <>
            <MediaControlCard dataVideos={dataVideos} />
            <div style={{ marginBottom: "100px" }}>
                <Videos dataVideos={dataVideos} />
            </div>
        </>
    )
}