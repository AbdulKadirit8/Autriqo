import { Link } from "react-router-dom"
export default function AdminSlidebar() {
    return (
        <>
            <div className="list-group">
                <Link to="/" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-house-door"></i><span className="float-end">Home</span></Link>
                <Link to="/admin/category" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-list-check"></i><span className="float-end">Category</span></Link>
                <Link to="/admin/brand" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-list"></i><span className="float-end">Brand</span></Link>
                <Link to="/admin/car" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 fas fa-car-alt"></i><span className="float-end">Car</span></Link>
                <Link to="/admin/feature" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-tag"></i><span className="float-end">Feature</span></Link>
                <Link to="/admin/seervice" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-tags"></i><span className="float-end">Service</span></Link>
                <Link to="/admin/faq" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-question-circle"></i><span className="float-end">Faq</span></Link>
                <Link to="/admin/setting" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-gear"></i><span className="float-end">Setting</span></Link>
                <Link to="/admin/newslatter" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-envelope"></i><span className="float-end">Newslatter</span></Link>
                <Link to="/admin/contact" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-telephone"></i><span className="float-end">Contact Us</span></Link>
                <Link to="/admin/user" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-people"></i><span className="float-end">User</span></Link>
            </div>
        </>
    )
}
