import { useState } from "react";
import Breadcrum from "../../Component/Breadcrum";
import { useNavigate } from "react-router-dom";
import TextValidators from "../../FormValidators/TextValidators";
import { Link } from "react-router-dom";

export default function SignupPage() {

    let [data, setData] = useState({
        name: '',
        username: '',
    })
    let [errorMessage, setErrorMessage] = useState("")

    let [show, setShow] = useState(false)
    let navigate = useNavigate()

    function getInputData(e) {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
        setShow(true)
    }

    async function postData(e) {
        e.preventDefault()
        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()

        let item = response.find(x => x.username?.toLocaleLowerCase() === data.username?.toLocaleLowerCase() || x.email?.toLocaleLowerCase() === data.username?.toLocaleLowerCase())

        if (item) {
            if (item.status === false) {
                setShow(true)
                setErrorMessage("your cc blocked")
            }
            else {
                localStorage.setItem("login", true)
                localStorage.setItem("name", item.name)
                localStorage.setItem("userid", item.id)
                localStorage.setItem("role", item.role)
                if (item.role === "User")
                    navigate("/profile")
                else
                    navigate("/admin")
            }


        }
        else {
            setShow(true)
            setErrorMessage("Invalid UserName And Password")
        }
    }
    return (
        <>
            <Breadcrum title={"Login Account"} />
            <div className="container my-3">
                <div className="col-xl-7 col-lg-8 col-md-9 col-sm-10 m-auto">
                    <h5 className='bg-primary p-2 text-light text-center rounded'>Create Your Free Account</h5>
                    <form onSubmit={postData}>
                        <div className="row">

                            <div className="col-12 mb-3">
                                <label>Username*</label>
                                <input type="text" name="username" onChange={getInputData} placeholder="Username" className={`form-control ${show ? 'border-danger' : 'border-dark'}`} />
                                {show ? <p className='text-danger'>{errorMessage}</p> : null}
                            </div>

                            <div className="col-12 mb-3">
                                <label>Password*</label>
                                <input type="text" name="password" onChange={getInputData} placeholder="Password" className={`form-control ${show ? 'border-danger' : 'border-dark'}`} />

                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary  w-100">Login</button>
                            </div>
                        </div>
                    </form>
                    <div className="d-flex justify-content-between">
                        <Link to="/#">Forgate Password</Link>
                        <Link to="/signup">Doen't Have An Account? Create</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
