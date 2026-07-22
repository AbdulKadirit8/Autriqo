
import { useDispatch, useSelector } from "react-redux";


import AdminSlidebar from "../../Component/Admin/AdminSlidebar";
import { setShowSlider } from "../../Redux/Reducer/SliderReducer";

export default function AdminHomePge() {
    const showSlider = useSelector(
    state => state.slider.showSlider
  );
  let dispatch=useDispatch()
    return (
        <div className="container-fluid my-3">
            <div className="row">
                <div className={`${showSlider ? 'd-none' : ''} col-md-3 fadeInLeft animated`} data-animation="fadeInLeft" data-delay="0.1s" style={{ animationDelay: "0.1s" }}>
                    <AdminSlidebar />
                </div>
                <div className={`${showSlider ? 'col-12' : 'col-md-9'}  fadeInRight animated`} data-animation="fadeInRight" data-delay="0.1s" style={{ animationDelay: "0.1s" }}>
                    <h5 className="bg-primary text-light text-center p-2 fs-4 rounded-top"><i className={`bi ${showSlider ? 'bi-list' : 'bi-x-circle'} float-start fs-3`} onClick={() => dispatch(setShowSlider(!showSlider))}></i>Admin</h5>
                    <table className="table table-bordered text-dark">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>Abdul kadir</td>
                            </tr>
                            <tr>
                                <th>Useername</th>
                                <td>Abdul.it</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>abdulkadir@gmail.com</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>8755807621</td>
                            </tr>
                            <tr>
                                <th>Role</th>
                                <td>Super Admin</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
