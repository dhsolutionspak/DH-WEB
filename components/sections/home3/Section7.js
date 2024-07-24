
import CounterUp from '@/components/elements/CounterUp'
import Link from 'next/link'

export default function Section7() {
    return (
        <>

<section className="section-box box-lead">
    <div className="container">
        <div className="box-lead-inner">
            <div className="row">
                <div className="col-lg-6 mb-30">
                    <Link className="btn btn-border-brand-4 text-linear-3" href="#">Founder/CEO Message</Link>
                    <h3 className="heading-2 neutral-0 mt-20 mb-20">Driving Innovation and Excellence</h3>
                    <p className="text-lg neutral-200 mb-35">
                    At DH Solutions, we are driven by a passion for innovation and a commitment to excellence. Since our founding in 2020, our mission has been to provide cutting-edge AI, ML, web development, app development, cybersecurity, and data science services that empower businesses to achieve their goals.
                    </p>
                    <div className="card-lead-list">
                        <div className="item-lead">
                            <div className="card-lead">
                                <div className="card-image">
                                    <img src="/assets/imgs/page/homepage3/discover.svg" alt="DH Solutions" />
                                </div>
                                <div className="card-info">
                                    <h3 className="text-22-bold">1000+</h3>
                                    <p className="text-md neutral-200">Success Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="item-lead">
                            <div className="card-lead">
                                <div className="card-image">
                                    <img src="/assets/imgs/page/homepage3/discover.svg" alt="DH Solutions" />
                                </div>
                                <div className="card-info">
                                    <h3 className="text-22-bold">500+</h3>
                                    <p className="text-md neutral-200">Happy Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-lg neutral-200">
                    We are proud to have established a global presence, with our head office in Pakistan and regional offices in the USA, Canada, Saudi Arabia, Dubai, Kuwait, and Qatar. As we continue to grow, our focus remains on delivering top-notch solutions tailored to your unique needs.
                    </p>
                    </div>
                    <div className="col-lg-6 mb-30 text-center text-lg-end">
                        <div className="box-border-linear-3 linear-3">
                            <div className="box-border-linear-3-inner"><img src="/assets/imgs/page/homepage3/img-lead.png" alt="Nivia" /></div>
                        </div>
                        <p className="mt-20">Mudassir Jaleel, CEO & Founder</p>
                    </div>
                </div>
            </div>
        </div >
            </section >
        </>
    )
}
