import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShowSlider } from '../../../Redux/Reducer/SliderReducer'

import { updateService, getService } from "../../../Redux/ActionCreator/ServiceActionCreators"

import AdminSlidebar from '../../../Component/Admin/AdminSlidebar'
import TextValidators from '../../../FormValidators/TextValidators'

export default function AdminUpdateServicePage() {
  const showSlider = useSelector(
    state => state.slider.showSlider
  );
  let { id } = useParams()

  let navigate = useNavigate()
  let dispatch = useDispatch()

  let [data, setData] = useState({
    name: '',
    icon: '',
    shortDescription: '',
    status: true,
  })
  let [errorMessage, setErrorMessage] = useState({
    name: '',
    icon: '',
    shortDescription: '',
  })
  let [show, setShow] = useState(false)

  function getInputData(e) {
    let {name, value} = e.target
    setData({ ...data, [name]: name === 'status' ? (value === '1' ? true : false) : value })
    setErrorMessage({ ...errorMessage, [name]: TextValidators(e) })
  }

  let ServiceStateData = useSelector(state => state.ServiceStateData)

  function postData(e) {
    console.log(ServiceStateData)
    e.preventDefault()
    let error = Object.values(errorMessage).find(x => x !== '')
    if (error)
      setShow(true)
    else {
      let item = ServiceStateData.find(x => x.id !== id && x.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase())
      if (item) {
        setShow(true)
        setErrorMessage({ ...errorMessage, name: "Service With This Name Is Alredy Exist" })
        return
      }

      dispatch(updateService({ ...data }))
      navigate("/admin/service")
    }

  }
  useEffect(() => {
    dispatch(getService())
    if (ServiceStateData.length) {
      let item = ServiceStateData.find(x => x.id === id)
      if (item)
        setData({ ...data, ...item })
      else
        navigate("/admin/service")
    }
  }, [ServiceStateData.length])

  return (
    <div className='container-fluid my-3'>
      <div className="row">
        <div className={`${showSlider ? 'd-md-none' : ''} col-md-2 fadeInLeft animated`} data-animation="fadeInLeft" data-delay="0.1s" style={{ animationDelay: "0.1s" }}>
          <AdminSlidebar />
        </div>
        <div className={`${showSlider ? 'col-12' : 'col-md-9'}  fadeInRight animated`} data-animation="fadeInRight" data-delay="0.1s" style={{ animationDelay: "0.1s" }}>
          <h5 className='bg-primary p-2 fs-4 text-light text-center rounded-top'><i className={`bi ${showSlider ? 'bi-list' : 'bi-x-circle'} float-start fs-3 d-none d-md-inline`} onClick={() => dispatch(setShowSlider(!showSlider))}></i>Update Service<Link to="/admin/service"><i className='bi bi-arrow-left text-light float-end fs-3'></i></Link></h5>
          <form onSubmit={postData}>
            <div className="row">
              <div className="col-12 mb-3">
                <label>Name*</label>
                <input type="text" name="name" value={data.name} placeholder='Service Name' onChange={getInputData} className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.name ? <p className='text-danger text-capitalized'>{errorMessage.name}</p> : null}
              </div>

              <div className="col-12 mb-3">
                <label>Short Description*</label>
                <textarea name="shortDescription" rows={3} value={data.shortDescription} placeholder='Short Description' onChange={getInputData} className={`form-control ${show && errorMessage.shortDescription ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.shortDescription ? <p className='text-danger text-capitalized'>{errorMessage.shortDescription}</p> : null}
              </div>

              <div className="col-md-6 mb-3">
                <label>Icon*</label>
                <input type="text" name="icon" value={data.icon} placeholder="Icon Tag From Bootstrap Icons like <i class='bi bi-list'></i>" onChange={getInputData} className={`form-control ${show && errorMessage.icon ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.icon ? <p className='text-danger text-capitalized'>{errorMessage.icon}</p> : null}
              </div>

              <div className="col-md-6 mb-3">
                <label>Status*</label>
                <select name="status" value={data.status ? "1" : "0"} onChange={getInputData} className={`form-select border-dark`}>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
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