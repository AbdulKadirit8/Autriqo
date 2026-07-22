import useSetting from "../Hooks/useSetting"


export default function Process() {
    const settingData=useSetting()
    return (
        <div className="container-fluid steps py-5">
            <div className="container-fluid py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "800px"}}>
                    <h1 className="display-5 text-capitalize text-white mb-3">{settingData.siteName}<span className="text-primary"> Process</span></h1>
                    <p className="mb-0 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="steps-item p-4 mb-4">
                            <h4>Come In Contact</h4>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!</p>
                            <div className="setps-number">01.</div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="steps-item p-4 mb-4">
                            <h4>Choose A Car</h4>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!</p>
                            <div className="setps-number">02.</div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="steps-item p-4 mb-4">
                            <h4>Enjoy Driving</h4>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!</p>
                            <div className="setps-number">03.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
