
import { useParams } from 'react-router-dom'
import Breadcrum from '../Component/Breadcrum'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCar } from '../Redux/ActionCreator/CarActionCreators'
import CarSlider from '../Component/CarSlider'

export default function CarDetailsPage() {

  let { id } = useParams()
  let [data, setData] = useState({})
  let [similarCar, setSimilarCar] = useState([])

  let CarStateData = useSelector(state => state.CarStateData)
  let dispatch = useDispatch()

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
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <h5 className='bg-primary p-2 text-light text-center rounded-top'>{data.name}</h5>

            <table className='table table-bordered text-dark '>
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
            </table>
          </div>
        </div>
        <CarSlider similarCar={similarCar} />
      </div>
    </>
  )
}
