import { useSelector } from "react-redux"
import useSetting from "../Hooks/useSetting"
import { getFeature } from "../Redux/ActionCreator/FeatureActionCreators"
getFeature
export default function Feature() {
    const settingData = useSetting()
    let FeatureStateData = useSelector(state => state.FeatureStateData)
    
    return (
        <>
            <div className="container-fluid feature py-5">
                <div className="container-fluid py-5">
                    
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
                        <h1 className="display-5 text-capitalize mb-3">{settingData.siteName} <span className="text-primary">Features</span></h1>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                        </p>
                    </div>
                    <div className="row g-4 align-items-center">
                        {FeatureStateData.filter(x => x.status).map((item) => {
                            return <div className="col-xl-4 col-md-6 col-12" key={item.id}>
                                <div className="row gy-4 gx-0">
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="feature-item">
                                            <div className="feature-icon">
                                                <span className="fs-1 text-light" dangerouslySetInnerHTML={{ __html: item.icon }} />
                                            </div>
                                            <div className="ms-4">
                                                
                                                <h5 className="mb-3">{item.name}</h5>
                                                <p className="mb-0">{item.shortDescription}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
