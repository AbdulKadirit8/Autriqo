import { Link } from 'react-router-dom'
import { useState } from 'react'

import AdminSlidebar from '../../../Component/Admin/AdminSlidebar'
import ImageValidators from '../../../FormValidatrs/ImageValidators'
import TextValidators from '../../../FormValidatrs/TextValidators'

export default function AdminCreateCategoryPage() {
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
    let name=e.target.name
    let value=name==='pic'?e.target.files[0].name:e.target.value

    // real backend
    // let value=name==='pic'?e.target.files[0]:e.target.value

    setData({...data, [name]:name==='status'?(value==='1'?true:false):value})
    setErrorMessage({...errorMessage, [name]:name==='pic' ? ImageValidators(e): TextValidators(e)})
  }

  function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find(x => x !== '')
    if (error)
      setShow(true)
    else
      alert(`
    Name: ${data.name}
    Pic: ${data.pic}
    status: ${data.status}
    `
    )
  }
  return (
    <div className='container my-3'>
      <div className="row">
        <div className="col-md-3  fadeInLeft animated" data-animation="fadeInLeft" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <AdminSlidebar />
        </div>
        <div className="col-md-9  fadeInRight animated" data-animation="fadeInRight" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <h5 className='bg-primary p-2 text-light text-center rounded-top fs-4'>Create Category <Link to="/admin/category"><i className='bi bi-arrow-left text-light float-end fs-3'></i></Link></h5>
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