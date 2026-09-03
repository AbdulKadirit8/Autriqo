import { useState } from "react";
import Breadcrum from "../../Component/Breadcrum";
import { useNavigate } from "react-router-dom";
import TextValidators from "../../FormValidators/TextValidators";
import { Link } from "react-router-dom";

export default function SignupPage() {

    let [data, setData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        cpassword: '',
    })
    let [errorMessage, setErrorMessage] = useState({
        name: 'Name field is mendatory.',
        username: 'Username field is mendatory.',
        email: 'Email field is mendatory.',
        phone: 'Phone field is mendatory.',
        password: 'Password field is mendatory.',
        cpassword: 'Confirm Password field is mendatory.',
    })

    let [show, setShow] = useState(false)
    let navigate = useNavigate()

    function getInputData(e) {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
        setErrorMessage({ ...errorMessage, [name]: TextValidators(e) })
    }

    async function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")
        if (error) {
            setShow(true)
        }
        else if (data.password !== data.cpassword) {
            setErrorMessage({ ...errorMessage, password: "Password and confirm Password Does't Matched" })
            setShow(true)
        }
        else {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
            response = await response.json()
            
            let item = response.find(x => x.username?.toLocaleLowerCase() === data.username?.toLocaleLowerCase() || x.email?.toLocaleLowerCase() === data.email?.toLocaleLowerCase())
            if (item) {
                setErrorMessage({
                    ...errorMessage,
                    username: item.username?.toLocaleLowerCase() === data.username?.toLocaleLowerCase() ? "Username alredy taken" : '',
                    email: item.email?.toLocaleLowerCase() === data.email?.toLocaleLowerCase() ? "Email alredy taken" : '',
                })
                setShow(true)
            }
            else {
                item = {
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    password: data.password,
                    role: "User",
                    status: true,
                }
                let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(item)
                })
                response = await response.json()
                navigate("/login")
            }
        }
    }
    return (
        <>
            <Breadcrum title={"Create Account"} />
            <div className="container my-3">
                <div className="col-xl-8 col-lg-9 col-md-10 col-sm-11 m-auto">
                    <h5 className='bg-primary p-2 text-light text-center rounded'>Create Your Free Account</h5>
                    <form onSubmit={postData}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Name*</label>
                                <input type="text" name="name" onChange={getInputData} placeholder="Full Name" className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-dark'}`} />
                                {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
                            </div>

                            <div className="col-md-6 mb-3">
                                <label>Username*</label>
                                <input type="text" name="username" onChange={getInputData} placeholder="Username" className={`form-control ${show && errorMessage.username ? 'border-danger' : 'border-dark'}`} />
                                {show && errorMessage.username ? <p className='text-danger'>{errorMessage.username}</p> : null}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Phone*</label>
                                <input type="text" name="phone" onChange={getInputData} placeholder="Phone Number" className={`form-control ${show && errorMessage.phone ? 'border-danger' : 'border-dark'}`} />
                                {show && errorMessage.phone ? <p className='text-danger'>{errorMessage.phone}</p> : null}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Email*</label>
                                <input type="text" name="email" onChange={getInputData} placeholder="Email" className={`form-control ${show && errorMessage.email ? 'border-danger' : 'border-dark'}`} />
                                {show && errorMessage.email ? <p className='text-danger'>{errorMessage.email}</p> : null}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Password*</label>
                                <input type="text" name="password" onChange={getInputData} placeholder="Password" className={`form-control ${show && errorMessage.password ? 'border-danger' : 'border-dark'}`} />
                                {show && errorMessage.password ? <p className='text-danger'>{errorMessage.password}</p> : null}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Confirm Password*</label>
                                <input type="text" name="cpassword" onChange={getInputData} placeholder="Confirm Password" className={`form-control ${show && errorMessage.cpassword ? 'border-danger' : 'border-dark'}`} />
                                {show && errorMessage.cpassword ? <p className='text-danger'>{errorMessage.cpassword}</p> : null}
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary  w-100">Submit</button>
                            </div>
                        </div>
                    </form>
                    <div>
                        <Link to="/login">Already Have An Account? Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
