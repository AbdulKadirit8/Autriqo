import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { createFaq, getFaq } from "../../../Redux/ActionCreator/FaqActionCreators"

import AdminSlidebar from '../../../Component/Admin/AdminSlidebar'
import TextValidators from '../../../FormValidators/TextValidators'

export default function AdminCreateFaqPage() {
  let navigate = useNavigate()
  let dispatch = useDispatch()

  let [data, setData] = useState({
    question: '',
    answer: '',
    status: true,
  })
  let [errorMessage, setErrorMessage] = useState({
    question: 'Question field is Mendatory',
    answer: 'Answer field is Mendatory',
  })
  let [show, setShow] = useState(false)

  function getInputData(e) {
    let {name, value} = e.target
    setData({ ...data, [name]: name === 'status' ? (value === '1' ? true : false) : value })
    setErrorMessage({ ...errorMessage, [name]: TextValidators(e) })
  }

  let FaqStateData = useSelector(state => state.FaqStateData)

  function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find(x => x !== '')
    if (error)
      setShow(true)
    else {
      let item = FaqStateData.find(x => x.question?.toLocaleLowerCase() === data.question?.toLocaleLowerCase())
      if (item) {
        setShow(true)
        setErrorMessage({ ...errorMessage, question: "Faq With This Question Is Alredy Exist" })
        return
      }

      dispatch(createFaq({ ...data }))
      navigate("/admin/faq")
    }

  }
  useEffect(() => {
    dispatch(getFaq())
  }, [FaqStateData.length])

  return (
    <div className='container my-3'>
      <div className="row">
        <div className="col-md-3  fadeInLeft animated" data-animation="fadeInLeft" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <AdminSlidebar />
        </div>
        <div className="col-md-9  fadeInRight animated" data-animation="fadeInRight" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <h5 className='bg-primary p-2 text-light text-center rounded-top fs-4'>Create Faq <Link to="/admin/faq"><i className='bi bi-arrow-left text-light float-end fs-3'></i></Link></h5>
          <form onSubmit={postData}>
            <div className="row">
              <div className="col-12 mb-3">
                <label>Question*</label>
                <input type="text" name="question" placeholder='Question' onChange={getInputData} className={`form-control ${show && errorMessage.question ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.question ? <p className='text-danger text-capitalized'>{errorMessage.question}</p> : null}
              </div>

              <div className="col-12 mb-3">
                <label>Answer*</label>
                <textarea name="answer" rows={3} placeholder='Answer' onChange={getInputData} className={`form-control ${show && errorMessage.answer ? 'border-danger' : 'border-dark'}`} />
                {show && errorMessage.answer ? <p className='text-danger text-capitalized'>{errorMessage.answer}</p> : null}
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