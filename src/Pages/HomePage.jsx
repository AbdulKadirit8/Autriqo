import AboutPage from "../Component/About";
import Banner from "../Component/Banner";
import CarSlider from "../Component/CarSlider";
import EnquiryFrom from "../Component/EnquiryFrom";
import Feature from "../Component/Feature";
import Process from "../Component/Process";
import Service from "../Component/Service";
import States from "../Component/States";
import Testimonial from "../Component/Testimonial";

export default function HomePage() {
    
    return (
        <>
            <div className="header-carousel">
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="First slide" />
                            <div className="carousel-caption">
                                <div className="container-fluid py-4">
                                    <div className="row g-5">
                                        <div className="col-lg-6 fadeInLeft animated" data-animation="fadeInLeft" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
                                            <div className="bg-secondary rounded p-5">
                                                <h4 className="text-white mb-4">CONTINUE CAR RESERVATION</h4>
                                                <EnquiryFrom />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-none d-lg-flex fadeInRight animated" data-animation="fadeInRight" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
                                            <div className="text-start">
                                                <h1 className="display-5 text-white">Get 15% off your rental Plan your trip now</h1>
                                                <p>Treat yourself in USA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="First slide" />
                            <div className="carousel-caption">
                                <div className="container-fluid py-4">
                                    <div className="row g-5">
                                        <div className="col-lg-6 fadeInLeft animated" data-animation="fadeInLeft" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
                                            <div className="bg-secondary rounded p-5">
                                                <h4 className="text-white mb-4">CONTINUE CAR RESERVATION</h4>
                                                <EnquiryFrom />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 d-none d-lg-flex fadeInRight animated" data-animation="fadeInRight" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
                                            <div className="text-start">
                                                <h1 className="display-5 text-white">Get 15% off your rental! Choose Your Model </h1>
                                                <p>Treat yourself in USA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Feature />
            <AboutPage />
            <States />
            <Service />
            <CarSlider />
            <Process />
            <Banner />
            <Testimonial />
        </>
    )
}