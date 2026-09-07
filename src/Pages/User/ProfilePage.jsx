import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Breadcrum from "../../Component/Breadcrum";
import Profile from "../../Component/User/Profile";
import Booking from "../../Component/User/Booking"
import Address from "../../Component/User/Address";
import UpdateProfile from "../../Component/User/UpdateProfile"
export default function ProfilePage() {
    let [option, setOption] = useState("Profile")
    let [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        (() => {
            setOption(searchParams.get("option") ?? "Profile")
        })()
    }, [searchParams])
    return (
        <>
            <Breadcrum title="Your Profile" />

            <div className="container my-3">
                <div className="row">
                    <div className="col-md-3">
                        <ul className="list-group">
                            <li className='list-group-item bg-primary text-light reounded-top'>Option</li>
                            <li className={`list-group-item ${option === "Profile" ? 'active' : ''}`} onClick={() => setSearchParams({ option: "Profile" })}>Profile</li>
                            <li className={`list-group-item ${option === "Update Profile" ? 'active' : ''}`} onClick={() => setSearchParams({ option: "Update Profile" })}>Update Profile</li>
                            <li className={`list-group-item ${option === "Bookings" ? 'active' : ''}`} onClick={() => setSearchParams({ option: "Bookings" })}>Bookings</li>
                            <li className={`list-group-item ${option === "Address" ? 'active' : ''}`} onClick={() => setSearchParams({ option: "Address" })}>Address</li>
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary p-2 text-center  text-light'>{option}</h5>
                        {option === "Profile" ? <Profile /> : null}
                        {option === "Update Profile" ? <UpdateProfile setSearchParams={setSearchParams} /> : null}
                        {option === "Bookings" ? <Booking /> : null}
                        {option === "Address" ? <Address /> : null}
                    </div>

                </div>
            </div>
        </>
    )
}
