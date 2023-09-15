import SkeletonColor from "../components/skeletonVideo";
import AccordionVideo from '../components/AccordionVideo';
import DescriptionVideo from "../components/DescriptionVideo";

export default function PlayList() {

    return (
        <>
            <div className="flexPlayList">
                <div style={{ marginBottom: "20px" }}>
                    <SkeletonColor />
                    <DescriptionVideo />
                </div>
                <AccordionVideo />
            </div>
        </>
    )
}