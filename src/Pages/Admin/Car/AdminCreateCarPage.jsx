import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShowSlider } from '../../../Redux/Reducer/SliderReducer'

import { createCar } from "../../../Redux/ActionCreator/CarActionCreators"
import { getBrand } from "../../../Redux/ActionCreator/BrandActionCreators"
import { getCategory } from "../../../Redux/ActionCreator/CategoryActionCreators"

import AdminSlidebar from '../../../Component/Admin/AdminSlidebar'
import ImageValidators from '../../../FormValidators/ImageValidators'
import TextValidators from '../../../FormValidators/TextValidators'

export default function AdminCreateCarPage() {
  const showSlider = useSelector(
    state => state.slider.showSlider
  );

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
    address: '',
    pic: [],
    status: true,
  })
  let [errorMessage, setErrorMessage] = useState({
    name: 'Name field is Mendatory',
    registrationNumber: 'Registration Number field is Mendatory',
    baseRentAmount: 'Base Rent Amount field is Mendatory',
    discount: 'Discount field is Mendatory',
    address: 'Address field is Mendatory',
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


  async function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find(x => x !== '')
    if (error)
      setShow(true)
    else {
      let response = await fetch(`https://nominatim.openstreetmap.org/search?q=${data.address}&format=jsonv2&limit=1`)
      response = await response.json()
      if (response.length === 0) {
        setErrorMessage({ ...errorMessage, address: 'Invalid Address, PLease Enter Correct Address' })
        setShow(true)
        return
      }
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
      // formData.append("type",data.type)
      // formData.append("seatingCapacity",data.seatingCapacity)
      // formData.append("registrationNumber",data.registrationNumber)
      // formData.append("drivingMode",data.drivingMode)
      // formData.append("driver",data.driver)
      // formData.append("category",data.category||CategoryStateData[0].id)
      // formData.append("brand",data.brand||BrandStateData[0].id)
      // formData.append("baseRentAmount",data.baseRentAmount)
      // formData.append("discount",data.discount)
      // formData.append("finalRentAmount",data.finalRentAmount)
      // formData.append("address", {
      //   address: data.address,
      //   lat: response[0].lat,
      //   lon: response[0].lon
      // })
      // Array.from(data.pic).forEach(x=>{
      // formData.append("pic", x)
      // })
      // formData.append("status",data.status)
      // dispatch(createCar(formData))

      let bs = parseInt(data.baseRentAmount)
      let d = parseInt(data.discount)
      let fs = parseInt(bs - bs * d / 100)
      dispatch(createCar({
        ...data,
        category: data.category || CategoryStateData[0].name,
        brand: data.brand || BrandStateData[0].name,
        baseRentAmount: bs,
        discount: d,
        finalRentAmount: fs,
        address: {
          address: data.address,
          lat: response[0].lat,
          lon: response[0].lon
        }
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
    <div className='container-fluid my-3'>
      <div className="row">
        <div className={`${showSlider ? 'd-md-none' : ''} col-md-2 fadeInLeft animated`} data-animation="fadeInLeft" data-delay="0.1s" style={{ animationDelay: "0.1s" }}>
          <AdminSlidebar />
        </div>
        <div className={`${showSlider ? 'col-12' : 'col-md-9'}  fadeInRight animated`} data-animation="fadeInRight" data-delay="0.1s" style={{ animationDelay: "0.1s" }}>
          <h5 className='bg-primary p-2 fs-4 text-light text-center rounded-top'><i className={`bi ${showSlider ? 'bi-list' : 'bi-x-circle'} float-start fs-3 d-none d-md-inline`} onClick={() => dispatch(setShowSlider(!showSlider))}></i>Create Car <Link to="/admin/car"><i className='bi bi-arrow-left text-light float-end fs-3'></i></Link></h5>
          <form onSubmit={postData}>
            <div className="row">

              <div className="col-md-6 mb-3">
                <label>Name*</label>
                <input type="text" name="name" placeholder='Car Name' onChange={getInputData} className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.name ? <p className='text-danger text-capitalized'>{errorMessage.name}</p> : null}
              </div>

              <div className="col-md-6 mb-3">
                <label>Registration Number*</label>
                <input type="text" name="registrationNumber" placeholder='Registration Number' onChange={getInputData} className={`form-control ${show && errorMessage.registrationNumber ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.registrationNumber ? <p className='text-danger text-capitalized'>{errorMessage.registrationNumber}</p> : null}
              </div>

              <div className="col-md-6 mb-3">
                <label>Category*</label>
                <select name='category' onChange={getInputData} className='form-select border-dark'>
                  {CategoryStateData.filter(x => x.status).map((item) => {
                    return <option value={item.name} key={item.id}>{item.name}</option>
                    // return <option value={item.name} key={item.id} value={item.id}>{item.name}</option>
                  })}
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label>Brand*</label>
                <select name='brand' onChange={getInputData} className='form-select border-dark'>
                  {BrandStateData.filter(x => x.status).map((item) => {
                    return <option value={item.name} key={item.id}>{item.name}</option>
                    // return <option value={item.name} key={item.id} value={item.id}>{item.name}</option>
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

              <div className="col-md-6 mb-3">
                <label>Address*</label>
                <input type="text" name="address" placeholder='Address' onChange={getInputData} className={`form-control ${show && errorMessage.address ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.address ? <p className='text-danger text-capitalized'>{errorMessage.address}</p> : null}
              </div>

              <div className="col-md-6 mb-3">
                <label>Status*</label>
                <select name="status" onChange={getInputData} className={`form-select border-dark`}>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>

              <div className="col-12 mb-3">
                <label>Pic*</label>
                <input type="file" name="pic" multiple onChange={getInputData} className={`form-control ${show && errorMessage.pic ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.pic ? <p className='text-danger text-capitalized'>{errorMessage.pic}</p> : null}
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