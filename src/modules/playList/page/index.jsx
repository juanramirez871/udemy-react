import SkeletonColor from "../components/skeletonVideo";
import AccordionVideo from '../components/AccordionVideo';

export default function PlayList() {

    return (
        <>
            <div className="flexPlayList">
                <SkeletonColor />
                <AccordionVideo />
            </div>
        </>
    )
}