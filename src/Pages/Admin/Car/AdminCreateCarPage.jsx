import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createCar } from "../../../Redux/ActionCreator/CarActionCreators"
import { getBrand } from "../../../Redux/ActionCreator/BrandActionCreators"
import { getCategory } from "../../../Redux/ActionCreator/CategoryActionCreators"

import AdminSlidebar from '../../../Component/Admin/AdminSlidebar'
import ImageValidators from '../../../FormValidators/ImageValidators'
import TextValidators from '../../../FormValidators/TextValidators'

export default function AdminCreateCarPage() {
  let navigate = useNavigate()
  let dispatch = useDispatch()

  let [data, setData] = useState({
    name: '',
    type: 'Petrol',
    seatingCapacity: '5',
    registrationNumber: '',
    drivingMode: 'Manual',
    driver: false,
    category: '',
    brand: '',
    baseRentAmount: 0,
    discount: 0,
    finalRentAmount: 0,
    city: '',
    pic: [],
    status: true,
  })
  let [errorMessage, setErrorMessage] = useState({
    name: 'Name field is Mendatory',
    registrationNumber: 'Registration Number field is Mendatory',
    baseRentAmount: 'Base Rent Amount field is Mendatory',
    discount: 'Discount field is Mendatory',
    city: 'City field is Mendatory',
    pic: 'Pic field is Mendatory',
  })
  let [show, setShow] = useState(false)

  let CategoryStateData = useSelector(state => state.CategoryStateData)
  let BrandStateData = useSelector(state => state.BrandStateData)

  function getInputData(e) {
    let name = e.target.name

    // Domy Backend
    let value = name === 'pic' ? Array.from(e.target.files).map(x => "car/" + x.name) : e.target.value

    // real backend
    // let value = name === 'pic' ? e.target.files : e.target.value

    setData({ ...data, [name]: (name === 'status' || name === 'driver') ? (value === '1' ? true : false) : value })
    setErrorMessage({ ...errorMessage, [name]: name === 'pic' ? ImageValidators(e) : TextValidators(e) })
  }


  function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find(x => x !== '')
    if (error)
      setShow(true)
    else {
      // let item = CarStateData.find(x => x.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase())
      // let item = CarStateData.find(x => x.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase())
      // if (item) {
      //   setShow(true)
      //   setErrorMessage({ ...errorMessage, name: "Car With This Name Is Alredy Exist" })
      //   return
      // }

      // backend
      // let formData= new FormData()
      // formData.append("name",data.name)
      // formData.append("name",data.pic)
      // formData.append("name",data.status)
      // dispatch(createCar(formData))
      let bs = parseInt(data.baseRentAmount)
      let d = parseInt(data.discount)
      let fs = bs - bs * d / 100
      dispatch(createCar({
        ...data,
        baseRentAmount: bs,
        discount: d,
        finalRentAmount: fs

      }))
      navigate("/admin/car")
    }
  }

  useEffect(() => {
    dispatch(getCategory())
  }, [CategoryStateData.length])

  useEffect(() => {
    dispatch(getBrand())
  }, [BrandStateData.length])

  return (
    <div className='container my-3'>
      <div className="row">
        <div className="col-md-3  fadeInLeft animated" data-animation="fadeInLeft" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <AdminSlidebar />
        </div>
        <div className="col-md-9  fadeInRight animated" data-animation="fadeInRight" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <h5 className='bg-primary p-2 text-light text-center rounded-top fs-4'>Create Car <Link to="/admin/car"><i className='bi bi-arrow-left text-light float-end fs-3'></i></Link></h5>
          <form onSubmit={postData}>
            <div className="row">

              <div className="col-xl-9 col-md-6 mb-3">
                <label>Name*</label>
                <input type="text" name="name" placeholder='Car Name' onChange={getInputData} className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.name ? <p className='text-danger text-capitalized'>{errorMessage.name}</p> : null}
              </div>

              <div className="col-xl-3 col-md-6 mb-3">
                <label>Registration Number*</label>
                <input type="text" name="registrationNumber" placeholder='Registration Number' onChange={getInputData} className={`form-control ${show && errorMessage.registrationNumber ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.registrationNumber ? <p className='text-danger text-capitalized'>{errorMessage.registrationNumber}</p> : null}
              </div>

              <div className="col-md-6 mb-3">
                <label>Category*</label>
                <select name='category' onChange={getInputData} className='form-select border-dark'>
                  {CategoryStateData.filter(x => x.status).map((item) => {
                    return <option value={item.name} key={item.id}>{item.name}</option>
                  })}
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label>Brand*</label>
                <select name='brand' onChange={getInputData} className='form-select border-dark'>
                  {BrandStateData.filter(x => x.status).map((item) => {
                    return <option value={item.name} key={item.id}>{item.name}</option>
                  })}
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label>Basic Rent Amount Per Day*</label>
                <input type="text" name="baseRentAmount" placeholder='Basic Rent Amount Per Day' onChange={getInputData} className={`form-control ${show && errorMessage.baseRentAmount ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.baseRentAmount ? <p className='text-danger text-capitalized'>{errorMessage.baseRentAmount}</p> : null}
              </div>

              <div className="col-md-6 mb-3">
                <label>Discount*</label>
                <input type="text" name="discount" placeholder='Discount' onChange={getInputData} className={`form-control ${show && errorMessage.discount ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.discount ? <p className='text-danger text-capitalized'>{errorMessage.discount}</p> : null}
              </div>

              <div className="col-xl-3 col-md-6 mb-3">
                <label>Driving Mode*</label>
                <select name='drivingMode' onChange={getInputData} className='form-select border-primary'>
                  <option selected>Manual</option>
                  <option>Automatic</option>
                </select>
              </div>

              <div className="col-xl-3 col-md-6 mb-3">
                <label>Driver Requered*</label>
                <select name='driver' onChange={getInputData} className='form-select border-primary'>
                  <option selected value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </div>

              <div className="col-xl-3 col-md-6 mb-3">
                <label>Seating Capacity*</label>
                <select name='seatingCapacity' onChange={getInputData} className='form-select border-primary'>
                  <option>2</option>
                  <option>4</option>
                  <option selected>5</option>
                  <option>7</option>
                  <option>11</option>
                </select>
              </div>

              <div className="col-xl-3 col-md-6 mb-3">
                <label>Type*</label>
                <select name='type' onChange={getInputData} className='form-select border-primary'>
                  <option>CNG</option>
                  <option selected >Petrol</option>
                  <option>EV</option>
                  <option>Petrol + Hybrid</option>
                  <option>Diesel</option>
                </select>
              </div>

              <div className="col-xl-4  col-md-6 mb-3">
                <label>Pic*</label>
                <input type="file" name="pic" onChange={getInputData} className={`form-control ${show && errorMessage.pic ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.pic ? <p className='text-danger text-capitalized'>{errorMessage.pic}</p> : null}
              </div>

              <div className="col-xl-4  col-md-6 mb-3">
                <label>City*</label>
                <input type="text" name="city" placeholder='Basic Amount Per Day' onChange={getInputData} className={`form-control ${show && errorMessage.city ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.city ? <p className='text-danger text-capitalized'>{errorMessage.city}</p> : null}
              </div>


              <div className="col-xl-4  col-md-6 mb-3">
                <label>Status*</label>
                <select name="status" onChange={getInputData} className={`form-select border-dark`}>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>

              <div className="col-12 mb-3">
                <button type='submit' className='btn btn-primary w-100'>Create</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}