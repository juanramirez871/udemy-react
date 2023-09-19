import SkeletonColor from "../components/skeletonVideo";
import AccordionVideo from '../components/AccordionVideo';
import DescriptionVideo from "../components/DescriptionVideo";
import Comments from "../components/Comments";

export default function PlayList({ dataUser, avatar }) {

    return (
        <>
            <div className="flexPlayList">
                <div style={{ marginBottom: "20px" }}>
                    <SkeletonColor />
                    <DescriptionVideo />
                    <Comments dataUser={dataUser} avatar={avatar}/>
                </div>
                <AccordionVideo />
            </div>
        </>
    )
}