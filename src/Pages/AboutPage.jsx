
import Breadcrum from '../Component/Breadcrum'
import About from '../Component/About'
import States from '../Component/States'
import Feature from '../Component/Feature'
import Process from '../Component/Process'
import Banner from '../Component/Banner'

export default function AboutPage() {
    return (
        <>
            <Breadcrum title={"About Us"} />
            <About />
            <States />
            <Feature />
            <Process />
            <Banner />
        </>
    )
}
