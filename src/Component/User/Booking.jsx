import { useEffect, useState } from "react"
import { getBooking } from "../../Redux/ActionCreator/BookingActionCreators"
import { useDispatch, useSelector } from "react-redux"

export default function Booking() {
    let [data, setData] = useState([])
    let dispatch = useDispatch()
    let BookingStateData = useSelector(state => state.BookingStateData)

    useEffect(() => {
        (() => {
            dispatch(getBooking())
            if (BookingStateData.length) {
                setData(BookingStateData.filter(x => x.user === localStorage.getItem("userid")))
            }
        })()
    }, [BookingStateData.length])
    return (
        <>
            {data.map((item, index) => {
                return <div className="card p-3 my-3" key={index}>
                    <table className="border table table-bordered">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{item.carName}</td>
                            </tr>
                            <tr>
                                <th>Registration Number</th>
                                <td>{item.carRegistrationNumber}</td>
                            </tr>
                            <tr>
                                <th>Rent/Day</th>
                                <td>{item.carRentPrice}</td>
                            </tr>
                            <tr>
                                <th>Booking Date From</th>
                                <td>{new Date(item.fromDate).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <th>To</th>
                                <td>{(()=>{
                                    let fromDate = new Date(item.fromDate)
                                    fromDate.setDate(fromDate.getDate() + Number(item.days))
                                    return fromDate.toLocaleString()
                                })()}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            })}
        </>
    )
}
