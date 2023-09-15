import SkeletonColor from "../components/skeletonVideo";
import AccordionVideo from '../components/AccordionVideo';
import DescriptionVideo from "../components/DescriptionVideo";

export default function PlayList() {

    return (
        <>
            <div className="flexPlayList">
                <SkeletonColor />
                <AccordionVideo />
            </div>
            <DescriptionVideo />
        </>
    )
}