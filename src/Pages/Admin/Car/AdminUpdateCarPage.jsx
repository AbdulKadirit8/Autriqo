import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShowSlider } from '../../../Redux/Reducer/SliderReducer'

import { updateCar, getCar } from "../../../Redux/ActionCreator/CarActionCreators"
import { getBrand } from '../../../Redux/ActionCreator/BrandActionCreators'
import { getCategory } from '../../../Redux/ActionCreator/CategoryActionCreators'

import AdminSlidebar from '../../../Component/Admin/AdminSlidebar'
import ImageValidators from '../../../FormValidators/ImageValidators'
import TextValidators from '../../../FormValidators/TextValidators'

export default function AdminUpdateCarPage() {

  const showSlider = useSelector(
    state => state.slider.showSlider
  );
  let [falge, setFlage] = useState(false)

  let { id } = useParams()
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
    name: '',
    registrationNumber: '',
    baseRentAmount: '',
    discount: '',
    address: '',
    pic: ''
  })
  let [show, setShow] = useState(false)

  let CategoryStateData = useSelector(state => state.CategoryStateData)
  let BrandStateData = useSelector(state => state.BrandStateData)
  let CarStateData = useSelector(state => state.CarStateData)
  function getInputData(e) {
    let name = e.target.name

    // Domy Backend
    let value = name === 'pic' ? data.pic.concat(Array.from(e.target.files).map(x => "car/" + x.name)) : e.target.value

    // real backend
    // let value = name === 'pic' ? e.target.files : e.target.value

    setData({ ...data, [name]: name === 'status' ? (value === '1' ? true : false) : value })
    setErrorMessage({ ...errorMessage, [name]: name === 'pic' ? ImageValidators(e) : TextValidators(e) })
  }



  async function postData(e) {
    console.log(CarStateData)
    e.preventDefault()
    let error = Object.values(errorMessage).find(x => x !== '')
    if (error)
      setShow(true)
    else if (data.pic.length === 0) {
      setShow(true)
      setErrorMessage({ ...errorMessage, pic: "Please Upload Atleas One Image" })
    }
    else {
      let response = await fetch(`https://nominatim.openstreetmap.org/search?q=${data.address}&format=jsonv2&limit=1`)
      response = await response.json()
      if (response.length === 0) {
        setErrorMessage({ ...errorMessage, address: 'Invalid Address, PLease Enter Correct Address' })
        setShow(true)
        return
      }

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
      // formData.append("address",{
      //     address: data.address,
      //     lat: response[0].lat,
      //     lon: response[0].lon
      //   })
      // Array.from(data.pic).forEach(x=>{
      // formData.append("pic", x)
      // })
      // formData.append("status",data.status)
      // dispatch(updateCar(formData))

      let bs = parseInt(data.baseRentAmount)
      let d = parseInt(data.discount)
      let fs = bs - bs * d / 100
      dispatch(updateCar({
        ...data,
        category: data.category || CategoryStateData[0].name,
        brand: data.brand || BrandStateData[0].name,
        baseRentAmount: bs,
        discount: d,
        finalRentAmount: fs,
        address: {
          add: data.add,
          lat: response[0].lat,
          lon: response[0].lon
        }
      }))
      navigate("/admin/car")
    }

  }
  useEffect(() => {
    dispatch(getCar())
    if (CarStateData.length) {
      let item = CarStateData.find(x => x.id === id)
      if (item)
        setData({ ...data, ...item })
      else
        navigate("/admin/car")
    }
  }, [CarStateData.length])

  useEffect(() => {
    (() => dispatch(getCategory()))()
  }, [CategoryStateData.lenght])

  useEffect(() => {
    (() => dispatch(getBrand()))()
  }, [BrandStateData.lenght])

  return (
    <div className='container-fluid my-3'>
      <div className="row">
        <div className={`${showSlider ? 'd-md-none' : ''} col-md-2 fadeInLeft animated`} data-animation="fadeInLeft" data-delay="0.1s" style={{ animationDelay: "0.1s" }}>
          <AdminSlidebar />
        </div>
        <div className={`${showSlider ? 'col-12' : 'col-md-9'}  fadeInRight animated`} data-animation="fadeInRight" data-delay="0.1s" style={{ animationDelay: "0.1s" }}>
          <h5 className='bg-primary p-2 fs-4 text-light text-center rounded-top'><i className={`bi ${showSlider ? 'bi-list' : 'bi-x-circle'} float-start fs-3 d-none d-md-inline`} onClick={() => dispatch(setShowSlider(!showSlider))}></i>Update Car<Link to="/admin/car"><i className='bi bi-arrow-left text-light float-end fs-3'></i></Link></h5>
          <form onSubmit={postData}>
            <div className="row">

              <div className="col-xl-9 col-md-6 mb-3">
                <label className='ps-2'>Name*</label>
                <input type="text" value={data.name} name="name" placeholder='Car Name' onChange={getInputData} className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.name ? <p className='text-danger text-capitalized'>{errorMessage.name}</p> : null}
              </div>

              <div className="col-xl-3 col-md-6 mb-3">
                <label className='ps-2'>Registration Number*</label>
                <input type="text" name="registrationNumber" value={data.registrationNumber} placeholder='Registration Number' onChange={getInputData} className={`form-control ${show && errorMessage.registrationNumber ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.registrationNumber ? <p className='text-danger text-capitalized'>{errorMessage.registrationNumber}</p> : null}
              </div>

              <div className="col-md-6 mb-3">
                <label className='ps-2'>Category*</label>
                <select name='category' value={data.category} onChange={getInputData} className='form-select border-dark'>
                  {CategoryStateData.filter(x => x.status).map((item) => {
                    return <option value={item.name} key={item.id}>{item.name}</option>
                    // return <option value={item.name} key={item.id} value={item.id}>{item.name}</option>
                  })}
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className='ps-2'>Brand*</label>
                <select name='brand' value={data.brand} onChange={getInputData} className='form-select border-dark'>
                  {BrandStateData.filter(x => x.status).map((item) => {
                    return <option value={item.name} key={item.id}>{item.name}</option>
                    // return <option value={item.name} key={item.id} value={item.id} >{item.name}</option>
                  })}
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className='ps-2'>Basic Rent Amount Per Day*</label>
                <input type="text" name="baseRentAmount" value={data.baseRentAmount} placeholder='Basic Rent Amount Per Day' onChange={getInputData} className={`form-control ${show && errorMessage.baseRentAmount ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.baseRentAmount ? <p className='text-danger text-capitalized'>{errorMessage.baseRentAmount}</p> : null}
              </div>

              <div className="col-md-6 mb-3">
                <label className='ps-2'>Discount*</label>
                <input type="text" name="discount" value={data.discount} placeholder='Discount' onChange={getInputData} className={`form-control ${show && errorMessage.discount ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.discount ? <p className='text-danger text-capitalized'>{errorMessage.discount}</p> : null}
              </div>

              <div className="col-xl-3 col-md-6 mb-3">
                <label className='ps-2'>Driving Mode*</label>
                <select name='drivingMode' value={data.drivingMode} onChange={getInputData} className='form-select border-primary'>
                  <option>Manual</option>
                  <option>Automatic</option>
                </select>
              </div>

              <div className="col-xl-3 col-md-6 mb-3">
                <label className='ps-2'>Driver Requered*</label>
                <select name='driver' value={data.driver} onChange={getInputData} className='form-select border-primary'>
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </div>

              <div className="col-xl-3 col-md-6 mb-3">
                <label className='ps-2'>Seating Capacity*</label>
                <select name='seatingCapacity' value={data.seatingCapacity} onChange={getInputData} className='form-select border-primary'>
                  <option>2</option>
                  <option>4</option>
                  <option>5</option>
                  <option>7</option>
                  <option>11</option>
                </select>
              </div>

              <div className="col-xl-3 col-md-6 mb-3">
                <label className='ps-2'>Type*</label>
                <select name='type' value={data.type} onChange={getInputData} className='form-select border-primary'>
                  <option>CNG</option>
                  <option>Petrol</option>
                  <option>EV</option>
                  <option>Petrol + Hybrid</option>
                  <option>Diesel</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className='ps-2'>Address*</label>
                <input type="text" value={data.address?.address} name="address" placeholder='Address' onChange={getInputData} className={`form-control ${show && errorMessage.address ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.address ? <p className='text-danger text-capitalized'>{errorMessage.address}</p> : null}
              </div>

              <div className="col-md-6 mb-3">
                <label className='ps-2'>Status*</label>
                <select name="status" value={data.status ? '1' : '0'} onChange={getInputData} className={`form-select border-dark`}>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>

              <div className="col-12 mb-3">
                <label className='ps-2'>Pic*</label>
                <input type="file" name="pic" multiple onChange={getInputData} className={`form-control ${show && errorMessage.pic ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.pic ? <p className='text-danger text-capitalized'>{errorMessage.pic}</p> : null}
              </div>

              <div className={`col-12 mb-3 ${data.pic.length === 0 ? 'd-none' : ''}`}>
                <label className='ps-1'>Old Pic(Click on pic to remove)<span className='text-danger'>*</span></label>
                <div className="d-flex flex-wrap align-items-end ">
                  {data.pic.map((item, index) => {
                    return <img key={index} onClick={() => {
                      data.pic.splice(index, 1)
                      setFlage(!falge)
                    }} multiple src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item}`} className='m-1 border' alt="Old product image" width={80} />
                  })}
                </div>
              </div>

              <div className="col-12 mb-3">
                <button type='submit' className='btn btn-primary w-100'>Update</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}