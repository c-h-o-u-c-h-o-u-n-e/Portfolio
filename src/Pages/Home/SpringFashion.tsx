import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import slider1 from '../../assets/img/slider/1.jpg';
import slider2 from '../../assets/img/slider/2.jpg';
import slider3 from '../../assets/img/slider/3.jpg';
import slider4 from '../../assets/img/slider/4.jpg';
import slider5 from '../../assets/img/slider/5.jpg';

const SpringFashion = () => {

    return (
        <React.Fragment>
            <section id="home_featured_posts">
                <div className="container">
                    <div className="fn__featured_posts">
                        <div className="fp_decor"></div>
                        <div className="owl-carousel">
                            <Swiper navigation={false} pagination={true} modules={[Navigation, Pagination]}>
                                <SwiperSlide>
                                    <div className="item">
                                        <div className="img_holder">
                                            <Link to="/single">
                                                <img src={slider1} alt="" />
                                            </Link>
                                        </div>
                                        <div className="title_holder">
                                            <div className="fn__metas">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Fashion</Link></span>
                                                <span className="author">May 07, 2024</span>
                                            </div>
                                            <h3 className="fn__title fn__limited_title">
                                                <span>
                                                    <Link to="/single">Spring Fashion Trends to Embrace This Season</Link>
                                                </span>
                                            </h3>
                                            <p className="desc">Insecurity is a waste of time. When I was young, I lived like an old woman, and when I've got old, I had to live like a young person.</p>
                                            <div className="read_more">
                                                <Link to="/single" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>


                                <SwiperSlide>
                                    <div className="item">
                                        <div className="img_holder">
                                            <Link to="/single">
                                                <img src={slider2} alt="" />
                                            </Link>
                                        </div>
                                        <div className="title_holder">
                                            <div className="fn__metas">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Travel</Link></span>
                                                <span className="author">June 15, 2024</span>
                                            </div>
                                            <h3 className="fn__title fn__limited_title">
                                                <span>
                                                    <Link to="/single">Discovering Hidden Gems: Off the Beaten Path</Link>
                                                </span>
                                            </h3>
                                            <p className="desc">Explore the uncharted territories and hidden wonders waiting to be uncovered.</p>
                                            <div className="read_more">
                                                <Link to="/single" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item">
                                        <div className="img_holder">
                                            <Link to="/single">
                                                <img src={slider3} alt="" />
                                            </Link>
                                        </div>
                                        <div className="title_holder">
                                            <div className="fn__metas">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Food</Link></span>
                                                <span className="author">June 20, 2024</span>
                                            </div>
                                            <h3 className="fn__title fn__limited_title">
                                                <span>
                                                    <Link to="/single">Culinary Delights: A Gastronomic Journey</Link>
                                                </span>
                                            </h3>
                                            <p className="desc">Indulge in the flavors of world cuisines and savor every bite of exquisite dishes.</p>
                                            <div className="read_more">
                                                <Link to="/single" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item">
                                        <div className="img_holder">
                                            <Link to="/single">
                                                <img src={slider4} alt="" />
                                            </Link>
                                        </div>
                                        <div className="title_holder">
                                            <div className="fn__metas">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Technology</Link></span>
                                                <span className="author">June 25, 2024</span>
                                            </div>
                                            <h3 className="fn__title fn__limited_title">
                                                <span>
                                                    <Link to="/single">Breaking Boundaries: Innovations in Tech</Link>
                                                </span>
                                            </h3>
                                            <p className="desc">Explore the latest technological breakthroughs and their impact on society.</p>
                                            <div className="read_more">
                                                <Link to="/single" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item">
                                        <div className="img_holder">
                                            <Link to="/single">
                                                <img src={slider5} alt="loding.." />
                                            </Link>
                                        </div>
                                        <div className="title_holder">
                                            <div className="fn__metas">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Health</Link></span>
                                                <span className="author">June 30, 2024</span>
                                            </div>
                                            <h3 className="fn__title fn__limited_title">
                                                <span>
                                                    <Link to="/single">Wellness and Beyond: A Journey to Better Health</Link>
                                                </span>
                                            </h3>
                                            <p className="desc">Embark on a path towards holistic wellness and embrace a healthier lifestyle.</p>
                                            <div className="read_more">
                                                <a href="single.html" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment >
    )
}

export default SpringFashion
