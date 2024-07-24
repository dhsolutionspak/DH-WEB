
import Link from 'next/link'

export default function Section1() {
    return (
        <>

            <section className="section-box">
                <div className="banner-hero hero-3">
                    <div className="banner-inner">
                        <div className="container">
                            <h1 className="display-2 mb-25">Custom &nbsp;<span className="text-bg-brand-4">Software Development</span> Company
                                <br className="d-none d-lg-block" />in your Region</h1>
                            <p className="text-lg mb-25">Are you looking for a way to close all marketing, technical and
                                customer support<br className="d-none d-lg-block" /> tasks for your company in one place</p>
                            <div className="box-download-app justify-content-center"><Link href="#"><img src="/assets/imgs/template/clutch.png" alt="clutch" width="170" height="50" /></Link><Link href="#"><img src="/assets/imgs/template/tech-behemonth.png" alt="Behe" width="170" height="50" /></Link><Link href="#"><img src="/assets/imgs/template/Trustpilot -bg.png" alt="Behe" width="170" height="120" /></Link></div>
                        </div>
                    </div>
                </div>
                
            </section>
           
        </>
    )
}
