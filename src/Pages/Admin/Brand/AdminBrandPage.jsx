import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBrand, getBrand } from '../../../Redux/ActionCreator/BrandActionCreators'
import { useEffect, useState } from 'react'

import AdminSlidebar from '../../../Component/Admin/AdminSlidebar'

import DataTable from 'datatables.net-dt'
import "datatables.net-dt/css/dataTables.dataTables.min.css"

export default function AdminBrandPage() {
  let [data, setData] = useState([])
  let BrandStateData = useSelector(state => state.BrandStateData)
  let dispatch = useDispatch()

  function deleteRecord(id) {
    if (window.confirm("Are You Sure You Want To Delete Tha Record")) {
      dispatch(deleteBrand({ id: id }))
      setData(data.filter(x => x.id !== id))
    }
  }
  //   let time = (() => {
  //     dispatch(getBrand())
  //     if (BrandStateData.length) {
  //       let item = BrandStateData.find(x => x.id === id)
  //       if (item) {
  //         setData({ ...data, ...item })
  //         return setTimeout(() => new DataTable('#myTable'), 500)
  //       }
  //     }
  //   })()
  //   return () => clearTimeout(time)
  // }, [BrandStateData.length])
  useEffect(() => {
    let time = (() => {
      dispatch(getBrand())
      if (BrandStateData.length) {
        setData(BrandStateData)
        return setTimeout(() => new DataTable('#myTable'), 500)
      }
    })()
    return () => clearTimeout(time)
  }, [BrandStateData.length])

  return (
    <div className='container my-3'>
      <div className="row">

        <div className="col-md-3  fadeInLeft animated" data-animation="fadeInLeft" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <AdminSlidebar />
        </div>

        <div className="col-md-9  fadeInRight animated" data-animation="fadeInRight" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <h5 className='bg-primary p-2 fs-4 text-light text-center rounded-top'>Brand <Link to="/admin/brand/create"><i className='bi bi-plus text-light float-end fs-3'></i></Link></h5>
          <div className="table-responsive">
            <table className='table bg-sky table-bordered text-dark' id='myTable'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Pic</th>
                  <th>Status</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => {
                  return <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`}>
                        <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} alt="Brand Image" height={60} />
                      </Link>
                    </td>
                    <td>{item.status ? "Active" : "Inactive"}</td>
                    <td><button className='btn btn-primary'><Link to={`/admin/brand/update/${item.id}`}><i className='bi bi-pencil text-light'></i></Link></button></td>
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