import { useDispatch, useSelector } from "react-redux";
import Breadcrum from "../Component/Breadcrum";
import { useEffect, useState } from "react";
import { getCar } from "../Redux/ActionCreator/CarActionCreators";
import { getCategory } from "../Redux/ActionCreator/CategoryActionCreators";
import { getBrand } from "../Redux/ActionCreator/BrandActionCreators";
import CarCard from "../Component/CarCard";

export default function CarPage() {
  let dispatch = useDispatch()
  let [data, setData] = useState([])
  let [selected, setSelected] = useState({
    category: [],
    brand: []
  })

  let CarStateData = useSelector(state => state.CarStateData)
  let CategoryStateData = useSelector(state => state.CategoryStateData)
  let BrandStateData = useSelector(state => state.BrandStateData)

  function getCheckboxInputData(key, value) {
    let arr = selected[key]
    if (arr.includes(value))
      arr = arr.filter(x => x !== value)
    else
      arr.push(value)

    setSelected({ ...selected, [key]: arr })
  }

  useEffect(() => {
    (() => {
      dispatch(getCar())
      if (CarStateData.length) {
        setData(CarStateData.filter(x => x.status))
      }
    })()
  }, [CarStateData.length])

  useEffect(() => {
    dispatch(getCategory())
  }, [CategoryStateData.length])

  useEffect(() => {
    dispatch(getBrand())
  }, [BrandStateData.length])
  return (
    <>
      <Breadcrum title={"Cars"} />
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-3">
            <ul className="list-group mb-3">
              <li className="list-group-item active" aria-current="true">Category</li>
              {CategoryStateData.filter(x => x.status).map(item => {
                return <li key={item.id} className="list-group-item"
                  onClick={() => getCheckboxInputData('category', item.name)}>
                  <span>{item.name}</span>
                  {selected.category?.includes(item.name) ? <i className='bi bi-check float-end'></i> : null}
                </li>
              })}
            </ul>
            <ul className="list-group mb-3">
              <li className="list-group-item active" aria-current="true">Brand</li>
              {BrandStateData.filter(x => x.status).map(item => {
                return <li key={item.id} className="list-group-item"
                  onClick={() => getCheckboxInputData('brand', item.name)}>
                  <span>{item.name}</span>
                  {selected.brand?.includes(item.name) ? <i className='bi bi-check float-end'></i> : null}
                </li>
              })}
            </ul>
          </div>
          <div className="col-md-9">
            <div className="row">
              {data.map(item => {
                return <div key={item.id} className='col-lg-4 col-md-6'>
                  <CarCard item={item} />
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
