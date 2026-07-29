import { useDispatch, useSelector } from "react-redux"
import useSetting from "../Hooks/useSetting"
import { useEffect } from "react"
import { getService } from "../Redux/ActionCreator/ServiceActionCreators"

export default function Service() {
    const settingData = useSetting()
    let ServiceStateData = useSelector(state => state.ServiceStateData)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getService())
    })
    return (
        <div className="container-fluid service py-5">
            <div className="container-fluid py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
                    <h1 className="display-5 text-capitalize mb-3">{settingData.siteName} <span className="text-primary">Services</span></h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                    </p>
                </div>
                <div className="row g-4">
                    {ServiceStateData.filter(x => x.status).map((item) => {
                        return <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s" key={item.id}>
                            <div className="service-item p-4">
                                <div className="service-icon mb-4">
                                    <span className="fs-1 text-light" dangerouslySetInnerHTML={{ __html: item.icon }} />
                                </div>
                                <h5 className="mb-3">{item.name}</h5>
                                <p className="mb-0">{item.shortDescription}</p>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    )
}
