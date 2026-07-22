import useSetting from "../Hooks/useSetting"
import { Link } from "react-router-dom"
export default function Footer() {
    const settingData = useSetting()
    return (
        <>
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">

                <div className="container-fluid py-5">
                    <div className="row g-5">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className=" d-flex flex-column">
                                <div className="footer-item">
                                    <h4 className="text-white mb-4">{settingData.siteName}</h4>
                                    {/* <h1 className="display-6 text-logo-e"><img src="/public/images/logoicon.png" style={{ maxWidth: 140 }} className="pb-2 pe-2" alt="Logo Icon" /></h1> */}
                                    <p className="mb-3">{settingData.siteName} delivers premium luxury car rentals with elegance, comfort, and performance. Drive exceptional vehicles and enjoy a seamless experience tailored to sophisticated travelers.</p>
                                </div>
                                <div className="position-relative">
                                    <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                                    <button type="button" className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 col-6">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Quick Links</h4>
                                <Link to="/" className="nav-item nav-link ">Home</Link>
                                <Link to="/about" className="nav-item nav-link">About</Link>
                                <Link to="/service" className="nav-item nav-link">Service</Link>
                                <Link to="/car" className="nav-item nav-link">Our Cars</Link>
                                <Link to="/faq" className="nav-item nav-link">FAQ</Link>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 col-6">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Quick Links</h4>
                                <Link to="/feature" className="nav-item nav-link">Feature</Link>
                                <Link to="/testimonial" className="nav-item nav-link">Testimonial</Link>
                                <Link to="/faq" className="nav-item nav-link">FAQ</Link>
                                <Link to="/tc" className="nav-item nav-link">Terms & Conditions</Link>
                                <Link to="/privacy-policy" className="nav-item nav-link">Privacy Policy</Link>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Contact Info</h4>
                                <a href="#"><i className="fa fa-map-marker-alt me-2"></i>{settingData.address}</a>
                                <a href={`mailto:${settingData.email}`}><i className="fas fa-envelope me-2"></i> {settingData.email}</a>
                                <a href={`tel:${settingData.phone}`}><i className="fas fa-phone-alt me-2"></i>{settingData.phone}</a>
                                <a href={`https://wa.me/91${settingData.whatsapp}?text=Hello%20${settingData.siteName}%20I%20am%20interested`} className="mb-3"><i className="bi bi-whatsapp me-2"></i>{settingData.whatsapp}</a>
                                <div className="d-flex">
                                    {/* <a className="btn btn-secondary btn-md-square rounded-circle me-1" href={settingData.whatsapp}><i className="fab fa-whatsapp text-white"></i></a> */}
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-3" href={settingData.youtube}><i className="fab fa-youtube text-white"></i></a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-3" href={settingData.facebook}><i className="fab fa-facebook-f text-white"></i></a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-3" href={settingData.twitter}><i className="fab fa-twitter text-white"></i></a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-3" href={settingData.instagram}><i className="fab fa-instagram text-white"></i></a>
                                    <a className="btn btn-secondary btn-md-square rounded-circle me-0" href={settingData.linkedin}><i className="fab fa-linkedin-in text-white"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
