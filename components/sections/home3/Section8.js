'use client'
import Link from 'next/link'
import { useState } from "react"
export default function Section8() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>

            <section className="section-box box-preparing">
                <div className="box-preparing-inner">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="heading-2 mb-20">Explore the Versatility of Technology<br className="d-none d-lg-block" /></h2>
                            <div className="box-button-preparing">
                                <ul className="nav nav-tabs justify-content-center" role="tablist">
                                    <li onClick={() => handleOnClick(1)}><a className={activeIndex === 1 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-1" aria-selected="true">Blockchain</a></li>
                                    <li onClick={() => handleOnClick(2)}><a className={activeIndex === 2 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false">AI/ML</a></li>
                                    <li onClick={() => handleOnClick(3)}><a className={activeIndex === 3 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false">Cyber Security</a></li>
                                    <li onClick={() => handleOnClick(4)}><a className={activeIndex === 4 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false">Data Science</a></li>
                                    <li onClick={() => handleOnClick(5)}><a className={activeIndex === 5 ? "btn btn-neutral-100 active" : "btn btn-neutral-100"} data-bs-toggle="tab" role="tab" aria-controls="tab-2" aria-selected="false">Cloud Computing</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="block-group-preparing">
                            <div className="tab-content">
                                <div  className={activeIndex == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-1">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span />Why DH Solutions for Blockchain?</div>
                                            <h4 className="heading-4 mb-20">Innovative Blockchain Solutions</h4>
                                            <p className="text-lg neutral-700">At DH Solutions, we leverage cutting-edge blockchain technology to create secure, transparent, and efficient systems that revolutionize your business operations.</p>
                                    
                                            <div className="box-list-check">
                                            <h5 className="heading-6 mb-20">Key Advantages:</h5>
                                                <ul className="list-check">
                                                    <li>Enhanced Security</li>
                                                    <li>Transparency</li>
                                                    <li>Decentralization</li>
                                                    <li>Cost Efficiency</li>
                                                    <li>Smart Contracts</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={activeIndex == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-2">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-2" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span />Why DH Solutions for AI/ML?</div>
                                            <h3 className="heading-3 mb-20">Advanced AI/ML Solutions</h3>
                                            <p className="text-lg neutral-700">Our AI/ML solutions are designed to drive innovation and streamline processes, providing you with data-driven insights and automation capabilities that give you a competitive edge.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                <h5 className="heading-6 mb-20">Key Advantages:</h5>
                                                    <li>Advanced Analytics</li>
                                                    <li>Predictive Modeling</li>
                                                    <li>Automation</li>
                                                    <li>Personalization</li>
                                                    <li>Scalability</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={activeIndex == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-3">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-3" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span />Why DH Solutions for Cyber Security?</div>
                                            <h3 className="heading-3 mb-20">Robust Cybersecurity Solutions</h3>
                                            <p className="text-lg neutral-700">Protect your business with our robust cybersecurity solutions. We provide comprehensive security measures to safeguard your data and systems against evolving threats.</p>
                                            <div className="box-list-check">
                                                <ul className="list-check">
                                                <h5 className="heading-6 mb-20">Key Advantages:</h5>
                                                    <li>Threat Detection</li>
                                                    <li>Data Encryption</li>
                                                    <li>Network Security</li>
                                                    <li>Incident Response</li>
                                                    <li>Compliance</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={activeIndex == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-4">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-4" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span /> Why DH Solutions for Data Science?</div>
                                            <h3 className="heading-3 mb-20">Comprehensive Data Science Services</h3>
                                            <p className="text-lg neutral-700">DH Solutions transforms your data into actionable insights, helping you make informed decisions and drive business growth through advanced data analytics and visualization techniques.</p>
                                            <div className="box-list-check">
                                            <h5 className="heading-6 mb-20">Key Advantages:</h5>
                                                <ul className="list-check">

                                                    <li>Data Integration</li>
                                                    <li>Real-time Analytics</li>
                                                    <li>Custom Reporting</li>
                                                    <li>Predictive Analysis</li>
                                                    <li>Data Visualization</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className={activeIndex == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="tab-5">
                                    <div className="item-preparing">
                                        <div className="item-preparing-left img-5" />
                                        <div className="item-preparing-right">
                                            <div className="internet-icon"><span />Why DH Solutions for Cloud Computing?</div>
                                            <h3 className="heading-3 mb-20">Flexible Cloud Computing Services</h3>
                                            <p className="text-lg neutral-700">Our cloud computing solutions offer flexibility, scalability, and efficiency, allowing you to optimize your IT infrastructure and reduce operational costs while enhancing performance.</p>
                                            <div className="box-list-check">
                                            <h5 className="heading-6 mb-20">Key Advantages:</h5>
                                                <ul className="list-check">
                                                    <li>Scalability</li>
                                                    <li>Cost Efficiency</li>
                                                    <li>Disaster Recovery</li>
                                                    <li>Accessibility</li>
                                                    <li>Enhanced Collaboration</li>
                                                </ul>
                                            </div>
                                        </div>
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
