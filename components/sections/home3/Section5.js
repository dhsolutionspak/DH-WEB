
'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 10000
    },
    breakpoints: {
        1199: {
            slidesPerView: 4
        },
        800: {
            slidesPerView: 3
        },
        500: {
            slidesPerView: 2
        },
        350: {
            slidesPerView: 1
        },
        250: {
            slidesPerView: 1
        }
    },
}

export default function Section5() {
    return (
        <>

            <section className="section-box wow animate__animated animate__fadeIn box-testimonials-4">
                <div className="container">
                    <h2 className="heading-2 neutral-0">Testimonials</h2>
                    <p className="text-md neutral-500 mb-50">Read what our satisfied clients say about their experiences with
                    our services and how we've helped them achieve their goals.</p>
                </div>
                <div className="box-swiper-padding">
                    <div className="box-swiper">
                        <div className="swiper-container swiper-group-4">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                <SwiperSlide>
                                    <div className="card-testimonial-4">
                                        <div className="card-author">
                                            <div className="box-author"><Link href="#"><img src="/assets/imgs/page/homepage4/author.png" alt="Nivia" /></Link>
                                                <div className="author-info"><Link href="#"><span className="author-name neutral-0">John Doe</span></Link><span className="text-sm color-second-grey department">USA</span></div>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <p className="text-md color-second-grey">DH Solutions has been a game-changer for our business. Their AI and ML solutions have streamlined our operations and provided invaluable insights. The team's expertise and dedication are unmatched</p>
                                        </div>
                                    </div>
                                </SwiperSlide>


                                <SwiperSlide>
                                    <div className="card-testimonial-4">
                                        <div className="card-author">
                                            <div className="box-author"><Link href="#"><img src="/assets/imgs/page/homepage4/author2.png" alt="Nivia" /></Link>
                                                <div className="author-info"><Link href="#"><span className="author-name neutral-0">Ahmed Al-Farsi</span></Link><span className="text-sm color-second-grey department">Saudi Arabia</span></div>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <p className="text-md color-second-grey">Working with DH Solutions was a fantastic experience. Their data science services transformed our data into actionable strategies, driving our business growth.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>


                                <SwiperSlide>
                                    <div className="card-testimonial-4">
                                        <div className="card-author">
                                            <div className="box-author"><Link href="#"><img src="/assets/imgs/page/homepage4/author3.png" alt="Nivia" /></Link>
                                                <div className="author-info"><Link href="#"><span className="author-name neutral-0">Sara Al-Mansouri</span></Link><span className="text-sm color-second-grey department">Dubai</span></div>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <p className="text-md color-second-grey">The cybersecurity solutions provided by DH Solutions gave us peace of mind. Their team is highly professional and always ready to assist with any concerns.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="card-testimonial-4">
                                        <div className="card-author">
                                            <div className="box-author"><Link href="#"><img src="/assets/imgs/page/homepage4/author.png" alt="Nivia" /></Link>
                                                <div className="author-info"><Link href="#"><span className="author-name neutral-0">Khalid Al-Hamad</span></Link><span className="text-sm color-second-grey department">Kuwait</span></div>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <p className="text-md color-second-grey">DH Solutions developed a mobile app for our company, and it exceeded our expectations. The app's functionality and user interface are top-notch.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>


                                <SwiperSlide>
                                    <div className="card-testimonial-4">
                                        <div className="card-author">
                                            <div className="box-author"><Link href="#"><img src="/assets/imgs/page/homepage4/author3.png" alt="Nivia" /></Link>
                                                <div className="author-info"><Link href="#"><span className="author-name neutral-0">Fatima Al-Ansari</span></Link><span className="text-sm color-second-grey department">Qatar</span></div>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <p className="text-md color-second-grey">Their web development services are exceptional. DH Solutions created a stunning website for us that significantly enhanced our online presence.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="card-testimonial-4">
                                        <div className="card-author">
                                            <div className="box-author"><Link href="#"><img src="/assets/imgs/page/homepage4/author.png" alt="Nivia" /></Link>
                                                <div className="author-info"><Link href="#"><span className="author-name neutral-0">Emily Johnson</span></Link><span className="text-sm color-second-grey department">Canada</span></div>
                                            </div>
                                        </div>
                                        <div className="card-info">
                                            <p className="text-md color-second-grey">We engaged DH Solutions for a data science project, and the results were phenomenal. Their insights helped us make data-driven decisions that improved our business outcomes.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
