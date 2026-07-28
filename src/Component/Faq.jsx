import { useSelector } from "react-redux"

export default function Faq() {
    let FaqStateData = useSelector(state => state.FaqStateData)
    return (
        <div className="accordion container-fluid mt-5" id="accordionExample">
            {FaqStateData.filter(x => x.status).map(item => {
                return <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            {item.question}
                        </button>
                    </h2>
                    <div id={`collapse${item.id}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {item.answer}
                        </div>
                    </div>
                </div>
            })}

        </div>
    )
}
