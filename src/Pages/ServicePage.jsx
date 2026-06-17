import Banner from "../Component/Banner";
import Breadcrum from "../Component/Breadcrum";
import Service from "../Component/Service";
import States from "../Component/States";
import Testimonial from "../Component/Testimonial";


export default function ServicePage() {
    return (
        <>
            <Breadcrum title={"Service"} />
            <Service/>
            <States/>
            <Testimonial/>
            <Banner/>
        </>
    )
}
