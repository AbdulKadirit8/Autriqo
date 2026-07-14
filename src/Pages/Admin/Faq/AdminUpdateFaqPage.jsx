import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateFaq, getFaq } from "../../../Redux/ActionCreator/FaqActionCreators"

import AdminSlidebar from '../../../Component/Admin/AdminSlidebar'
import TextValidators from '../../../FormValidators/TextValidators'

export default function AdminUpdateFaqPage() {
  let { id } = useParams()

  let navigate = useNavigate()
  let dispatch = useDispatch()

  let [data, setData] = useState({
    question: '',
    answer: '',
    status: true,
  })
  let [errorMessage, setErrorMessage] = useState({
    question: '',
    answer: '',
  })
  let [show, setShow] = useState(false)

  function getInputData(e) {
    let {name, value} = e.target
    setData({ ...data, [name]: name === 'status' ? (value === '1' ? true : false) : value })
    setErrorMessage({ ...errorMessage, [name]: TextValidators(e) })
  }

  let FaqStateData = useSelector(state => state.FaqStateData)

  function postData(e) {
    console.log(FaqStateData)
    e.preventDefault()
    let error = Object.values(errorMessage).find(x => x !== '')
    if (error)
      setShow(true)
    else {
      let item = FaqStateData.find(x => x.id !== id && x.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase())
      if (item) {
        setShow(true)
        setErrorMessage({ ...errorMessage, name: "Faq With This Name Is Alredy Exist" })
        return
      }

      dispatch(updateFaq({ ...data }))
      navigate("/admin/faq")
    }

  }
  useEffect(() => {
    dispatch(getFaq())
    if (FaqStateData.length) {
      let item = FaqStateData.find(x => x.id === id)
      if (item)
        setData({ ...data, ...item })
      else
        navigate("/admin/faq")
    }
  }, [FaqStateData.length])

  return (
    <div className='container my-3'>
      <div className="row">
        <div className="col-md-3  fadeInLeft animated" data-animation="fadeInLeft" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <AdminSlidebar />
        </div>
        <div className="col-md-9  fadeInRight animated" data-animation="fadeInRight" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <h5 className='bg-primary p-2 text-light text-center rounded-top fs-4'>Update Faq`` <Link to="/admin/faq"><i className='bi bi-arrow-left text-light float-end fs-3'></i></Link></h5>
          <form onSubmit={postData}>
            <div className="row">
              <div className="col-12 mb-3">
                <label>Question*</label>
                <input type="text" name="question" value={data.question} placeholder='Faq Name' onChange={getInputData} className={`form-control ${show && errorMessage.question ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.question ? <p className='text-danger text-capitalized'>{errorMessage.question}</p> : null}
              </div>

              <div className="col-12 mb-3">
                <label>Answer*</label>
                <textarea name="answer" rows={3} value={data.answer} placeholder='Short Description' onChange={getInputData} className={`form-control ${show && errorMessage.answer ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.answer ? <p className='text-danger text-capitalized'>{errorMessage.answer}</p> : null}
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