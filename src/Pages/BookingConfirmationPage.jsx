

import { Link } from 'react-router-dom'
import Breadcrum from '../Component/Breadcrum'

export default function BookingConfirmationPage() {
    return (
        <>
            <Breadcrum title="Booking Confirm"/>
            <div className="container-fluid bg-light py-5">
                <div className="container py-5 text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <i className="bi bi-check display-1 text-primary"></i>
                            <h1 className="display-1">Thank You</h1>
                            <h1 className="mb-4">Car Has Been Booked</h1>
                            <Link className="btn btn-primary rounded-pill py-3 px-5" to="/">Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}