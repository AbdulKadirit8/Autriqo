import { useDispatch, useSelector } from "react-redux"
import useSetting from "../Hooks/useSetting"
import { useEffect } from "react"
import { getFaq } from "../Redux/ActionCreator/FaqActionCreators"

export default function Faq() {
    const settingData = useSetting()
    let FaqStateData = useSelector(state => state.FaqStateData)
    let dispatch = useDispatch()
    useEffect(() => {
dispatch(getFaq())
    })
    return (
        <div className="container-fluid Faq py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
                    <h1 className="display-5 text-capitalize mb-3">{settingData.siteName} <span className="text-primary">Faq</span></h1>
                    <p className="mb-0">Have questions about renting a car? Find clear answers to the most common queries about bookings, payments, documents, insurance, cancellations, and more. {settingData.siteName}'s FAQ section is here to help you enjoy a smooth, convenient, and worry-free rental experience.</p>
                </div>
                <div className="row g-4 align-items-center">
                    <div className="accordion" id="accordionExample">
                        {FaqStateData.filter(x => x.status).map((item, index) => {
                            return <div className="accordion-item" key={item.id}>
                                <h2 className="accordion-header" id={`heading${index}`}>
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collaps${index}`} aria-expanded="true" aria-controls={`collaps${index}`}>
                                        <strong>{item.question}</strong>
                                    </button>
                                </h2>
                                <div id={`collaps${index}`} className={`accordion-collapse collapse ${0 === index ? 'show' : ''}`} aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                    <div className="accordion-body text-dark">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
