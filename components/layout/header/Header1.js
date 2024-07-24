import Link from 'next/link'
import SearchForm from './SearchForm'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, topBar, headerCls, logoWhite }) {
    return (
        <>
            <header className={`header ${headerCls ? headerCls : ""} sticky-bar ${scroll ? "stick" : ""}`}>
                {topBar &&
                    <div className="top-bar">
                        <div className="container">
                            <div className="top-bar-inner">
                                <div className="box-top-bar-left"><span className="address-icon text-md">Sheridan Wyoming , USA</span>
                                </div>
                                <div className="box-top-bar-right"><a className="phone-icon text-md" href="tel:(262) 555-0131">(317)
                                    868-6123</a><a className="email-icon text-md" href="mailto:contact@nivia.com">hello@dhsol.net</a></div>
                            </div>
                        </div>
                    </div>
                }
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link className="d-flex" href="/">
                                    <img alt="DHLOGO" src={`/assets/imgs/template/${logoWhite ? "logo" : "dh-logo"}.svg`} />
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="has-children"><Link className="active" href="/index-3">Home</Link>
                                        </li>
                                        <li className="has-children"><Link href="/comming-soon">About</Link></li>
                                        <li className="has-children"><Link href="/service">Services</Link>
                                        <ul className="sub-menu">
                                                <li><Link href="/comming-soon">Custom Software</Link></li>
                                                <li><Link href="/comming-soon">AI/ML</Link></li>
                                                <li><Link href="/comming-soon">Blockchain</Link></li>
                                                <li><Link href="/comming-soon">Cyber Security</Link></li>
                                                <li><Link href="/comming-soon">Computer Vision</Link></li>
                                                <li><Link href="/comming-soon">Data Science</Link></li>
                                                <li><Link href="/comming-soon">DevOps</Link></li>
                                                <li><Link href="/comming-soon">Mobile App </Link></li>
                                                <li><Link href="/comming-soon">UX/UI Design</Link></li>
                                                <li><Link href="/comming-soon">QA &amp Testing</Link></li>
                                                <li><Link href="/comming-soon">Product Engg. </Link></li>
                                                <li><Link href="/ccomming-soon">Cloud Computing</Link></li>
                                                <li><Link href="/comming-soon">Custom Website</Link></li>
                                                <li><Link href="/comming-soon">Networking</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children"><Link href="/service">Industries</Link>
                                        <ul className="sub-menu">
                                                <li><Link href="/comming-soon">Fintech Software Development Company</Link></li>
                                                <li><Link href="/comming-soon">Education Software Development Company</Link></li>
                                                <li><Link href="/comming-soon">Energy and Utility Industry Solutions</Link></li>
                                                <li><Link href="/comming-soon">Healthcare Software Development Company</Link></li>
                                                <li><Link href="/ccomming-soon">Logistics Software Development Company</Link></li>
                                                <li><Link href="/comming-soon">Media and Entertainment Solutions</Link></li>
                                                <li><Link href="/comming-soon">Real Estate Software Development Company</Link></li>
                                                <li><Link href="/comming-soon">eSports and Gamming Development Company</Link></li>
                                                <li><Link href="/comming-soon">SAAS product Development Company</Link></li>
                                            </ul>
                                        </li>
                                        <li className="has-children"><Link href="/blog">Blog</Link>
                                        </li>
                                        <li className="has-children"><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header-right">
                            <SearchForm />
                            <Link className="btn btn-brand-4-medium hover-up" href="#">Get Started
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 11.0003L18.4791 7.47949V10.3074H0V11.6933H18.4791V14.5213L22 11.0003Z" fill="true">
                                    </path>
                                </svg>
                            </Link>
                            <div className="burger-icon burger-icon-white" onClick={handleMobileMenu}>
                                <span className="burger-icon-top" />
                                <span className="burger-icon-mid" />
                                <span className="burger-icon-bottom" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </>
    )
}
