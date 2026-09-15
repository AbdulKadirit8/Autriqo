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
                        <ul className={`list-group d-flex flex-row flex-md-column`}>
                            <li className='list-group-item d-none d-md-block bg-primary text-light reounded-top'>Option</li>
                            <li className={`list-group-item flex-fill ${option === "Profile" ? 'active' : ''}`} onClick={() => setSearchParams({ option: "Profile" })}>Profile</li>
                            <li className={`list-group-item flex-fill text-nowrap ${option === "Update Profile" ? 'active' : ''}`} onClick={() => setSearchParams({ option: "Update Profile" })}>Update Profile</li>
                            <li className={`list-group-item flex-fill ${option === "Bookings" ? 'active' : ''}`} onClick={() => setSearchParams({ option: "Bookings" })}>Bookings</li>
                            <li className={`list-group-item flex-fill ${option === "Address" ? 'active' : ''}`} onClick={() => setSearchParams({ option: "Address" })}>Address</li>
                        </ul>
                    </div>
                    <div className="col-md-9 mt-3 mt-md-0">
                        <h5 className='bg-primary p-2 text-center rounded text-light'>{option}</h5>
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
