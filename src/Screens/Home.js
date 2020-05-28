import React, { Component } from 'react'
import Header from '../Layout/Header/Header'
import Cover from '../Layout/Cover/Cover'
import Course from '../Layout/Course/Course'
import Review from '../Layout/Review/Review'
import Footer from '../Layout/Footer/Footer'

export default class Home extends Component {
    render() {
        return (
            <>
                {/* HEADER */}
                <Header history={this.props.history} />
                {/* COVER */}
                <div className="myCover container" style={{ backgroundImage: 'url(./img/headerbg.png)' }}>
                    <Cover />
                </div>
                {/* COURSE */}
                <Course />

                {/* MORE */}

                <section className="container bonus">
                    <div className="row">
                        <div className="col offer-title text-left">
                            <h3>KHÓA HỌC ƯU ĐÃI?</h3>
                            <span>Học theo lịch trình của bạn</span>
                            <div className="welcome-title__line" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="imagine">
                                <img src="https://dvch1hlupt.cdn.hostvn.net/button/image/540x540_11.jpg" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <div className="product__item"><a href>
                                        <div className="item__img"><img src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57e4def8ce4b145a1020dbf9/20170713-/ieltsvatoefl2.jpeg" alt="item" />
                                            <div className="img__overlay" />
                                        </div>
                                        <div className="item__info">
                                            <h5>Angular Essentials (Angular 2+ with TypeScrip...</h5>
                                            <h6>Jose Portilla</h6>
                                            <div className="rating"><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star-half-alt" aria-hidden="true" /><i className="far fa-star" aria-hidden="true" /><span className="score">3.5 <span className="reviews">(176,466)</span></span></div>
                                            <div className="price"><span className="old__price">$199.99</span><span className="price">$19.99 <i className="fas fa-tag" aria-hidden="true" /></span></div>
                                        </div>
                                    </a>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="product__item"><a href>
                                        <div className="item__img"><img src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-578b5f2f047c9913c37c1222/20200104-hanhpt03_thumbnailkhoa/untitled-1.png" alt="item" />
                                            <div className="img__overlay" />
                                        </div>
                                        <div className="item__info">
                                            <h5>Angular Essentials (Angular 2+ with TypeScrip...</h5>
                                            <h6>Jose Portilla</h6>
                                            <div className="rating"><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star-half-alt" aria-hidden="true" /><i className="far fa-star" aria-hidden="true" /><span className="score">3.5 <span className="reviews">(176,466)</span></span></div>
                                            <div className="price"><span className="old__price">$199.99</span><span className="price">$19.99 <i className="fas fa-tag" aria-hidden="true" /></span></div>
                                        </div>
                                    </a>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-3">
                            <div className="product__item"><a href>
                                <div className="item__img"><img src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57bd1aa7047c994a15e41aca/20190226-vietnd32_0225/motiongraphics.png" alt="item" />
                                    <div className="img__overlay" />
                                </div>
                                <div className="item__info">
                                    <h5>Angular Essentials (Angular 2+ with TypeScrip...</h5>
                                    <h6>Jose Portilla</h6>
                                    <div className="rating"><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star-half-alt" aria-hidden="true" /><i className="far fa-star" aria-hidden="true" /><span className="score">3.5 <span className="reviews">(176,466)</span></span></div>
                                    <div className="price"><span className="old__price">$199.99</span><span className="price">$19.99 <i className="fas fa-tag" aria-hidden="true" /></span></div>
                                </div>
                            </a>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="product__item"><a href>
                                <div className="item__img"><img src="https://d303ny97lru840.cloudfront.net/k-5a616192ce4b143552a50a0c/20191230-/vietnd34.png" alt="item" />
                                    <div className="img__overlay" />
                                </div>
                                <div className="item__info">
                                    <h5>Angular Essentials (Angular 2+ with TypeScrip...</h5>
                                    <h6>Jose Portilla</h6>
                                    <div className="rating"><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star-half-alt" aria-hidden="true" /><i className="far fa-star" aria-hidden="true" /><span className="score">3.5 <span className="reviews">(176,466)</span></span></div>
                                    <div className="price"><span className="old__price">$199.99</span><span className="price">$19.99 <i className="fas fa-tag" aria-hidden="true" /></span></div>
                                </div>
                            </a>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="product__item"><a href>
                                <div className="item__img"><img src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57b67d6e60af25054a055b20/20171207-chiendn20712/61gdgmgrrnl_sl1465_.jpg" alt="item" />
                                    <div className="img__overlay" />
                                </div>
                                <div className="item__info">
                                    <h5>Angular Essentials (Angular 2+ with TypeScrip...</h5>
                                    <h6>Jose Portilla</h6>
                                    <div className="rating"><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star-half-alt" aria-hidden="true" /><i className="far fa-star" aria-hidden="true" /><span className="score">3.5 <span className="reviews">(176,466)</span></span></div>
                                    <div className="price"><span className="old__price">$199.99</span><span className="price">$19.99 <i className="fas fa-tag" aria-hidden="true" /></span></div>
                                </div>
                            </a>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="product__item"><a href>
                                <div className="item__img"><img src="https://d1nzpkv5wwh1xf.cloudfront.net/320/k-57e4def8ce4b145a1020dbf9/20180831-hoangvm15-31818/acastro_180130_1777_000101522.jpg" alt="item" />
                                    <div className="img__overlay" />
                                </div>
                                <div className="item__info">
                                    <h5>Angular Essentials (Angular 2+ with TypeScrip...</h5>
                                    <h6>Jose Portilla</h6>
                                    <div className="rating"><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star" aria-hidden="true" /><i className="fas fa-star-half-alt" aria-hidden="true" /><i className="far fa-star" aria-hidden="true" /><span className="score">3.5 <span className="reviews">(176,466)</span></span></div>
                                    <div className="price"><span className="old__price">$199.99</span><span className="price">$19.99 <i className="fas fa-tag" aria-hidden="true" /></span></div>
                                </div>
                            </a>
                            </div>
                        </div>


                    </div>
                </section>
                {/* OUR STUDENT REVIEW */}
                <Review />

                {/* TESTIMONIAL */}
                < section className="testimonial" >
                    <div className="row">
                        <div className="col offer-title text-left">
                            <h3>CẢM NHẬN CỦA HỌC VIÊN?</h3>
                            <span>Học theo lịch trình của bạn</span>
                            <div className="welcome-title__line" />
                        </div>
                    </div>
                    <div className="testi__top">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 testi__left pl-0">
                                    <div className="testi__wrapper">
                                        <div className="testi__img">
                                            <img src="/img/quote1.png" alt="testi" />
                                        </div>
                                        <div className="testi__info">
                                            <h6>TẤT CẢ NHỮNG KHÓA HỌC BẠN MUỐN</h6>
                                            <p><i className="fas fa-quote-left" aria-hidden="true" />
                                                Được học tập và làm việc với đội ngũ tại Skilled &amp;
                                               Tôi ấn tượng bởi sự tiến bộ và chuyên nghiệp của họ.
                                                   <i className="fas fa-quote-right" aria-hidden="true" />
                                            </p>
                                            <h6>- RAN CARROLL, Skilled Student</h6>
                                            <div className="rating">
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <i className="far fa-star" aria-hidden="true" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 testi__right pr-0">
                                    <div className="testi__wrapper">
                                        <div className="testi__img">
                                            <img src="/img/quote2.png" alt="testi" />
                                        </div>
                                        <div className="testi__info">
                                            <h6>TẤT CẢ NHỮNG KHÓA HỌC BẠN MUỐN</h6>
                                            <p><i className="fas fa-quote-left" aria-hidden="true" /> Tôi rất vinh dụ vì được học tập và làm việc tại skilled,
                                            tất cả khóa học đêu rất thực tế và hữu ích
                                                                         <i className="fas fa-quote-right" aria-hidden="true" />
                                            </p>
                                            <h6>- CRISS JAM</h6>
                                            <div className="rating">
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <i className="fas fa-star" aria-hidden="true" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testi__bot">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-8 col-md-8 col-lg-8 col-xl-8 bot__left px-0">
                                    <div className="bot__wrapper">
                                        <div className="bot__icon">
                                            <span className="lnr lnr-laptop-phone" />
                                        </div>
                                        <div className="bot__info">
                                            <h6>2000+ HỌC VIÊN SẴN SÀNG THAM GIA KHÓA HỌC</h6>
                                            <p>Đăng kí kênh để nhận thêm nhiều ưu đãi </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 bot__right px-0">
                                    <button>LEARN MORE ABOUT US</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                {/* FOOTER */}
                < Footer />

            </>


        )
    }
}
