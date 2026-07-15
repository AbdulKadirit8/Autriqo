
import Banner from "../Component/Banner";
import Breadcrum from "../Component/Breadcrum";
import Feature from "../Component/Feature";
import States from "../Component/States";


export default function FeaturesPage() {
    
    return (
        <>
            <Breadcrum title={"Features"} />
            <Feature />
            <States />
            <Banner />
        </>
    )
}
