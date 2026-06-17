import { NavLink, Link } from "react-router-dom"
import useSetting from "../Hooks/useSetting"
export default function Navbar() {
    const settingData = useSetting()
    return (
        <>
            <div className="container-fluid topbar bg-secondary w-100">
                <div className="container">
                    <div className="row gx-0 align-items-center" style={{ height: 45 }}>
                        <div className="col-lg-10 col-6 text-center text-lg-start mb-lg-0">
                            <div className="d-flex flex-wrap">
                                <Link to={settingData.map1} className="me-4 text-light"><i className="fas fa-map-marker-alt text-light me-2"></i><span className="d-none d-xl-inline">{settingData.address}</span></Link>
                                <Link to={`tel:${settingData.phone}`} className="me-4 text-light"><i className="fas fa-phone-alt text-light me-2"></i><span className="d-none d-xl-inline">{settingData.phone}</span></Link>
                                <Link to={`mailto:${settingData.email}`} className="me-4 text-light"><i className="fas fa-envelope text-light me-2"></i><span className="d-none d-xl-inline">{settingData.email}</span></Link>
                                <Link to={`https://wa.me/91${settingData.whatsapp}?text=Hello%20${settingData.siteName}%20I%20am%20interested`} className="text-light"><i className="bi bi-whatsapp text-light me-2"></i><span className="d-none d-xl-inline">{settingData.whatsapp}</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6 text-center text-lg-end">
                            <div className="d-flex align-items-center justify-content-end">
                                <NavLink to={settingData.facebook} className=" text-light me-4"><i className="fab fa-facebook-f me-2"></i></NavLink>
                                <NavLink to={settingData.twitter} className=" text-light me-4"><i className="fab fa-twitter me-2"></i></NavLink>
                                <NavLink to={settingData.instagram} className=" text-light me-4"><i className="fab fa-instagram me-2"></i></NavLink>
                                <NavLink to={settingData.linkedin} className=" text-light me-0"><i className="fab fa-linkedin-in me-2"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link to="" className="navbar-brand p-0">
                            <h1 className="display-6 text-logo-e"><img src="/public/images/logoicon.png" style={{ maxWidth: 140 }} className="pb-2 pe-2" alt="Logo Icon" /></h1>

                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav mx-auto py-0">
                                <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
                                <NavLink to="/admin" className="nav-item nav-link ">Admin</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                                <NavLink to="/car" className="nav-item nav-link">Our Cars</NavLink>
                                <NavLink to="/faq" className="nav-item nav-link">Faq</NavLink>
                                <NavLink to="/feature" className="nav-item nav-link">Feature</NavLink>
                                <NavLink to="/testimonial" className="nav-item nav-link">Testimonial</NavLink>
                                <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>

                            </div>
                            <div className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle btn btn-primary rounded-pill py-2 px-4 text-light" data-bs-toggle="dropdown">Abdul kadir</Link>
                                <div className="dropdown-menu m-0">

                                    <Link to="/profile" className="dropdown-item">Profile</Link>
                                    <Link to="/admin" className="dropdown-item">Admin Dashboard</Link>
                                    <Link to="/order" className="dropdown-item">Our Orders</Link>
                                    <button className="dropdown-item">Logout</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
