import { useState } from "react";
import MediaControlCard from "../components/MediaControlCard";
import Videos from "../components/Videos";

export default function Index({ dataVideos, dataUser }) {

    return (
        <>
            <MediaControlCard dataVideos={dataVideos} dataUser={dataUser} />
            <div style={{ marginBottom: "100px" }}>
                <Videos dataVideos={dataVideos} />
            </div>
        </>
    )
}