import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCar, getCar } from '../../../Redux/ActionCreator/CarActionCreators'
import { useEffect, useState } from 'react'

import AdminSlidebar from '../../../Component/Admin/AdminSlidebar'

import DataTable from 'datatables.net-dt'
import "datatables.net-dt/css/dataTables.dataTables.min.css"
import { setShowSlider } from '../../../Redux/Reducer/SliderReducer'

export default function AdminCarPage() {
  const showSlider = useSelector(
    state => state.slider.showSlider
  );
  let [data, setData] = useState([])
  

  let CarStateData = useSelector(state => state.CarStateData)
  let dispatch = useDispatch()

  function deleteRecord(id) {
    if (window.confirm("Are You Sure You Want To Delete Tha Record")) {
      dispatch(deleteCar({ id: id }))
      setData(data.filter(x => x.id !== id))
    }
  }
  //   let time = (() => {
  //     dispatch(getCar())
  //     if (CarStateData.length) {
  //       let item = CarStateData.find(x => x.id === id)
  //       if (item) {
  //         setData({ ...data, ...item })
  //         return setTimeout(() => new DataTable('#myTable'), 500)
  //       }
  //     }
  //   })()
  //   return () => clearTimeout(time)
  // }, [CarStateData.length])

  useEffect(() => {
    let time = (() => {
      dispatch(getCar())
      if (CarStateData.length) {
        setData(CarStateData)
        return setTimeout(() => new DataTable('#myTable'), 500)
      }
    })()
    return () => clearTimeout(time)
  }, [CarStateData.length])

  return (
    <div className='container-fluid my-3'>
      <div className="row">

        {/* <div className="col-md-3 fadeInLeft animated" data-animation="fadeInLeft" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <AdminSlidebar />
        </div> */}
        <div className={`${showSlider ? 'd-md-none' : ''} col-md-2 fadeInLeft animated`} data-animation="fadeInLeft" data-delay="0.1s" style={{ animationDelay: "0.1s" }}>
          <AdminSlidebar />
        </div>
        <div className={`${showSlider ? 'col-12' : 'col-md-9'}  fadeInRight animated`} data-animation="fadeInRight" data-delay="0.1s" style={{ animationDelay: "0.1s" }}>
          <h5 className='bg-primary p-2 fs-4 text-light text-center rounded-top'><i className={`bi ${showSlider ? 'bi-list' : 'bi-x-circle'} float-start fs-3 d-none d-md-inline`} onClick={() => dispatch(setShowSlider(!showSlider))}></i> Car <Link to="/admin/car/create"><i className='bi bi-plus text-light float-end fs-3'></i></Link></h5>
          <div className="table-responsive">
            <table className='table bg-sky table-bordered text-dark' id='myTable'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Registration Number</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Driving Mode</th>
                  <th>Driver Required</th>
                  <th>Address</th>
                  <th>Base Price</th>
                  <th>Discount</th>
                  <th>Final Price</th>
                  <th>Pic</th>
                  <th>Status</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.brand}</td>
                    <td>{item.registrationNumber}</td>
                    <td>{item.category}</td>
                    <td>{item.type}</td>
                    <td>{item.drivingMode}</td>
                    <td>{item.driver ? "Yes" : "No"}</td>
                    <td>{item.city}</td>
                    <td>{item.baseRentAmount}</td>
                    <td>{item.discount}</td>
                    <td>{item.finalRentAmount}</td>
                    <td>
                      <div style={{ width: 270 }}>
                        {item.pic?.map((item, index) => {
                          return <Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item}`} target='_blank' key={index}>
                            <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item}`} className='m-1' width={80} alt="" />
                          </Link>
                        })}
                      </div>
                    </td>
                    <td>{item.status ? "Active" : "Inactive"}</td>
                    <td><button className='btn btn-primary'><Link to={`/admin/car/update/${item.id}`}><i className='bi bi-pencil text-light'></i></Link></button></td>
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