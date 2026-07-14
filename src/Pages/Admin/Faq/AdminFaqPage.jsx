import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { deleteFaq, getFaq } from '../../../Redux/ActionCreator/FaqActionCreators'

import AdminSlidebar from '../../../Component/Admin/AdminSlidebar'

import DataTable from 'datatables.net-dt'
import "datatables.net-dt/css/dataTables.dataTables.min.css"

export default function AdminFaqPage() {
  let [data, setData] = useState([])
  let FaqStateData = useSelector(state => state.FaqStateData)
  let dispatch = useDispatch()

  function deleteRecord(id) {
    if (window.confirm("Are You Sure You Want To Delete Tha Record")) {
      dispatch(deleteFaq({ id: id }))
      setData(data.filter(x => x.id !== id))
    }
  }
  
  useEffect(() => {
    let time = (() => {
      dispatch(getFaq())
      if (FaqStateData.length) {
        setData(FaqStateData)
        return setTimeout(() => new DataTable('#myTable'), 500)
      }
    })()
    return () => clearTimeout(time)
  }, [FaqStateData.length])

  return (
    <div className='container my-3'>
      <div className="row">

        <div className="col-md-3  fadeInLeft animated" data-animation="fadeInLeft" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <AdminSlidebar />
        </div>

        <div className="col-md-9  fadeInRight animated" data-animation="fadeInRight" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <h5 className='bg-primary p-2 fs-4 text-light text-center rounded-top'>Faq <Link to="/admin/faq/create"><i className='bi bi-plus text-light float-end fs-3'></i></Link></h5>
          <div className="table-responsive">
            <table className='table bg-sky table-bordered text-dark' id='myTable'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Question</th>
                  <th>Answer</th>
                  <th>Status</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => {
                  return <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.question}</td>
                    <td>{item.answer}</td>
                    <td>{item.status ? "Active" : "Inactive"}</td>
                    <td><button className='btn btn-primary'><Link to={`/admin/faq/update/${item.id}`}><i className='bi bi-pencil text-light'></i></Link></button></td>
                    <td><button className='btn btn-primary' onClick={() => deleteRecord(item.id)}><i className='bi bi-x'></i></button></td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}