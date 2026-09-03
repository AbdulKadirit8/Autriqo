import { useDispatch, useSelector } from "react-redux";
import { setShowSlider } from "../../Redux/Reducer/SliderReducer";

export default function Profile() {
    const showSlider = useSelector(
    state => state.slider.showSlider
  );
  let dispatch =useDispatch()
    return (
        <div className={`${showSlider ? 'col-12' : 'col-md-9'} container-fluid fadeInRight animated`} data-animation="fadeInRight" data-delay="0.1s" style={{ animationDelay: "0.1s" }}>
            <h5 className="bg-primary text-light text-center p-2 fs-4 rounded-top"><i className={`bi ${showSlider ? 'bi-list' : 'bi-x-circle'} float-start fs-3 d-none d-md-inline`} onClick={() => dispatch(setShowSlider(!showSlider))}></i>Admin</h5>
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
    )
}
