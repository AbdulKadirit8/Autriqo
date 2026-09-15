
import { useDispatch, useSelector } from "react-redux";


import AdminSlidebar from "../../Component/Admin/AdminSlidebar";

import Profile from "../../Component/User/Profile";
import { setShowSlider } from "../../Redux/Reducer/SliderReducer";

export default function AdminHomePge() {
    let dispatch =useDispatch()
    const showSlider = useSelector(
        state => state.slider.showSlider
    );

    return (
        <div className="container-fluid my-3">
            <div className="row">
                <div className={`${showSlider ? 'd-md-none' : ''} col-md-3 fadeInLeft animated`} data-animation="fadeInLeft" data-delay="0.1s" style={{ animationDelay: "0.1s" }}>
                    <AdminSlidebar />
                </div>
                <div className={`${showSlider ? 'col-12' : 'col-md-9'}  fadeInRight animated`} data-animation="fadeInRight" data-delay="0.1s" style={{ animationDelay: "0.1s" }}>
                    <h5 className="bg-primary text-light text-center p-2 fs-4 rounded-top"><i className={`bi ${showSlider ? 'bi-list' : 'bi-x-circle'} float-start fs-3 d-none d-md-inline`} onClick={() => dispatch(setShowSlider(!showSlider))}></i>Admin profile</h5>
                    
                <Profile />
                </div>
            </div>
        </div>
    )
}
