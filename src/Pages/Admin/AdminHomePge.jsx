import AdminSlidebar from "../../Component/Admin/AdminSlidebar";

export default function AdminHomePge() {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-3  fadeInLeft animated" data-animation="fadeInLeft" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
                    <AdminSlidebar />
                </div>
                <div className="col-md-9  fadeInRight animated" data-animation="fadeInRight" data-delay="0.5s" style={{ animationDelay: "0.5s" }}>
                    <h5 className="bg-primary text-light text-center p-2 fs-4 rounded-top">Admin</h5>
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
