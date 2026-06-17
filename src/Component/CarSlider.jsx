import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import 'swiper/css';


// import './styles.css';
export default function CarSlider() {
    let sliderOptions = {
    slidesPerView: 1,
    loop: true,
    speed:5000,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },

    modules: [Autoplay],

    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
}
    return (
        <div className="container-fluid categories pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
                    <h1 className="display-5 text-capitalize mb-3">Vehicle <span className="text-primary">Categories</span></h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                    </p>
                </div>
                <div className="categories-carousel  wow fadeInUp" data-wow-delay="0.1s">
                    <Swiper {...sliderOptions}>
                        <SwiperSlide>
                            <div className="categories-item p-4">
                                <div className="categories-item-inner">
                                    <div className="categories-img rounded-top">
                                        <img src="img/car-1.png" className="img-fluid w-100 rounded-top" alt="" />
                                    </div>
                                    <div className="categories-content rounded-bottom p-4">
                                        <h4>Mercedes Benz R3</h4>
                                        <div className="categories-review mb-4">
                                            <div className="me-3">4.5 Review</div>
                                            <div className="d-flex justify-content-center text-secondary">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star text-body"></i>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$99:00/Day</h4>
                                        </div>
                                        <div className="row gy-2 gx-0 text-center mb-4">
                                            <div className="col-4 border-end border-white">
                                                <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">4 Seat</span>
                                            </div>
                                            <div className="col-4 border-end border-white">
                                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT/MT</span>
                                            </div>
                                            <div className="col-4">
                                                <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Petrol</span>
                                            </div>
                                            <div className="col-4 border-end border-white">
                                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2015</span>
                                            </div>
                                            <div className="col-4 border-end border-white">
                                                <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                                            </div>
                                            <div className="col-4">
                                                <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">27K</span>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="categories-item p-4">
                                <div className="categories-item-inner">
                                    <div className="categories-img rounded-top">
                                        <img src="img/car-2.png" className="img-fluid w-100 rounded-top" alt="" />
                                    </div>
                                    <div className="categories-content rounded-bottom p-4">
                                        <h4>Toyota Corolla Cross</h4>
                                        <div className="categories-review mb-4">
                                            <div className="me-3">3.5 Review</div>
                                            <div className="d-flex justify-content-center text-secondary">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star text-body"></i>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$128:00/Day</h4>
                                        </div>
                                        <div className="row gy-2 gx-0 text-center mb-4">
                                            <div className="col-4 border-end border-white">
                                                <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">4 Seat</span>
                                            </div>
                                            <div className="col-4 border-end border-white">
                                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT/MT</span>
                                            </div>
                                            <div className="col-4">
                                                <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Petrol</span>
                                            </div>
                                            <div className="col-4 border-end border-white">
                                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2015</span>
                                            </div>
                                            <div className="col-4 border-end border-white">
                                                <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                                            </div>
                                            <div className="col-4">
                                                <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">27K</span>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="categories-item p-4">
                                <div className="categories-item-inner">
                                    <div className="categories-img rounded-top">
                                        <img src="img/car-3.png" className="img-fluid w-100 rounded-top" alt="" />
                                    </div>
                                    <div className="categories-content rounded-bottom p-4">
                                        <h4>Tesla Model S Plaid</h4>
                                        <div className="categories-review mb-4">
                                            <div className="me-3">3.8 Review</div>
                                            <div className="d-flex justify-content-center text-secondary">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star text-body"></i>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$170:00/Day</h4>
                                        </div>
                                        <div className="row gy-2 gx-0 text-center mb-4">
                                            <div className="col-4 border-end border-white">
                                                <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">4 Seat</span>
                                            </div>
                                            <div className="col-4 border-end border-white">
                                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT/MT</span>
                                            </div>
                                            <div className="col-4">
                                                <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Petrol</span>
                                            </div>
                                            <div className="col-4 border-end border-white">
                                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2015</span>
                                            </div>
                                            <div className="col-4 border-end border-white">
                                                <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                                            </div>
                                            <div className="col-4">
                                                <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">27K</span>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="categories-item p-4">
                                <div className="categories-item-inner">
                                    <div className="categories-img rounded-top">
                                        <img src="img/car-4.png" className="img-fluid w-100 rounded-top" alt="" />
                                    </div>
                                    <div className="categories-content rounded-bottom p-4">
                                        <h4>Hyundai Kona Electric</h4>
                                        <div className="categories-review mb-4">
                                            <div className="me-3">4.8 Review</div>
                                            <div className="d-flex justify-content-center text-secondary">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">$187:00/Day</h4>
                                        </div>
                                        <div className="row gy-2 gx-0 text-center mb-4">
                                            <div className="col-4 border-end border-white">
                                                <i className="fa fa-users text-dark"></i> <span className="text-body ms-1">4 Seat</span>
                                            </div>
                                            <div className="col-4 border-end border-white">
                                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">AT/MT</span>
                                            </div>
                                            <div className="col-4">
                                                <i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">Petrol</span>
                                            </div>
                                            <div className="col-4 border-end border-white">
                                                <i className="fa fa-car text-dark"></i> <span className="text-body ms-1">2015</span>
                                            </div>
                                            <div className="col-4 border-end border-white">
                                                <i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">AUTO</span>
                                            </div>
                                            <div className="col-4">
                                                <i className="fa fa-road text-dark"></i> <span className="text-body ms-1">27K</span>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
