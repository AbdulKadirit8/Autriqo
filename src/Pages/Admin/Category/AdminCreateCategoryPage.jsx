import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShowSlider } from '../../../Redux/Reducer/SliderReducer'

import { createCategory, getCategory } from "../../../Redux/ActionCreator/CategoryActionCreators"

import AdminSlidebar from '../../../Component/Admin/AdminSlidebar'
import ImageValidators from '../../../FormValidators/ImageValidators'
import TextValidators from '../../../FormValidators/TextValidators'

export default function AdminCreateCategoryPage() {
  const showSlider = useSelector(
    state => state.slider.showSlider
  );
  let navigate = useNavigate()
  let dispatch = useDispatch()

  let [data, setData] = useState({
    name: '',
    pic: '',
    status: true,
  })
  let [errorMessage, setErrorMessage] = useState({
    name: 'Name field is Mendatory',
    pic: 'Pic field is Mendatory',
  })
  let [show, setShow] = useState(false)

  function getInputData(e) {
    let name = e.target.name

    // Domy Backend
    let value = name === 'pic' ? "category/" + e.target.files[0].name : e.target.value

    // real backend
    // let value = name === 'pic' ? e.target.files[0] : e.target.value

    setData({ ...data, [name]: name === 'status' ? (value === '1' ? true : false) : value })
    setErrorMessage({ ...errorMessage, [name]: name === 'pic' ? ImageValidators(e) : TextValidators(e) })
  }

  let CategoryStateData = useSelector(state => state.CategoryStateData)

  function postData(e) {
    console.log(CategoryStateData)
    e.preventDefault()
    let error = Object.values(errorMessage).find(x => x !== '')
    if (error)
      setShow(true)
    else {
      // let item = CategoryStateData.find(x => x.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase())
      let item = CategoryStateData.find(x => x.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase())
      if (item) {
        setShow(true)
        setErrorMessage({ ...errorMessage, name: "Category With This Name Is Alredy Exist" })
        return
      }

      // backend
      // let formData= new FormData()
      // formData.append("name",data.name)
      // formData.append("name",data.pic)
      // formData.append("name",data.status)
      // dispatch(createCategory(formData))

      dispatch(createCategory({ ...data }))
      navigate("/admin/category")
    }

  }
  useEffect(() => {
    dispatch(getCategory())
  }, [CategoryStateData.length])

  return (
    <div className='container-fluid my-3'>
      <div className="row">
        <div className={`${showSlider ? 'd-md-none' : ''} col-md-2 fadeInLeft animated`} data-animation="fadeInLeft" data-delay="0.1s" style={{ animationDelay: "0.1s" }}>
          <AdminSlidebar />
        </div>
        <div className={`${showSlider ? 'col-12' : 'col-md-9'}  fadeInRight animated`} data-animation="fadeInRight" data-delay="0.1s" style={{ animationDelay: "0.1s" }}>
          <h5 className='bg-primary p-2 fs-4 text-light text-center rounded-top'><i className={`bi ${showSlider ? 'bi-list' : 'bi-x-circle'} float-start fs-3 d-none d-md-inline`} onClick={() => dispatch(setShowSlider(!showSlider))}></i>Create Category <Link to="/admin/category"><i className='bi bi-arrow-left text-light float-end fs-3'></i></Link></h5>
          <form onSubmit={postData}>
            <div className="row">
              <div className="col-12 mb-3">
                <label>Name*</label>
                <input type="text" name="name" placeholder='Category Name' onChange={getInputData} className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.name ? <p className='text-danger text-capitalized'>{errorMessage.name}</p> : null}
              </div>

              <div className="col-md-6 mb-3">
                <label>Pic*</label>
                <input type="file" name="pic" onChange={getInputData} className={`form-control ${show && errorMessage.pic ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.pic ? <p className='text-danger text-capitalized'>{errorMessage.pic}</p> : null}
              </div>

              <div className="col-md-6 mb-3">
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