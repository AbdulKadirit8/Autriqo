import { Link } from 'react-router-dom'
import AdminSlidebar from '../../../Component/Admin/AdminSlidebar'

export default function AdminCategoryPage() {
  return (
    <div className='container my-3'>
      <div className="row">
        
        <div className="col-md-3  fadeInLeft animated" data-animation="fadeInLeft" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <AdminSlidebar/>
        </div>
        
        <div className="col-md-9  fadeInRight animated" data-animation="fadeInRight" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
          <h5 className='bg-primary p-2 fs-4 text-light text-center rounded-top'>Category <Link to="/admin/category/create"><i className='bi bi-plus text-light float-end fs-3'></i></Link></h5>
        </div>
      </div>
    </div>
  )
}