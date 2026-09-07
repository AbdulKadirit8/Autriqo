import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

export default function Address() {
    let [user, setUser] = useState({})
    let [address, setAddress] = useState("")
    let [option, setOption] = useState({
        type: "Create",
        showModal: false
    })

    function create() {
        setOption({
            type: "Create",
            showModal: true
        })
    }

    function update(index) {
        setOption({
            type: "Update",
            showModal: true,
            index: index
        })
        setAddress(user.address[index])
    }

    async function deleteRecord(index) {
        if (window.confirm("Are You Sure You Want To Delete That Record : ")) {
            user.address.splice(index, 1)
            setUser({ ...user })
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${localStorage.getItem("userid")}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ ...user })
            })
            response = await response.json()
        }
    }

    async function postData(e) {
        e.preventDefault()
        let addressData = user.address ? user.address : []
        if (option.type === "Create")
            addressData.push(address)
        else
            addressData[option.index] = address

        let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${localStorage.getItem("userid")}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ ...user, address: addressData })
        })
        response = await response.json()
        setUser({ ...user, address: addressData })

        setOption({ ...option, showModal: false })
        setAddress("")
        toast("Address Record Has Been Updated");
    }

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
    return (
        <>
            <ToastContainer />
            <div className='mb-5'>
                <button className='btn btn-primary float-end' onClick={create}>Add New Address</button>
            </div>
            <div className='mt-5'>
                {user?.address?.map((item, index) => {
                    return <div className='card p-2' key={index}>
                        <h5>{item}</h5>
                        <div className="btn-group position-absolute end-0">
                            <button className='btn btn-primary' onClick={() => update(index)}><i className='bi bi-pencil-square'></i></button>
                            <button className='btn btn-danger' onClick={() => deleteRecord(index)}><i className='bi bi-trash'></i></button>
                        </div>
                    </div>
                })}
            </div>

            <div className={`modal fade ${option.showModal ? 'show d-block' : ''}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{option.type} Address</h1>
                            <button type="button" className="btn-close" onClick={() => setOption({ ...option, showModal: false })}></button>
                        </div>
                        <form onSubmit={postData}>
                            <div className="modal-body">
                                <textarea name="address" required value={address} onChange={(e) => setAddress(e.target.value)} className='form-control border-primary' placeholder='Address...' rows={4}></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary w-100">{option.type} Address</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}