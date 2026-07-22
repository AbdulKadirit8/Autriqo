import { Link, NavLink } from "react-router-dom"
export default function AdminSlidebar() {
    return (
        <>
            {/* <div className="list-group">
                <Link to="/" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-house-door"></i><span className="float-end">Home</span></Link>
                <Link to="/admin/category" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-list-check"></i><span className="float-end">Category</span></Link>
                <Link to="/admin/brand" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-list"></i><span className="float-end">Brand</span></Link>
                <Link to="/admin/car" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 fas fa-car-alt"></i><span className="float-end">Car</span></Link>
                <Link to="/admin/feature" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-tag"></i><span className="float-end">Feature</span></Link>
                <Link to="/admin/service" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-tags"></i><span className="float-end">Service</span></Link>
                <Link to="/admin/faq" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-question-circle"></i><span className="float-end">Faq</span></Link>
                <Link to="/admin/setting" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-gear"></i><span className="float-end">Setting</span></Link>
                <Link to="/admin/newslatter" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-envelope"></i><span className="float-end">Newslatter</span></Link>
                <Link to="/admin/contact" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-telephone"></i><span className="float-end">Contact Us</span></Link>
                <Link to="/admin/user" className="mb-1 list-group-item list-group-item-action active" aria-current="true"><i className="fs-5 bi bi-people"></i><span className="float-end">User</span></Link>
            </div> */}
            {/* Mobile Menu */}
<div className="d-flex d-md-none overflow-auto gap-2 pb-2 mobile-scroll pt-2">

    <NavLink
        to="/"
        className={({ isActive }) =>
            `list-group-item text-center border-0 rounded-1 px-2 py-2
            ${isActive ? "mobile-active" : "mobile-menu"}`
        }>
        <i className="fs-5 bi bi-house-door"></i>
        <div className="fs-10">Home</div>
    </NavLink>

    <NavLink
        to="/admin/category"
        className={({ isActive }) =>
            `list-group-item text-center border-0 rounded-1 px-2 py-2
            ${isActive ? "mobile-active" : "mobile-menu"}`
        }>
        <i className="fs-5 bi bi-list-check"></i>
        <div className="fs-10">Category</div>
    </NavLink>

    <NavLink
        to="/admin/brand"
        className={({ isActive }) =>
            `list-group-item text-center border-0 rounded-1 px-2 py-2
            ${isActive ? "mobile-active" : "mobile-menu"}`
        }>
        <i className="fs-5 bi bi-list"></i>
        <div className="fs-10">Brand</div>
    </NavLink>

    <NavLink
        to="/admin/car"
        className={({ isActive }) =>
            `list-group-item text-center border-0 rounded-1 px-2 py-2
            ${isActive ? "mobile-active" : "mobile-menu"}`
        }>
        <i className="fs-5 fas fa-car-alt"></i>
        <div className="fs-10">Car</div>
    </NavLink>

    <NavLink
        to="/admin/feature"
        className={({ isActive }) =>
            `list-group-item text-center border-0 rounded-1 px-2 py-2
            ${isActive ? "mobile-active" : "mobile-menu"}`
        }>
        <i className="fs-5 bi bi-tag"></i>
        <div className="fs-10">Feature</div>
    </NavLink>

    <NavLink
        to="/admin/service"
        className={({ isActive }) =>
            `list-group-item text-center border-0 rounded-1 px-2 py-2
            ${isActive ? "mobile-active" : "mobile-menu"}`
        }>
        <i className="fs-5 bi bi-tags"></i>
        <div className="fs-10">Service</div>
    </NavLink>

    <NavLink
        to="/admin/faq"
        className={({ isActive }) =>
            `list-group-item text-center border-0 rounded-1 px-2 py-2
            ${isActive ? "mobile-active" : "mobile-menu"}`
        }>
        <i className="fs-5 bi bi-question-circle"></i>
        <div className="fs-10">FAQ</div>
    </NavLink>

    <NavLink
        to="/admin/setting"
        className={({ isActive }) =>
            `list-group-item text-center border-0 rounded-1 px-2 py-2
            ${isActive ? "mobile-active" : "mobile-menu"}`
        }>
        <i className="fs-5 bi bi-gear"></i>
        <div className="fs-10">Setting</div>
    </NavLink>

    <NavLink
        to="/admin/newslatter"
        className={({ isActive }) =>
            `list-group-item text-center border-0 rounded-1 px-2 py-2
            ${isActive ? "mobile-active" : "mobile-menu"}`
        }>
        <i className="fs-5 bi bi-envelope"></i>
        <div className="fs-10">Newsletter</div>
    </NavLink>

    <NavLink
        to="/admin/contact"
        className={({ isActive }) =>
            `list-group-item text-center border-0 rounded-1 px-2 py-2
            ${isActive ? "mobile-active" : "mobile-menu"}`
        }>
        <i className="fs-5 bi bi-telephone"></i>
        <div className="fs-10">Contact</div>
    </NavLink>

    <NavLink
        to="/admin/user"
        className={({ isActive }) =>
            `list-group-item text-center border-0 rounded-1 px-2 py-2
            ${isActive ? "mobile-active" : "mobile-menu"}`
        }>
        <i className="fs-5 bi bi-people"></i>
        <div className="fs-10">User</div>
    </NavLink>

</div>


{/* Desktop Sidebar */}

<div className="d-none d-md-block">

    <div className="list-group">

        <Link to="/" className="list-group-item list-group-item-action active mb-1">
            <i className="fs-5 bi bi-house-door pe-3"></i>
            Home
        </Link>

        <Link to="/admin/category" className="list-group-item list-group-item-action active mb-1">
            <i className="fs-5 bi bi-list-check pe-3"></i>
            Category
        </Link>

        <Link to="/admin/brand" className="list-group-item list-group-item-action active mb-1">
            <i className="fs-5 bi bi-list pe-3"></i>
            Brand
        </Link>

        <Link to="/admin/car" className="list-group-item list-group-item-action active mb-1">
            <i className="fs-5 fas fa-car-alt pe-3"></i>
            Car
        </Link>

        <Link to="/admin/feature" className="list-group-item list-group-item-action active mb-1">
            <i className="fs-5 bi bi-tag pe-3"></i>
            Feature
        </Link>

        <Link to="/admin/service" className="list-group-item list-group-item-action active mb-1">
            <i className="fs-5 bi bi-tags pe-3"></i>
            Service
        </Link>

        <Link to="/admin/faq" className="list-group-item list-group-item-action active mb-1">
            <i className="fs-5 bi bi-question-circle pe-3"></i>
            FAQ
        </Link>

        <Link to="/admin/setting" className="list-group-item list-group-item-action active mb-1">
            <i className="fs-5 bi bi-gear pe-3"></i>
            Setting
        </Link>

        <Link to="/admin/newslatter" className="list-group-item list-group-item-action active mb-1">
            <i className="fs-5 bi bi-envelope pe-3"></i>
            Newsletter
        </Link>

        <Link to="/admin/contact" className="list-group-item list-group-item-action active mb-1">
            <i className="fs-5 bi bi-telephone pe-3"></i>
            Contact Us
        </Link>

        <Link to="/admin/user" className="list-group-item list-group-item-action active mb-1">
            <i className="fs-5 bi bi-people pe-3"></i>
            User
        </Link>

    </div>

</div>
        </>
    )
}
