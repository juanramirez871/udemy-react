import { useState } from "react";
import MediaControlCard from "../components/MediaControlCard";
import Videos from "../components/Videos";

export default function Index(){

    const [ dataVideos, setDataVideos ] = useState(
        [
            { title: "mysql basic operations on postgress"},
            { title: "mysql basic operations on postgress"},
            { title: "mysql basic operations on postgress"},
            { title: "mysql basic operations on postgress"},
            { title: "mysql basic operations on postgress"},
            { title: "mysql basic operations on postgress"},
        ]
        );

    return (
        <>
        <MediaControlCard />
        <div>
            <Videos dataVideos={dataVideos} />
        </div>
        </>
    )
}