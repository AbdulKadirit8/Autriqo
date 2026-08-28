
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import { getCar } from '../Redux/ActionCreator/CarActionCreators';
import CarCard from './CarCard';


let sliderOptions = {
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
            spaceBetween: 20,
        }
    },
    slidesPerView: 1,
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    modules: [Autoplay]
}
export default function CarSlider({ similarCar }) {

    let [data, setData] = useState()
    let CarStateData = useSelector(state => state.CarStateData)
    let dispatch = useDispatch()

    useEffect(() => {
        (() => {
            dispatch(getCar())
            if (similarCar && typeof similarCar === "Array")
                setData([...similarCar])
            else if (CarStateData.length)
                setData([...CarStateData])

        })()
    }, [CarStateData.length])
    return (
        <div className="container-fluid categories pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
                    {similarCar ?
                        <h1 className="display-5 text-capitalize mb-3">Other Similar <span className="text-primary">Vehicles</span></h1> :
                        <h1 className="display-5 text-capitalize mb-3">Popular <span className="text-primary">Vehicle</span></h1>
                    }
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                    </p>
                </div>
                <div className="categories-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <Swiper {...sliderOptions}>
                        {data?.filter(x => x.status).map((item => {
                            return <SwiperSlide key={item.id}>
                                <CarCard item={item} />
                            </SwiperSlide>
                        }))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}