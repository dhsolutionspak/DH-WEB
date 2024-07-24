'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Section7() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            <section className="section-box box-faqs-10">
                <div className="container">
                    <div className="box-faqs-inner">
                        <div className="text-center"> <Link className="btn btn-brand-10-sm" href="#">Frequently Asked Questions</Link>
                            <h2 className="heading-2 mb-20 mt-20">Do you have any questions?</h2>
                        </div>
                        <div className="box-faqs-inner-10">
                            <div className="accordion accordion-flush accordion-style-2" id="accordionFAQS">
                               
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne" onClick={() => handleClick(1)}>
                                        <button className={isActive.key == 1 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">What services does DH Solutions offer?
                                            </button>
                                    </h2>
                                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseOne" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">
                                            <p>DH Solutions provides a wide range of services including AI/ML solutions, web development, app development, cybersecurity services, and data science expertise.</p>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo" onClick={() => handleClick(2)}>
                                        <button className={isActive.key == 2 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Where is DH Solutions headquartered?
                                            </button>
                                    </h2>
                                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseTwo" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">DH Solutions is headquartered in Pakistan.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree" onClick={() => handleClick(3)}>
                                        <button className={isActive.key == 3 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Does DH Solutions have international offices?</button>
                                    </h2>
                                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseThree" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Yes, DH Solutions has regional offices in the USA, Canada, Saudi Arabia, Dubai, Kuwait, and Qatar.</div>
                                    </div>
                                </div>


                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour" onClick={() => handleClick(4)}>
                                        <button className={isActive.key == 4 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">When was DH Solutions founded?
                                           </button>
                                    </h2>
                                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseFour" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">DH Solutions was founded in 2020.</div>
                                    </div>
                                </div>

                            <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour" onClick={() => handleClick(5)}>
                                        <button className={isActive.key == 5 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">What is the contact email for general inquiries and support?
                                           </button>
                                    </h2>
                                    <div className={isActive.key == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseFour" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">For general inquiries and support, please contact us at hello@dhsol.net.</div>
                                    </div>
                                </div>
        

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingSix" onClick={() => handleClick(6)}>
                                        <button className={isActive.key == 6 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">How can I collaborate with DH Solutions on projects?
                                           </button>
                                    </h2>
                                    <div className={isActive.key == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseFour" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">For collaboration opportunities, please reach out to us at pr@dhsol.net.</div>
                                    </div>
                                </div>



                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingSeven" onClick={() => handleClick(7)}>
                                        <button className={isActive.key == 7 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">What industries does DH Solutions cater to?
                                           </button>
                                    </h2>
                                    <div className={isActive.key == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseFour" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">DH Solutions serves various industries including but not limited to technology, healthcare, finance, and retail.</div>
                                    </div>
                                </div>



                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingEight" onClick={() => handleClick(8)}>
                                        <button className={isActive.key == 8 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">Does DH Solutions offer customized solutions tailored to specific business needs?
                                           </button>
                                    </h2>
                                    <div className={isActive.key == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseFour" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Yes, DH Solutions specializes in providing customized solutions that are tailored to meet the unique requirements of each business.</div>
                                    </div>
                                </div>



                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingNine" onClick={() => handleClick(9)}>
                                        <button className={isActive.key == 9 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">Is DH Solutions compliant with international data protection regulations?
                                           </button>
                                    </h2>
                                    <div className={isActive.key == 9 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseFour" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">Yes, DH Solutions adheres to international standards and regulations concerning data protection and privacy.</div>
                                    </div>
                                </div>



                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTen" onClick={() => handleClick(10)}>
                                        <button className={isActive.key == 10 ? "accordion-button " : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">How does DH Solutions ensure the security of client data?
                                           </button>
                                    </h2>
                                    <div className={isActive.key == 10 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} id="flush-collapseTen" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFAQS">
                                        <div className="accordion-body">DH Solutions employs robust cybersecurity measures and follows industry best practices to ensure the security and confidentiality of client data.</div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
