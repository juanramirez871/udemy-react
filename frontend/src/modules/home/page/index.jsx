import { useState } from "react";
import MediaControlCard from "../components/MediaControlCard";
import Videos from "../components/Videos";

export default function Index() {

    const [dataVideos, setDataVideos] = useState(
        [
            {
                title: "Node.js: De cero a experto",
                description: "Aprende Node.js desde los fundamentos, despliegues, construcción de imágenes, testing",
                img: "https://www.muylinux.com/wp-content/uploads/2022/04/nodejs.png"
            },
            {
                title: "SQL de cero: Tu guía práctica con PostgreSQL",
                description: "Aprende sobre bases de datos relacionales partiendo desde cero",
                img: "https://cursin.net/wp-content/uploads/2023/07/sql-analisis-negocio-cursin.jpg"
            },
            {
                title: "React PRO: Lleva tus bases al siguiente nivel",
                description: "Mejorar tus habilidades existentes de React.",
                img: "https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/2EP14mWkbx9sq03nWnRSGT/f1d22d88bb5dde030275f9520c0f2e92/React_YT_Thumbnail.png"
            },
        ]
    );

    return (
        <>
            <MediaControlCard />
            <div style={{ marginBottom: "100px" }}>
                <Videos dataVideos={dataVideos} />
            </div>
        </>
    )
}