import { useDispatch, useSelector } from "react-redux";
import { setShowSlider } from "../../Redux/Reducer/SliderReducer";
import { useEffect, useState } from "react";

export default function Profile() {
    const showSlider = useSelector(
        state => state.slider.showSlider
    );
    let [user, setUser] = useState({})

    useEffect(() => {
        (async () => {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${localStorage.getItem("userid")}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
            response = await response.json()
            setUser({ ...response })
        })()
    }, [])
    let dispatch = useDispatch()
    return (
        <div className={`${showSlider ? 'col-12' : 'col-md-9'} container-fluid fadeInRight animated`} data-animation="fadeInRight" data-delay="0.1s" style={{ animationDelay: "0.1s" }}>
            <h5 className="bg-primary text-light text-center p-2 fs-4 rounded-top"><i className={`bi ${showSlider ? 'bi-list' : 'bi-x-circle'} float-start fs-3 d-none d-md-inline`} onClick={() => dispatch(setShowSlider(!showSlider))}></i>Admin</h5>
            <table className="table table-bordered text-dark">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <th>Useername</th>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <th>Role</th>
                        <td>{user.role}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
