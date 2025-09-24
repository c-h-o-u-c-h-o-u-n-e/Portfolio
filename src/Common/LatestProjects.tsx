import React from 'react';
import { Link } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import Project1 from '../assets/img/projects/1.jpg';
import Project2 from '../assets/img/projects/2.jpg';
import Project3 from '../assets/img/projects/3.jpg';
import Project4 from '../assets/img/projects/4.jpg'
import Project5 from '../assets/img/projects/5.jpg';
import Project6 from '../assets/img/projects/6.jpg';
import Project7 from '../assets/img/projects/7.jpg';
import Project8 from '../assets/img/projects/8.jpg';

const LatestProjects = () => {
    return (
        <React.Fragment>
            <div className="fn__blog_list_wrap">
                <div className="fn__blog_list">
                    <div className="container">
                        <ul className="blog_list fn__masonry_list">
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{350: 1, 750: 2}}
                        >
                            <Masonry>

                                <li className="blog_item fn__masonry_item">
                                    <div className="fn__blog_item">
                                        <div className="blog_btns">
                                            <Link to="https://www.youtube.com/watch?v=YDXQ_nociO4" className="fn__popup_btn fn__popup_youtube fn__tooltip">
                                                <span className="tooltip_text">Watch Video</span>
                                                <svg version="1.1" className='fn__svg' id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 512 512" xmlSpace="preserve">
                                                    <g>
                                                        <g>
                                                            <path d="M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80
			                                            c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904
			                                            C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728
			                                            c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816
			                                            c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096
			                                            C512,181.088,504.704,138.592,490.24,113.92z M192,352V160l160,96L192,352z"/>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>

                                        <div className="img_holder">
                                            <Link to="/single"><img src={Project1} alt="" /> </Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Fashion</Link></span>
                                                <span className="author">May 07, 2024</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">

                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="/single">Spring Fashion Trends to Embrace This Season</Link></span></h3>
                                                <Link to="/single" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="blog_item fn__masonry_item">
                                    <div className="fn__blog_item">
                                        <div className="img_holder">
                                            <Link to="/single"><img src={Project2} alt="" /></Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Technology</Link></span>
                                                <span className="author">May 10, 2024</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="/single">Revolutionary Advancements in AI Technology</Link></span></h3>
                                                <Link to="/single" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="blog_item fn__masonry_item">
                                    <div className="fn__blog_item">
                                        <div className="img_holder">
                                            <Link to="/single"><img src={Project4} alt="" /></Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Food</Link></span>
                                                <span className="author">May 20, 2024</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="/single">Exploring Culinary Delights: A Gastronomic Journey</Link></span></h3>
                                                <Link to="/single" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="blog_item fn__masonry_item  block-small-img">
                                    <div className="fn__blog_item">

                                        <div className="blog_btns">

                                            <Link to="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true" className="fn__popup_btn fn__popup_soundcloud fn__tooltip">
                                                <span className="tooltip_text">Soundcloud</span>
                                                <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 408.81 230.04" xmlSpace="preserve">
                                                    <g>
                                                        <path d="M408.81,173.2c-2.11,6.79-3.37,14.01-6.49,20.31c-11.37,22.92-30.26,35.72-55.81,36.15c-42.95,0.71-85.92,0.25-128.88,0.2
		                                            c-8.07-0.01-13.19-5.46-13.2-13.82c-0.04-30.33-0.02-60.65-0.02-90.98c0-36.58,0-73.15,0-109.73c0-10.75,5.05-15.66,15.68-15.3
		                                            c50.08,1.73,92.21,33.75,107.09,81.71c2.15,6.92,3.22,14.18,4.75,21.12c7.21,0,14.55-0.75,21.7,0.13
		                                            c28.12,3.49,50.2,25.55,54.43,53.67c0.11,0.75,0.5,1.45,0.76,2.18C408.81,163.62,408.81,168.41,408.81,173.2z"/>
                                                        <path d="M178.86,128.09c0,29.27,0.03,58.53-0.02,87.8c-0.02,9.97-8.24,16.34-16.95,13.2c-5.12-1.85-7.89-5.66-8.5-11.02
		                                            c-0.15-1.31-0.08-2.66-0.08-3.99c0-57.6-0.01-115.2,0.01-172.8c0-1.86-0.07-3.76,0.3-5.56c1.32-6.47,7.32-10.82,13.76-10.15
		                                            c6.46,0.68,11.34,5.92,11.42,12.73c0.14,11.17,0.05,22.35,0.05,33.52C178.86,90.58,178.86,109.33,178.86,128.09z"/>
                                                        <path d="M76.66,153.23c0,21.02,0.06,42.03-0.03,63.05c-0.04,9.79-8.71,16.12-17.31,12.69c-5.19-2.07-7.97-6.1-8.16-11.68
		                                            c-0.16-4.65-0.05-9.31-0.05-13.97c0-36.98,0-73.96,0.01-110.93c0-1.86-0.06-3.76,0.3-5.56c1.28-6.32,7.03-10.63,13.36-10.19
		                                            c6.48,0.45,11.66,5.64,11.81,12.34c0.2,9.57,0.07,19.15,0.08,28.73C76.67,129.55,76.66,141.39,76.66,153.23z"/>
                                                        <path d="M102.21,153.23c0-21.02-0.06-42.03,0.03-63.05c0.04-9.78,8.72-16.11,17.32-12.68c5.19,2.07,7.97,6.11,8.15,11.69
		                                            c0.17,5.18,0.05,10.37,0.05,15.56c0,36.45,0,72.89-0.01,109.34c0,1.86,0.06,3.76-0.3,5.56c-1.28,6.32-7.04,10.63-13.36,10.18
		                                            c-6.48-0.46-11.66-5.64-11.8-12.35c-0.2-9.84-0.07-19.68-0.08-29.53C102.21,176.38,102.21,164.8,102.21,153.23z"/>
                                                        <path d="M25.56,166.05c0,12.23,0.03,24.47-0.01,36.7c-0.02,8.53-5.17,14.29-12.71,14.33c-7.54,0.03-12.81-5.74-12.82-14.21
		                                            c-0.03-24.6-0.03-49.21,0-73.81c0.01-8.44,5.35-14.21,12.9-14.13c7.39,0.08,12.59,5.79,12.62,14.01
		                                            C25.6,141.32,25.56,153.69,25.56,166.05z"/>
                                                    </g>
                                                </svg>
                                            </Link>

                                        </div>

                                        <div className="img_holder">
                                            <Link to="/single"><img src={Project3} alt="" /></Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Travel</Link></span>
                                                <span className="author">May 15, 2024</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="/single">Hidden Gems: Unexplored Destinations around the World</Link></span></h3>
                                                <Link to="/single" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>



                                <li className="blog_item fn__masonry_item" >
                                    <div className="fn__blog_item">

                                        <div className="blog_btns">
                                            <span className="fn__popup_btn fn__popup_gallery fn__tooltip">
                                                <Link to={Project1} className="zoom"></Link>
                                                <Link to={Project2} className="zoom"></Link>
                                                <Link to={Project3} className="zoom"></Link>
                                                <Link to={Project4} className="zoom"></Link>
                                                <span className="tooltip_text">See Gallery</span>
                                                <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                                    width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                                                    preserveAspectRatio="xMidYMid meet">
                                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                                        stroke="none">
                                                        <path d="M1270 4684 c-196 -42 -359 -202 -405 -395 -13 -55 -15 -233 -15
                                                    -1301 0 -855 3 -1253 11 -1290 29 -140 140 -289 264 -355 130 -68 -9 -63 1863
                                                    -63 l1693 0 76 25 c174 59 303 195 349 370 11 40 14 292 14 1310 0 1378 2
                                                    1317 -58 1429 -15 28 -56 81 -91 119 -74 78 -183 138 -285 156 -41 8 -578 11
                                                    -1705 10 -1375 0 -1657 -3 -1711 -15z m3379 -450 c17 -14 33 -39 36 -57 3 -18
                                                    4 -365 3 -772 l-3 -739 -347 404 c-191 223 -363 415 -382 428 -146 99 -345 88
                                                    -472 -25 -18 -15 -211 -243 -429 -506 l-398 -478 -147 145 c-167 165 -226 202
                                                    -341 212 -73 7 -170 -13 -228 -48 -20 -11 -177 -161 -348 -332 l-313 -311 0
                                                    995 c0 651 4 1008 10 1032 6 20 22 46 37 58 26 20 29 20 1659 20 l1632 0 31
                                                    -26z"/>
                                                        <path d="M1830 4049 c-123 -24 -245 -122 -302 -244 -23 -51 -31 -84 -35 -148
                                                    -12 -184 74 -335 235 -414 75 -37 78 -38 192 -38 114 0 117 1 192 38 161 79
                                                    247 230 235 414 -16 260 -257 443 -517 392z"/>
                                                        <path d="M528 3210 c-4 -8 -123 -400 -264 -870 -243 -809 -257 -860 -262 -952
                                                    -3 -79 0 -109 17 -166 39 -130 137 -244 256 -298 28 -12 799 -224 1715 -470
                                                    l1665 -448 126 0 126 -1 85 42 c95 47 171 119 212 202 22 42 226 676 226 700
                                                    0 8 -456 11 -1532 11 -868 0 -1574 5 -1629 10 -290 28 -532 199 -653 462 -74
                                                    158 -69 105 -76 993 -3 440 -8 793 -12 785z"/>
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>

                                        <div className="img_holder">
                                            <Link to="/single"><img src={Project6} alt="" /></Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Photography</Link></span>
                                                <span className="author">May 30, 2024</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="/single">Capturing the Beauty of Nature: Photography Tips</Link></span></h3>
                                                <Link to="/single" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="blog_item fn__masonry_item" >
                                    <div className="fn__blog_item">
                                        <div className="img_holder">
                                            <Link to="/single"><img src={Project5} alt="" /></Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Fitness</Link></span>
                                                <span className="author">May 25, 2024</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="/single">Transform Your Body: Fitness Tips and Techniques</Link></span></h3>
                                                <Link to="/single" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>


                                <li className="blog_item fn__masonry_item" >
                                    <div className="fn__blog_item">
                                        <div className="img_holder">
                                            <Link to="/single"><img src={Project8} alt="" /></Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Education</Link></span>
                                                <span className="author">June 10, 2024</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="/single">Empowering Minds: Educational Insights and Resources</Link></span></h3>
                                                <Link to="/single" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="blog_item fn__masonry_item" >
                                    <div className="fn__blog_item">

                                        <div className="blog_btns">

                                            <Link to="https://vimeo.com/337293658" className="fn__popup_btn fn__popup_vimeo fn__tooltip">
                                                <span className="tooltip_text">Watch Video</span>
                                                <svg version="1.0" className='fn__svg' xmlns="http://www.w3.org/2000/svg"
                                                    width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                                                    preserveAspectRatio="xMidYMid meet">

                                                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                                        stroke="none">
                                                        <path d="M4175 4804 c-265 -28 -596 -204 -869 -464 -137 -130 -294 -348 -373
                                                   -519 -31 -67 -125 -323 -120 -328 1 -1 67 3 146 8 302 20 433 -19 479 -144 71
                                                   -192 17 -456 -168 -822 -202 -400 -335 -546 -463 -504 -56 18 -153 114 -200
                                                   199 -98 177 -135 336 -187 805 -56 507 -147 983 -224 1171 -79 194 -211 361
                                                   -333 421 -92 46 -184 59 -298 45 -301 -38 -567 -207 -1155 -736 -85 -77 -212
                                                   -189 -283 -249 l-127 -109 0 -53 c0 -36 5 -57 16 -66 9 -7 38 -46 65 -85 87
                                                   -130 148 -161 292 -151 50 3 129 19 204 41 150 44 212 47 260 10 52 -39 112
                                                   -179 204 -474 132 -424 145 -471 270 -968 65 -260 135 -524 154 -588 157 -501
                                                   333 -770 579 -885 85 -40 162 -53 276 -45 247 15 502 130 800 360 434 335 869
                                                   859 1239 1495 291 501 566 1122 696 1572 50 172 59 230 59 389 1 122 -3 158
                                                   -22 225 -63 220 -231 369 -478 425 -87 20 -343 34 -439 24z"/>
                                                    </g>
                                                </svg>
                                            </Link>

                                        </div>

                                        <div className="img_holder">
                                            <Link to="/single"><img src={Project7} alt="" /></Link>
                                            <div className="fn__metas color_bg">
                                                <span className="cat"><Link to="/tag" className="fn__creative_link">Art</Link></span>
                                                <span className="author">June 05, 2024</span>
                                            </div>
                                        </div>
                                        <div className="title_holder">
                                            <div className="title_in">
                                                <h3 className="title fn__limited_title"><span><Link to="single">Unleashing Creativity: Artistic Inspirations</Link></span></h3>
                                                <Link to="/single" className="fn__icon_link_arrow">
                                                    <svg version="1.1" className='fn__svg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                        viewBox="0 0 298 123.8" xmlSpace="preserve">
                                                        <path d="M298,50.9L196.3,0l-29.1,14.5l38.2,19.1C108.8,37.1-4.3,123.9,0.1,123.5C0.7,129,98,65.5,221.6,65l-47.1,36.7L298,50.9z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </Masonry>
                            </ResponsiveMasonry>
                        </ul>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default LatestProjects
