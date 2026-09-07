import { NavLink, Link, useNavigate } from "react-router-dom"
import useSetting from "../Hooks/useSetting"
import { useState } from "react"
export default function Navbar() {
    let [showMenu, setShowMenu] = useState(false)
    const settingData = useSetting()
    let navigate = useNavigate()

    function logout() {
        localStorage.clear
        navigate("/login")
    }
    return (
        <>
            <div className="container-fluid topbar bg-secondary w-100">
                <div className="container-fluid">
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
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link to="" className="navbar-brand p-0">
                            <h1 className="display-6 text-logo-e"><img src="/public/images/logoicon.png" style={{ maxWidth: 140 }} className="pb-2 pe-2" alt="Logo Icon" /></h1>
                        </Link>
                        <button className="navbar-toggler" onClick={() => setShowMenu(!showMenu)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`} id="navbarCollapse">
                            <div className="navbar-nav mx-auto py-0">
                                <NavLink onClick={() => setShowMenu(false)} to="/" className="nav-item nav-link ">Home</NavLink>
                                <NavLink onClick={() => setShowMenu(false)} to="/admin" className="nav-item nav-link ">Admin</NavLink>
                                <NavLink onClick={() => setShowMenu(false)} to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink onClick={() => setShowMenu(false)} to="/service" className="nav-item nav-link">Service</NavLink>
                                <NavLink onClick={() => setShowMenu(false)} to="/car" className="nav-item nav-link">Cars</NavLink>
                                <NavLink onClick={() => setShowMenu(false)} to="/faq" className="nav-item nav-link">Faq</NavLink>
                                <NavLink onClick={() => setShowMenu(false)} to="/feature" className="nav-item nav-link">Feature</NavLink>
                                <NavLink onClick={() => setShowMenu(false)} to="/testimonial" className="nav-item nav-link">Testimonial</NavLink>
                                <NavLink onClick={() => setShowMenu(false)} to="/contact" className="nav-item nav-link">Contact</NavLink>
                            </div>

                            {localStorage.getItem("login") ?
                                <>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle btn btn-primary rounded-pill py-2 px-4 text-light" data-bs-toggle="dropdown">{localStorage.getItem("name")}</a>
                                        <div className="dropdown-menu m-0">
                                            <Link to="/profile?option=Profile" className="dropdown-item">Profile</Link>
                                            {localStorage.getItem("role") !== "User" ? <Link to="/admin" className="dropdown-item">Admin Dashboard</Link> : null}
                                            <Link to="/profile?option=Bookings" className="dropdown-item">Bookings</Link>
                                            <Link to="/profile?option=Address" className="dropdown-item">Address</Link>
                                            <button className="dropdown-item" onClick={logout}>Logout</button>
                                        </div>
                                    </div>
                                </> :
                                <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                            }
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
