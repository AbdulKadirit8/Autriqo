
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCar } from '../Redux/ActionCreator/CarActionCreators'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules'

import Breadcrum from '../Component/Breadcrum'
import CarSlider from '../Component/CarSlider'

import { createBooking } from '../Redux/ActionCreator/BookingActionCreators'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const sliderOption = {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  loop: true,
  Pagination: true,
  modules: [EffectCube, Pagination]
}

export default function CarDetailsPage() {

  let { id } = useParams()
  let [data, setData] = useState({})
  let [similarCar, setSimilarCar] = useState([])
  let navigate = useNavigate()

  let CarStateData = useSelector(state => state.CarStateData)
  let dispatch = useDispatch()

  let [selected, setSelected] = useState({
    fromDate: "",
    days: 1
  })

  function booking(e) {
    e.preventDefault()
    let item = {
      user: localStorage.getItem("userid"),
      car: data.id,
      carName: data.name,
      carRegistrationNumber: data.registrationNumber,
      carRentPrice: data.finalRentAmount,
      ...selected
    }
    dispatch(createBooking(item))
    navigate("/booking-confirmation")
  }

  useEffect(() => {
    (() => {
      dispatch(getCar())
      if (CarStateData.length) {
        let item = CarStateData.find(x => x.id === id)
        if (item) {
          setData({ ...item })
          setSimilarCar(CarStateData.filter(x => x.category === item.category))
        }
        else
          window.history.back()
      }
    })()
  }, [CarStateData.length])
  return (
    <>
      <Breadcrum title={data.name ?? "Car Details"} />

      <div className="container-fluid my-5">
        <div className="row mb-3">
          <div className="col-md-6">
            <Swiper
              {...sliderOption}
              className='mySwiper'
            >
              {data.pic?.map((item, index) => {
                return <SwiperSlide key={index}>
                  <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item}`}
                    className='w-100' style={{ height: 400 }} />
                </SwiperSlide>
              })}
            </Swiper>
          </div>
          <div className="col-md-6">
            <h5 className='bg-primary p-2 text-light text-center rounded-top'>{data.name}</h5>

            <table className='table table-bordered text-dark '>
              <tbody>
                <tr>
                  <th>Category</th>
                  <td>{data.category}</td>
                </tr>
                <tr>
                  <th>Brand</th>
                  <td>{data.brand}</td>
                </tr>
                <tr>
                  <th>Registration Number</th>
                  <td>{data.registrationNumber}</td>
                </tr>
                <tr>
                  <th>Driving Mode</th>
                  <td>{data.drivingMode}</td>
                </tr>
                <tr>
                  <th>Driver</th>
                  <td>{data.driver ? "With Driver" : "Without Driver"}</td>
                </tr>
                <tr>
                  <th>Fuel Type</th>
                  <td>{data.type}</td>
                </tr>
                <tr>
                  <th>Seating Capacity</th>
                  <td>{data.seatingCapacity}</td>
                </tr>
                <tr>
                  <th>Rent</th>
                  <td><del className='text-primary'>&#8377;{data.baseRentAmount}</del> &#8377;{data.finalRentAmount} <sup>{data.discount}% off</sup></td>
                </tr>
                <tr>
                  <th colSpan={2}>
                    <form onSubmit={booking}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="d-flex">
                            <input type="date" name="date" required onChange={(e) => setSelected({ ...selected, fromDate: e.target.value })} className='form-control border-primary' />
                            <input type="number" name="days" required onChange={(e) => setSelected({ ...selected, days: parseInt(e.target.value) })} value={selected.days} className='form-control border-primary' />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <button type='submit' className='btn btn-primary w-100'>Book Now</button>
                        </div>
                      </div>
                    </form>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <CarSlider similarCar={similarCar} />
      </div>
    </>
  )
}
