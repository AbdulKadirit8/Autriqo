
import { Link } from 'react-router-dom'

export default function CarCard({ item }) {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 12;
        const rotateX = ((centerY - y) / centerY) * 12;

        card.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
    `;
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform =
            "rotateX(0deg) rotateY(0deg) scale(1)";
    };
    return (
        <div className="categories-item border border-0 p-2">
            <div
                className="categories-item-inner card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className="categories-img rounded-top">
                    <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic[0]}`} className="img-fluid w-100 rounded-top" alt="" />
                </div>
                <div className="categories-content rounded-bottom p-4">
                    <h5 >{item.name}</h5>
                    <div className="mb-4">
                        <h6 className="bg-white text-primary rounded-pill py-2 mb-0"><del>&#8377;{item.baseRentAmount}</del> <span className='text-secondary'>&#8377;{item.finalRentAmount}/Day</span> <small><sup>{item.discount}% Off</sup></small></h6>
                    </div>
                    <div className="row gy-2 gx-0 mb-4">
                        <div className="col-5 d-flex align-items-center">
                            <i className="fa fa-users text-dark"></i>
                            <span className="text-body text-start ms-1">{item.seatingCapacity} Seat</span>
                        </div>
                        <div className="col-7 d-flex align-items-center">
                            <i className="fa fa-car text-dark"></i>
                            <span className="text-body text-start ms-1">{item.drivingMode}</span>
                        </div>
                        <div className="col-5 d-flex align-items-center">
                            <i className="fa fa-gas-pump text-dark"></i>
                            <span className="text-body text-start ms-1">{item.type}</span>
                        </div>
                        <div className="col-7 d-flex align-items-center">
                            <i className="fa-solid fa-address-card text-dark"></i>
                            <span className="text-body text-start ms-1">{item.registrationNumber}</span>
                        </div>
                    </div>
                    <Link to={`/car/${item.id}`} className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</Link>
                </div>
            </div>
        </div>
    )
}