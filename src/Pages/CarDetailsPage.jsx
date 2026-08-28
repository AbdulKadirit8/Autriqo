
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

      <div className="container-fluid">
        <CarSlider similarCar={similarCar} />
      </div>
    </>
  )
}
